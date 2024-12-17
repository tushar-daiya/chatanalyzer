"use client";
import React from "react";

type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
};

export default function FileUpload({ file, setFile }: Props) {
  const [error, setError] = React.useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(null);
    const file = e.target.files?.[0];

    if (!file) {
      setError("No file selected");
      return;
    }
    if (file.type !== "text/plain") {
      setError("Invalid file type");
      return;
    }
    if (file.size === 0) {
      setError("Empty file");
      return;
    }
    setError(null);
    console.log(file);
    setFile(file);
  };

  return (
    <div
      className={`${
        error ? "border-red-500" : "border-zinc-500"
      } w-full h-40 rounded-lg border-2 border-dashed mt-4`}
    >
      <label
        htmlFor="inputFile"
        className="cursor-pointer w-full h-full flex items-center flex-col justify-center"
      >
        {file && <p>{file.name}</p>}
        {!!!file && (
          <>
            <p className="text-center">Upload whatsapp chat</p>
            <p className="text-sm text-center text-muted-foreground">
              Drag and drop or click to browse
            </p>
          </>
        )}
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </label>
      <input
        onChange={handleFileChange}
        type="file"
        className="hidden"
        id="inputFile"
      />
    </div>
  );
}
