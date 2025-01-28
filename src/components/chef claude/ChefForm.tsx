export default function ChefForm() {
    const ingredients = ["Chicken", "Tomato "]
    return (
        <main>
            <form className="add-ingredient-form">
                <input type="text" aria-label="Add ingredient" placeholder="e.g. Eggs"/>
                <button>Add ingredient</button>
            </form>
            <div className="ingredients-list">
                <h1>Ingredient on hand:</h1>
                <ul>
                    {ingredients.map((ingredient: unknown) => {
                        return (
                            <li>{ingredient}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="ingredient-action">
                <div className="ingredient-action-content">
                <h4>Ready for a recipe?</h4>
                <h5>Generate a recipe from your list of ingredients.</h5>
                </div>
                <button className="ingredient-submit">Get a recipe</button>
            </div>
        </main>
    )
}
