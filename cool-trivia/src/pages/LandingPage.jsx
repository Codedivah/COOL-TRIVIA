// src/pages/LandingPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  // State for quiz settings
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(5);

  const startQuiz = () => {
    navigate("/quiz", {
      state: {
        topic,
        difficulty,
        amount,
      },
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to Cool Trivia 🎉</h1>

      <div className="space-y-4 text-left">
        <label className="block">
          Topic:
  <select
    value={topic}
    onChange={(e) => setTopic(e.target.value)}
    className="w-full p-2 border rounded mt-1"
  >
    <option value="">Any Category</option>
    <option value="9">General Knowledge</option>
    <option value="21">Sports</option>
    <option value="23">History</option>
    <option value="17">Science & Nature</option>
    <option value="18">Computers</option>
    <option value="22">Geography</option>
    <option value="12">Music</option>
    <option value="14">Television</option>
  </select>
        </label>

        <label className="block">
          Difficulty:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <label className="block">
          Number of Questions:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min={1}
            max={20}
            className="w-full p-2 border rounded mt-1"
          />
        </label>

        <button
          onClick={startQuiz}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
