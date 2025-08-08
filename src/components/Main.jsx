import { useState } from 'react';
import Recipe from './Recipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromMistral } from '../ai';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    if (newIngredient) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipe);
  }

  return (
    <main className="px-15 md:px-25 lg:px-35">
      <form
        className="flex justify-center align-middle gap-4 mt-15 mb-10"
        action={addIngredient}
      >
        <input
          className="border-gray-300 border-1 rounded-md min-w-[150px] max-w-[400px] text-lg grow px-4 py-2 shadow-sm"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="text-white text-sm bg-gray-700 hover:bg-gray-800 px-6 py-2 md:px-16 rounded-md shadow-sm text-nowrap">
          + Add ingredient
        </button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      ) : null}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
