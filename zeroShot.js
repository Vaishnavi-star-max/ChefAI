import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function chefAI() {
  // pick a model (flash = fast, pro = more powerful)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Suggest a quick vegetarian dinner recipe using paneer and spinach.";

  const result = await model.generateContent(prompt);

  console.log("🍽️ ChefAI Suggestion:");
  console.log(result.response.text());
}

chefAI();
