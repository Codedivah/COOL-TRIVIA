// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import { useQuery } from "@tanstack/react-query";
import { fetchQuestions } from "./utils/api";

function App() {
  // React Query fetch
  const { data, isLoading, error } = useQuery({
    queryKey: ["questions"], // unique key for caching
    queryFn: () => fetchQuestions(5, 9, "medium", "multiple"), // same params as before
  });

  if (isLoading) return <p>Loading questions...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("Fetched Questions with React Query:", data);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
