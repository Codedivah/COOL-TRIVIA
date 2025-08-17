// src/pages/ResultPage.jsx
import { Link } from "react-router-dom";

function ResultPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h2>
      <p className="text-lg mb-6">Your Score: 0 / 10</p>

      <div className="flex gap-4">
        <Link to="/quiz">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Retake Quiz
          </button>
        </Link>
        <Link to="/">
          <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;
