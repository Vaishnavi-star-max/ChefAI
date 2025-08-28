import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function chefAI(userIngredient) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Dynamic Prompt
  const prompt = `
You are ChefAI, a master Indian chef. 
Create a short recipe using this ingredient: ${userIngredient}.
Return:
- Title
- Ingredients
- Steps
- Cooking time
`;

  const result = await model.generateContent(prompt);
  console.log("\n ChefAI Dynamic Recipe:");
  console.log(result.response.text());
}

// Get user input dynamically
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an ingredient for ChefAI to cook with: ", (answer) => {
  chefAI(answer);
  rl.close();
});
