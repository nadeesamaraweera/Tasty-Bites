import { create } from "zustand";

// Define types
interface Recipe {
    id: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
}

interface User {
    username: string;
    savedRecipes: Recipe[];
}

interface RecipeStore {
    recipes: Recipe[];
    favorites: Recipe[];
    user: User | null;
    fetchRecipes: () => Promise<void>;
    toggleFavorite: (recipe: Recipe) => void;
}

// Create Zustand store
const useRecipeStore = create<RecipeStore>((set, get) => ({
    recipes: [],
    favorites: [],
    user: JSON.parse(localStorage.getItem("user") || "null"),

    // ✅ Corrected Function Syntax
    fetchRecipes: async () => {
        try {
            const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
            if (!res.ok) throw new Error("Failed to fetch recipes");
            const data = await res.json();

            // ✅ Ensure `data.meals` is not null
            set({ recipes: data.meals ? data.meals : [] });
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    },

    toggleFavorite: (recipe) => {
        const { favorites } = get();
        const isFavorite = favorites.some((fav) => fav.id === recipe.id);

        const newFavorites = isFavorite
            ? favorites.filter((fav) => fav.id !== recipe.id)
            : [...favorites, recipe];

        set({ favorites: newFavorites });
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    },
}));

export default useRecipeStore;
