import { useState } from 'react';
import Placeholder from './placeholder';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((item) => (
    <li key={item} className="mb-2 text-gray-700">
      {item}
    </li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    if (newIngredient) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }

  const [recipeShown, setRecipeShown] = useState(false);

  function showRecipe() {
    if (!recipeShown) {
      setRecipeShown(true);
    }
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
        <section>
          <h2 className="text-3xl font-bold mb-8">Ingredients on hand:</h2>
          <ul className="mb-8 list-disc ml-5">{ingredientsListItems}</ul>
          {ingredients.length >= 4 ? (
            <div className="flex flex-col sm:flex-row bg-gray-300 p-10 rounded-md mb-8 justify-between">
              <div>
                <h3 className="text-md font-bold mb-2">Ready for a recipe?</h3>
                <p className="text-sm text-gray-600 mb-5 sm:mb-0">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                onClick={showRecipe}
                className="bg-amber-600 text-white text-sm sm:px-8 w-54 py-3 sm:py-0 rounded-md hover:bg-amber-700 self-center sm:self-auto"
              >
                Get a recipe
              </button>
            </div>
          ) : null}
        </section>
      ) : null}
      {recipeShown ? <Placeholder /> : null}
    </main>
  );
}
