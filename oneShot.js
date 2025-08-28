import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function chefAI() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // One-shot prompt: provide one example recipe, then ask for a new one
  const prompt = `
Example:
User: Suggest a quick vegetarian recipe using potatoes.
ChefAI: Sure! Here's a simple recipe:

**Aloo Masala (Spiced Potatoes)**
- Boil and peel 3 medium potatoes.
- Heat 2 tbsp oil, add cumin seeds and chopped onions.
- Add turmeric, chili powder, and salt.
- Mash potatoes into the mix and stir well.
- Garnish with coriander leaves.
Ready in 15 minutes!

Now your turn:
User: Suggest a quick vegetarian recipe using paneer and spinach.
ChefAI:
`;

  const result = await model.generateContent(prompt);

  console.log("ChefAI One-Shot Recipe:");
  console.log(result.response.text());
}

chefAI();
