# Chat Analyzer
**Project Description** : The Chat Analyzer is a web application built using Next.js, which allows users to upload their WhatsApp chat exports (in .txt format), analyze the contents using Gemini AI, and categorize them into predefined themes. Additionally, it displays a word cloud of the most frequent words from the chat using react-tagcloud.

# Tech Stack

Next.js: React framework with server-side rendering.

react-tagcloud: A React component to display a word cloud of frequent words.

TailwindCSS: For styling.

Google Gemini API: For content analysis and categorization of chat messages.

# Features

- Chat Upload: Allows users to upload .txt files containing their WhatsApp chat export.

- Content Categorization: Categorizes the chat content into different themes using Gemini AI or other models.

- Word Cloud: Displays a word cloud showing the most frequent words in the chat.

# Setup

1. Clone the repository.

2. Install the dependencies using `pnpm install`.

3. Create a `.env` file in the root directory and add the following environment variables:

```
GEMINI_API_KEY=YOUR_API_KEY
```

4. Run the development server using `pnpm run dev`.

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

