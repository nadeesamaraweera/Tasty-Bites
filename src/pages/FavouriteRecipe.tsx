import  { useEffect, useState } from "react";
import RecipeItem from "../components/RecipeItem";

const FavoriteRecipe = () => {
    const [favorites, setFavorites] = useState<any[]>([]);

    useEffect(() => {
        const storedFavorites = Object.keys(localStorage)
            .map((key) => {
                try {
                    const recipe = JSON.parse(localStorage.getItem(key) || "{}");
                    return recipe;
                } catch (e) {
                    return null;
                }
            })
            .filter(Boolean);
        setFavorites(storedFavorites);
    }, []);

    const handleRemoveFavorite = (id: string) => {
        localStorage.removeItem(id);
        setFavorites((prev) => prev.filter((recipe) => recipe.id !== id));
    };

    return (
        <section id="favourite-recipes"
                 className="w-full bg-gradient-to-r from-yellow-200 to-orange-100 py-12 border-t border-orange-300 text-center">
            <h3 className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase">
                Your Favorite Recipes
            </h3>

            {favorites.length === 0 ? (
                <p className="text-center text-gray-600 font-montserrat text-base">
                    No favorite recipes yet!
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {favorites.map((recipe) => (
                        <RecipeItem
                            key={`${recipe.id}-${recipe.recipeTitle}`}
                            id={recipe.id}
                            recipeTitle={recipe.recipeTitle}
                            image={recipe.image}
                            ingredients={recipe.ingredients}
                            instructions={recipe.instructions}
                            isFavoritePage={true}
                            onRemoveFavorite={() => handleRemoveFavorite(recipe.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default FavoriteRecipe;
