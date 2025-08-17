// src/pages/QuizPage.jsx
import { Link } from "react-router-dom";

function QuizPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Quiz In Progress</h2>
      <p className="mb-4">Question placeholder will appear here...</p>

      <div className="space-y-2 mb-6">
        <button className="w-full bg-gray-200 p-2 rounded">Option 1</button>
        <button className="w-full bg-gray-200 p-2 rounded">Option 2</button>
        <button className="w-full bg-gray-200 p-2 rounded">Option 3</button>
        <button className="w-full bg-gray-200 p-2 rounded">Option 4</button>
      </div>

      <Link to="/result">
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Finish Quiz
        </button>
      </Link>
    </div>
  );
}

export default QuizPage;
