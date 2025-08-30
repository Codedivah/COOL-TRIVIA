// src/pages/ResultPage.jsx
import { Link, useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h2>
      <p className="text-lg mb-6">
        Your Score: <span className="font-semibold">{score}</span> / {total}
      </p>
      <p className="text-md mb-6">
        {score === total 
          ? "Perfect! 🎯 Well done!" 
          : score > total / 2 
            ? "Great job! 👏" 
            : "Keep practicing, you’ll get better 💪"}
      </p>

      <div className="flex gap-4">
        <Link to="/LandingPage">
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
