import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
export async function POST(req: NextRequest) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    const body = await req.json();
    const prompt = `You are given the following WhatsApp chat data, which consists of self-messages. Your task is to analyze, categorize, and identify patterns within the messages. Return the response strictly in this JSON schema:

Schema:
{
  "categories": Array<Category>,
  "keywordsFrequency": Array<KeywordFrequency>,
   "links": Array<string>,
}

Where:
- Category = {
    "name": string, // Name of the category (e.g., Work, Personal, Health, Reminders, Reflections)
    "messages": Array<string> // Messages that belong to this category without timestamps and you: prefix
  }
- KeywordFrequency = {
    "value": string, // A keyword detected in the chat
    "count": number // The frequency of this keyword in the messages
  }
    - Links = Array<string> // All URLs or hyperlinks found in the messages

Instructions:
1. Analyze the input chat messages and group them into meaningful categories.
2. Perform a keyword frequency analysis (ignore common stopwords like 'the', 'and', 'is').
3. Extract all hyperlinks (starting with http:// or https://) from the messages and list them under the 'links' key.

Return the output **strictly** in the JSON format described above.

Chat Data: ${body.chat}`;
    const res = await model.generateContent(prompt);
    return NextResponse.json({
      status: 200,
      body: res.response.text(),
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      status: 500,
      body: "Internal server error",
    });
  }
}
