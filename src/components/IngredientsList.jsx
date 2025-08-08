export default function IngredientsList({ ingredients, getRecipe }) {
  const ingredientsListItems = ingredients.map((item) => (
    <li key={item} className="mb-2 text-gray-700">
      {item}
    </li>
  ));

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Ingredients on hand:</h2>
      <ul className="mb-8 list-disc ml-5">{ingredientsListItems}</ul>
      {ingredients.length >= 4 && (
        <div className="flex flex-col sm:flex-row bg-gray-300 p-10 rounded-md mb-8 justify-between">
          <div>
            <h3 className="text-md font-bold mb-2">Ready for a recipe?</h3>
            <p className="text-sm text-gray-600 mb-5 sm:mb-0">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            onClick={getRecipe}
            className="bg-amber-600 text-white text-sm sm:px-8 w-54 py-3 sm:py-0 rounded-md hover:bg-amber-700 self-center sm:self-auto"
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}
