// Utility to fetch trivia questions from Open Trivia API

export async function fetchQuestions(amount = 5, category = "", difficulty = "", type = "multiple") {
  try {
    const url = new URL("https://opentdb.com/api.php");
    url.searchParams.append("amount", amount);

    if (category) url.searchParams.append("category", category);
    if (difficulty) url.searchParams.append("difficulty", difficulty);
    if (type) url.searchParams.append("type", type);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (data.response_code !== 0) {
      throw new Error("No questions found. Try different parameters.");
    }

    return data.results; // Array of questions
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
}
//Fetch questions from the Open Trivia Database API