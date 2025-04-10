import React, { useEffect, useState } from "react";
import RecipeItem from "../components/RecipeItem"; // Assuming RecipeItem component exists

const MyRecipesPage: React.FC = () => {
    const [recipes, setRecipes] = useState<any[]>([]); // State to hold recipes

    // Fetch recipes from local storage
    useEffect(() => {
        const savedRecipes = localStorage.getItem("recipes"); // Retrieve saved recipes from localStorage
        if (savedRecipes) {
            setRecipes(JSON.parse(savedRecipes)); // Parse and set recipes if available
        }
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-center text-3xl font-bold mb-6">My Recipes</h1>

            {/* If no recipes, show a message */}
            {recipes.length === 0 ? (
                <p className="text-center text-gray-500">You haven't added any recipes yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Render each recipe */}
                    {recipes.map((recipe: any) => (
                        <RecipeItem
                            key={recipe.id}
                            id={recipe.id}
                            recipeTitle={recipe.recipeTitle}
                            image={recipe.image}
                            ingredients={recipe.ingredients}
                            cookingTime={recipe.cookingTime}
                            instructions={recipe.instructions}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyRecipesPage;
