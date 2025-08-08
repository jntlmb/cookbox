import { InferenceClient } from '@huggingface/inference';
import { HF_ACCESS_TOKEN } from '../config/env';

const SYSTEM_PROMPT = ` 
You are a concise and efficient assistant. You receive a list of ingredients and suggest a recipe the user could make using some or all of them.
    Do not use introductory phrases like "Sure" or "Here's a recipe."
    Output the recipe in Markdown.
    Use the following template for formatting:
        Start with the recipe name as a level-2 heading (##).
        Add a blank line after each section.
        Use a bold section title (**Ingredients:**, **Instructions:**) followed by a list.
        Use bullet points for ingredients and a numbered list for instructions.
Only include a few additional ingredients not in the user's list if necessary.

Template example (do not include this in your output):

**Recipe Name**

**Ingredients:**

- Ingredient 1  
- Ingredient 2  
- Ingredient 3  

**Instructions:**

1. Step one.  
2. Step two.  
3. Step three.
`;

const hf = new InferenceClient(HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientArr) {
  const ingredientsString = ingredientArr.join(', ');
  try {
    const response = await hf.chatCompletion({
      model: 'openai/gpt-oss-120b',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
