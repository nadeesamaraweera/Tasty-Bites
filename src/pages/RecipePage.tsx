import React, { useState } from "react";

const allRecipes = [
    {
        title: "Spaghetti Carbonara",
        image: "/src/assets/recipe1.jpg",
        description: "A rich and creamy Italian classic with eggs, cheese, and bacon.",
    },
    {
        title: "Thai Green Curry",
        image: "/src/assets/recipe2.jpg",
        description: "A flavorful curry with coconut milk, green chilies, and fresh herbs.",
    },
    {
        title: "Avocado Toast",
        image: "/src/assets/recipe3.jpg",
        description: "Simple and nutritious toast topped with smashed avocado and eggs.",
    },
    {
        title: "Berry Smoothie Bowl",
        image: "/src/assets/recipe4.jpg",
        description: "Refreshing bowl packed with mixed berries, bananas, and granola.",
    },
    {
        title: "Classic Margherita Pizza",
        image: "/src/assets/recipe5.jpg",
        description: "Fresh tomatoes, mozzarella, and basil on a crispy homemade crust.",
    },
    {
        title: "Teriyaki Chicken",
        image: "/src/assets/recipe6.jpg",
        description: "Japanese-style grilled chicken coated in a sweet and savory sauce.",
    },
    {
        title: "Mushroom Risotto",
        image: "/src/assets/recipe7.jpg",
        description: "Creamy risotto made with arborio rice, mushrooms, and parmesan cheese.",
    },
    {
        title: "Greek Salad",
        image: "/src/assets/recipe8.jpg",
        description: "A refreshing mix of cucumbers, tomatoes, olives, and feta cheese.",
    },
];

const RecipePage: React.FC = () => {
    const [visibleRecipes, setVisibleRecipes] = useState(4); // Show only 4 initially

    const loadMoreRecipes = () => {
        setVisibleRecipes((prev) => Math.min(prev + 4, allRecipes.length)); // Load 4 more recipes
    };

    return (
        <section id="recipe"
                 className="w-full bg-gradient-to-r from-yellow-200 to-orange-200 py-12 border-t border-orange-500 text-center">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase"> Explore Our
                    Recipes 🍽️
                </h3>

                {/* Recipe Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {allRecipes.slice(0, visibleRecipes).map((recipe, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5 text-center">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
                                <p className="text-gray-500 text-sm">{recipe.description}</p>
                                <button
                                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">
                                    View Recipe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleRecipes < allRecipes.length && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={loadMoreRecipes}
                            className="px-6 py-3 bg-orange-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-orange-700 transition"
                        >
                            Load More Recipes
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RecipePage;
