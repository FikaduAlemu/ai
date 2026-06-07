import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    setResponse("Thinking...");

    setTimeout(() => {
      setResponse(`You asked: "${prompt}"`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          AI Assistant
        </h1>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
          className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleAsk}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Send
        </button>

        {response && (
          <div className="mt-6 p-4 bg-gray-50 border rounded-xl">
            <h2 className="font-semibold text-gray-700 mb-2">Response</h2>
            <p className="text-gray-600">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}