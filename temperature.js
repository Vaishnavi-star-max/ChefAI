import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function chefAI(userInput, temp) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are ChefAI. Create a short recipe using this ingredient: ${userInput}. Make it creative but clear.`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: temp,
      },
    });

    console.log(`\nChefAI Recipe (temperature = ${temp}):`);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an ingredient: ", (ingredient) => {
  rl.question("Enter temperature (0-1): ", (tempStr) => {
    const temp = parseFloat(tempStr);
    chefAI(ingredient, temp);
    rl.close();
  });
});
