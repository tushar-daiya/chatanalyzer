"use client";
import Categories from "@/components/Categories";
import FileUpload from "@/components/FileUpload";
import Links from "@/components/Links";
import WordCloud from "@/components/WordCloud";
import React from "react";

export default function Home() {
  const [file, setFile] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [analyzedData, setAnalyzedData] = React.useState<any | null>(null);
  const handleAnalyze = async () => {
    const reader = new FileReader();
    reader.onload = async () => {
      setAnalyzedData(null);
      const text = reader.result as string;
      setLoading(true);
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat: text }),
      });
      const data = await res.json();
      const jsonObject = data.body.substring(
        data.body.indexOf("{"),
        data.body.lastIndexOf("}") + 1
      );
      const jsonData = JSON.parse(jsonObject);
      setAnalyzedData(jsonData);
      setLoading(false);
    };
    reader.readAsText(file as Blob);
  };
  return (
    <div>
      <div className="p-4 rounded-lg bg-card border shadow-sm max-w-lg mx-auto mt-4">
        <h1 className="text-2xl font-bold">File Analyzer</h1>
        <FileUpload file={file} setFile={setFile} />
        <button
          onClick={handleAnalyze}
          disabled={!!!file || loading}
          className="mt-4 bg-green-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg mx-auto block"
        >
          Analyze
        </button>
      </div>
      {loading && (
        <div className="max-w-lg mx-auto mt-4 p-4 bg-card border rounded-lg">
          <h1 className="text-2xl font-bold">Analyzing...</h1>
        </div>
      )}
      {analyzedData && (
        <div className="max-w-4xl p-8 bg-card border rounded-lg mx-auto mt-10 divide-y-2">
          <h1 className="text-3xl font-bold">A brief analysis of your chat</h1>
          <Categories data={analyzedData?.categories} />
          <Links data={analyzedData?.links} />
          <WordCloud data={analyzedData?.keywordsFrequency} />
        </div>
      )}
    </div>
  );
}
