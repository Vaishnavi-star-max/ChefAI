import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function chefAI(userInput) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // System + User prompts
  const messages = [
    {
      role: "system",
      content: "You are ChefAI, a friendly Michelin-starred chef. Always respond like a cooking guide, be concise but warm.",
    },
    {
      role: "user",
      content: `Create a recipe using this: ${userInput}`,
    },
  ];

  // In Gemini SDK, we combine them into one text prompt
  const prompt = messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join("\n\n");

  const result = await model.generateContent(prompt);
  console.log("\n ChefAI System+User Recipe:");
  console.log(result.response.text());
}

// Take input dynamically
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(" Enter an ingredient for ChefAI to cook with: ", (answer) => {
  chefAI(answer);
  rl.close();
});
