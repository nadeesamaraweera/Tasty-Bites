import { useEffect, useState } from "react";
import RecipeItem from "../components/RecipeItem";

const FavoriteRecipe = () => {
    const [favorites, setFavorites] = useState<any[]>([]);

    useEffect(() => {
        const storedFavorites = Object.keys(localStorage)
            .map((key) => {
                try {
                    const recipe = JSON.parse(localStorage.getItem(key) || "{}");
                    return recipe?.id && recipe?.recipeTitle ? recipe : null;
                } catch (e) {
                    return null;
                }
            })
            .filter(Boolean); // Remove null or invalid entries

        setFavorites(storedFavorites);
    }, []);

    const handleRemoveFavorite = (id: string) => {
        localStorage.removeItem(id);
        setFavorites((prev) => prev.filter((recipe) => recipe.id !== id));
    };

    return (
        <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center pt-28">
            <h3
                className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase">
                 Your Favorite Recipes
           </h3>
            {favorites.length === 0 ? (
                <p className="text-center text-lg text-gray-500 min-h-[300px] flex items-center">
                    No favorite recipes yet!
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    {favorites.map((recipe) => (
                        <div
                            className="w-full transform transition-transform duration-300 hover:scale-105"
                            key={recipe.id}
                        >
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl">
                                <RecipeItem
                                    id={recipe.id}
                                    recipeTitle={recipe.recipeTitle}
                                    image={recipe.image}
                                    ingredients={recipe.ingredients}
                                    instructions={recipe.instructions}
                                    isFavoritePage={true}
                                    onRemoveFavorite={() => handleRemoveFavorite(recipe.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoriteRecipe;
