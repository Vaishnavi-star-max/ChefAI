#  ChefAI – AI-Powered Recipe Recommender

ChefAI is a smart cooking assistant that helps people find personalized recipes using the power of AI. It uses Large Language Models (LLMs), smart search (RAG), and helpful tools like API functions to suggest meals based on what you have in your kitchen or your food preferences.

---

##  Project Overview

* **Goal:** Help users find tasty, healthy, and easy recipes based on ingredients they already have, their diet, favorite cuisines, or how much time they want to spend cooking.
* **Who It's For:** Home cooks, busy people, fitness lovers, or anyone looking for meal ideas without wasting food.

---

##  Key Features (With Required Topics)

### 1. **System Prompt & User Prompt**

* **System Prompt:** Tells the AI how to behave.

  > *“You are ChefAI, a friendly and health-focused cooking assistant. Suggest recipes based on what users have and their preferences. If something is unclear, ask more questions.”*

* **User Prompt Examples:**

  * “What can I cook with chicken, garlic, and tomatoes?”
  * “Give me a quick 20-minute vegan dinner.”
  * “Suggest a low-carb Indian breakfast.”

---

### 2. **Tuning Parameters**

Users can control how creative or detailed the AI's response is:

* **Temperature:**

  * Low (0.3) = more focused and simple
  * High (0.8) = more creative and fun
* **Max Tokens:** Controls how long the output is.
* **Number of Recipes:** Choose to get 1, 3, or 5 options.
* **RAG Settings:** Choose how much extra recipe info is fetched from the knowledge base.

---

### 3. **Structured Output**

Recipes come in a clear and organized format like JSON or easy-to-read recipe cards.

**Example JSON:**

```json
{
  "title": "Spicy Garlic Chicken",
  "ingredients": ["chicken", "garlic", "soy sauce", "oil", "salt"],
  "instructions": [
    "Marinate chicken with garlic and soy sauce.",
    "Cook in oil for 10 minutes.",
    "Serve hot with rice or noodles."
  ],
  "time_required": "25 minutes",
  "diet_type": "non-vegetarian",
  "cuisine": "Asian"
}
```

Or shown as a recipe card in **Markdown**.

---

### 4. **Function Calling**

ChefAI can connect to other services using APIs to give more features:

* `getNutritionInfo(ingredients[])`: Tells you how many calories and nutrients a recipe has.
* `suggestShoppingList(missingItems[])`: Gives you a list of things to buy if something is missing.
* `generateRecipeImage(prompt)`: Shows an image of what the dish might look like.
* `getCookingVideo(recipeTitle)`: Finds a video on how to make the dish.

---

### 5. **RAG – Smart Search with Recipes**

ChefAI uses RAG (Retrieval-Augmented Generation) to give better answers:

* A **vector database** stores many recipes with info like:

  * Ingredients
  * Cuisine
  * Cooking style
* When a user asks something:

  * ChefAI **searches for similar recipes**
  * It then gives the AI more info to make the answer smarter and more useful.

---

##  Example of How It Works

**User says:** “I have eggs, cheese, and spinach. Suggest something healthy.”

1. The system sets the assistant’s tone and behavior.
2. It reads the user’s ingredients and health goal.
3. ChefAI searches its recipe database for matching ideas.
4. The AI writes a clear and structured recipe.
5. It uses a function to show calories and nutrients.

**User gets:**

* Full recipe (title, ingredients, steps)
* Health info
* Option to see an image or video of the recipe

---

## 🛠️ Tech Stack

* **Frontend:** React + Tailwind CSS (for user interface)
* **Backend:** Node.js + Express.js (server and API)
* **Database:** MongoDB (for user info and favorites)
* **Vector Database (for RAG):** Pinecone or ChromaDB
* **Language Model:** GPT-4 (or open-source LLMs)
* **APIs Used:**

  * Spoonacular / Edamam – recipes + nutrition info
  * YouTube Data API – cooking videos
  * Replicate / Stability – dish image generation

---
