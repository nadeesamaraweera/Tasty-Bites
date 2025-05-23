import React, { useState } from "react";
import RecipeItem from "../components/RecipeItem";
import SearchBar from "../components/SearchBar";
import { Recipe } from "../model/Recipe";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, updateRecipe } from "../reducers/RecipeSlice";
import Swal from "sweetalert2";
import { RootState } from "../store/store.ts";
import {Edit3} from "lucide-react"; // ✅ Make sure this path is correct

const RecipesDisplay: React.FC = () => {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const dispatch = useDispatch();
    const recipes = useSelector((state: RootState) => state.recipes);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Searching for:", query);
    };

    const handleOpenModal = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedRecipe(null);
    };

    const handleUpdate = () => {
        if (!selectedRecipe) return;

        if (!selectedRecipe.recipeTitle.trim()) {
            alert("Recipe title is required");
            return;
        }

        if (!Array.isArray(selectedRecipe.ingredients)) {
            alert("Ingredients must be an array");
            return;
        }

        const updatedRecipe: Recipe = {
            ...selectedRecipe,
            ingredients: selectedRecipe.ingredients.map((i) => i.trim()),
            cookingTime: selectedRecipe.cookingTime.trim(),
            instructions: selectedRecipe.instructions.trim(),
        };

        dispatch(updateRecipe(updatedRecipe));
        Swal.fire({
            title: "✅ Recipe updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
            background: "white",
            color: "blur",
            confirmButtonColor: "#D2691E",
            width: "450px",
        });
        handleCloseModal();
    };

    const handleDelete = () => {
        if (!selectedRecipe) return;

        Swal.fire({
            title: "⚠️ Are you sure?",
            html: "<p>Do you really want to delete this Recipe?</p>",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "No, Cancel",
            background: "white",
            color: "black",
            confirmButtonColor: "#D2691E",
            cancelButtonColor: "gray",
            width: "450px",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteRecipe(selectedRecipe.id));

                Swal.fire({
                    title: "✅ Recipe deleted successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                    background: "white",
                    color: "black",
                    confirmButtonColor: "#D2691E",
                    width: "450px",
                });

                handleCloseModal();
            }
        });
    };

    const filteredRecipes = recipes.filter((recipe) => {
        const lowerQuery = query.toLowerCase();
        const titleMatch = recipe.recipeTitle.toLowerCase().includes(lowerQuery);
        const ingredientsMatch = recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(lowerQuery)
        );
        return titleMatch || ingredientsMatch;
    });

    return (
        <section id="recipes-display"
                 className="w-full bg-gradient-to-r from-yellow-250 to-orange-100 py-12 border-t border-orange-300 text-center">
            <h3 className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase">
                Top Recipes Just for You 🍽️
            </h3>

            <SearchBar query={query} setQuery={setQuery} handleSubmit={handleSubmit} />

            <div className="grid gap-8 m-20 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredRecipes.map((recipe) => (
                    <RecipeItem
                        key={recipe.id}
                        {...recipe}
                        onClick={() => handleOpenModal(recipe)}
                    />
                ))}
            </div>

            {open && selectedRecipe && (
                <div className="fixed inset-0 bg-white/30  flex items-center justify-center z-50">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdate();
                        }}
                        className="relative bg-[#f6e1d2] w-[90%] max-w-md p-6 rounded-xl shadow-lg space-y-4"
                    >
                        {/* Close Icon */}
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="absolute top-3 right-4 text-3xl text-gray-700 hover:text-gray-900 font-bold"
                        >
                            &times;
                        </button>

                        <h3 className="text-2xl text-center font-bold text-orange-900 flex items-center justify-center gap-2">
                            <Edit3 className="w-5 h-5 text-orange-800"/>
                            Edit Recipe
                        </h3>

                        {/* Recipe Title */}
                        <div className="text-left">
                            <label className="text-lg text-orange-800 font-semibold block mb-1">Recipe Title:</label>
                            <input
                                type="text"
                                placeholder="update recipe title"
                                value={selectedRecipe.recipeTitle}
                                onChange={(e) =>
                                    setSelectedRecipe({
                                        ...selectedRecipe,
                                        recipeTitle: e.target.value,
                                    })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Cooking Time */}
                        <div className="text-left">
                            <label className="text-lg text-orange-800 font-semibold block mb-1">Cooking Time:</label>
                            <input
                                type="text"
                                placeholder="update cooking time"
                                value={selectedRecipe.cookingTime}
                                onChange={(e) =>
                                    setSelectedRecipe({
                                        ...selectedRecipe,
                                        cookingTime: e.target.value,
                                    })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Ingredients */}
                        <div className="text-left">
                            <label className="text-lg text-orange-800 font-semibold block mb-1">Ingredients:</label>
                            <input
                                type="text"
                                placeholder="Comma separated ingredients"
                                value={Array.isArray(selectedRecipe.ingredients) ? selectedRecipe.ingredients.join(", ") : ""}
                                onChange={(e) =>
                                    setSelectedRecipe({
                                        ...selectedRecipe,
                                        ingredients: e.target.value.split(",").map((item) => item.trim()),
                                    })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        {/* Instructions */}
                        <div className="text-left">
                            <label className="text-lg text-orange-800 font-semibold block mb-1">Instructions:</label>
                            <textarea
                                placeholder="Enter recipe instructions"
                                value={selectedRecipe.instructions}
                                onChange={(e) =>
                                    setSelectedRecipe({
                                        ...selectedRecipe,
                                        instructions: e.target.value,
                                    })
                                }
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px]"
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                type="submit"
                                className="bg-[#7e3f12] text-white px-4 py-2 rounded hover:bg-[#5d2d0a]"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-100"
                            >
                                Delete
                            </button>
                        </div>
                    </form>


                </div>
            )}
        </section>
    );
};

export default RecipesDisplay;
