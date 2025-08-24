// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function LandingPage() {
    const navigate = useNavigate()

  const startQuiz = () => {
    navigate("/quiz")
  }
  return (
    <div>
      <h1>Welcome Cool Trivia</h1>

      <div>
        <label>
          Topic:
          <input
            type="text"
            placeholder="Search or select topic..."
            className="w-full p-2 border rounded mt-1"
          />
        </label>

        <label>
          Difficulty:
          <select>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>

        <label>
          Number of Questions:
          <input
            type="number"
            defaultValue={5}
            min={1}
            max={20}
            
          />
        </label>

        <Link to="/quiz">
          <button>
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
