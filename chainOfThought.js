import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function chefAI(userInput) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
You are ChefAI. For any recipe request, explain your reasoning step by step (Chain of Thought) before giving the final recipe.

User: Create a vegetarian recipe using ${userInput}.
`;

  const result = await model.generateContent(prompt);

  console.log("\n ChefAI Chain-of-Thought Recipe:");
  console.log(result.response.text());
}

// Take dynamic input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an ingredient for ChefAI to cook with: ", (answer) => {
  chefAI(answer);
  rl.close();
});
