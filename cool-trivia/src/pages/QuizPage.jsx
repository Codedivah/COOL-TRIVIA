// src/pages/QuizPage.jsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchQuestions } from "../utils/api";

function QuizPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { topic, difficulty, amount } = location.state || {};

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["questions", { amount, category: topic, difficulty, type: "multiple" }],
    queryFn: ({ queryKey }) => {
      const [_key, params] = queryKey;
      return fetchQuestions(params.amount, params.category, params.difficulty, params.type);
    },
  });

  const [selectedAnswers, setSelectedAnswers] = useState({});

  if (isLoading) return <p>Loading questions...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const handleAnswerSelect = (qIndex, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: answer,
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    data.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct_answer) {
        score++;
      }
    });

   navigate("/result", { 
  state: { 
    score, 
    total: data.length, 
    settings: { topic, difficulty, amount } 
  } 
});

  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Quiz Page</h1>

      {data?.length > 0 ? (
        <>
          {data.map((q, index) => (
            <div key={index} className="mb-6 border p-4 rounded shadow">
              <p
                className="font-medium mb-2"
                dangerouslySetInnerHTML={{ __html: q.question }}
              />
              <ul className="space-y-2">
                {[...q.incorrect_answers, q.correct_answer]
                  .sort(() => Math.random() - 0.5)
                  .map((answer) => (
                    <li
                      key={answer}
                      className={`p-2 border rounded cursor-pointer hover:bg-gray-100 
                        ${selectedAnswers[index] === answer ? "bg-blue-200" : ""}`}
                      onClick={() => handleAnswerSelect(index, answer)}
                      dangerouslySetInnerHTML={{ __html: answer }}
                    />
                  ))}
              </ul>
            </div>
          ))}

          <div className="flex justify-between mt-6">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Back to Home
            </button>
            <button
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              Submit Quiz
            </button>
          </div>
        </>
      ) : (
        <p>No questions available</p>
      )}
    </div>
  );
}

export default QuizPage;
