import React, { useState } from "react";
import RecipeItem from "../components/RecipeItem";
import SearchBar from "../components/SearchBar";

interface RecipesDisplayProps {
    recipes: any[];
}

const RecipesDisplay: React.FC<RecipesDisplayProps> = ({ recipes }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Searching for:", query);
        // Add filter logic if needed
    };

    return (
        <section id="recipes" className="w-full bg-gradient-to-r from-yellow-200 to-orange-100 py-12 border-t border-orange-300 text-center">
            <h3 className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase">
                Top Recipes Just for You 🍽️
            </h3>

            <SearchBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                {recipes.map((recipe) => (
                    <RecipeItem
                        key={recipe.id}
                        id={recipe.id}
                        recipeTitle={recipe.recipeTitle}
                        image={recipe.image}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                    />
                ))}
            </div>
        </section>
    );
};

export default RecipesDisplay;
