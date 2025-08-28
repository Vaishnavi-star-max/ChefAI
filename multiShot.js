import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function chefAI() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
Example 1:
User: Suggest a quick vegetarian recipe using potatoes.
ChefAI: 
**Aloo Masala**
- Ingredients: potatoes, onion, spices
- Steps: boil, mash, sauté with spices
- Ready in 15 minutes.

Example 2:
User: Suggest a quick vegetarian recipe using mushrooms.
ChefAI:
**Garlic Butter Mushrooms**
- Ingredients: mushrooms, garlic, butter, herbs
- Steps: sauté mushrooms in garlic butter, season with herbs
- Ready in 10 minutes.

Example 3:
User: Suggest a quick vegetarian recipe using tomatoes.
ChefAI:
**Tomato Basil Soup**
- Ingredients: tomatoes, basil, garlic, olive oil
- Steps: cook tomatoes with garlic, blend, add basil
- Ready in 20 minutes.

Now your turn:
User: Suggest a quick vegetarian recipe using paneer and spinach.
ChefAI:
`;

  const result = await model.generateContent(prompt);

  console.log("ChefAI Multi-Shot Recipe:");
  console.log(result.response.text());
}

chefAI();
