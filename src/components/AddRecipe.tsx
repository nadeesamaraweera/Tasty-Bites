import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { FaHeart } from "react-icons/fa";

interface RecipeItemProps {
    id: string;
    recipeTitle: string;
    image: string;
    ingredients: string[];
    cookingTime: string;
    instructions: string;
    isFavoritePage?: boolean;
    onRemoveFavorite?: () => void;
    onClick?: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({
                                                   id,
                                                   recipeTitle,
                                                   image,
                                                   ingredients,
                                                   cookingTime,
                                                   instructions,
                                                   isFavoritePage = false,
                                                   onRemoveFavorite,
                                                   onClick,
                                               }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const existing = localStorage.getItem(id);
        if (existing) setIsFavorite(true);
    }, [id]);

    const handleFavoriteClick = () => {
        const newFavoriteStatus = !isFavorite;
        setIsFavorite(newFavoriteStatus);

        if (newFavoriteStatus) {
            localStorage.setItem(
                id,
                JSON.stringify({ id, recipeTitle, image, ingredients, instructions })
            );
        } else {
            localStorage.removeItem(id);
        }
    };

    const handleIconClick = () => {
        if (isFavoritePage && onRemoveFavorite) {
            onRemoveFavorite();
        } else {
            handleFavoriteClick();
        }
    };

    return (
        <div
            className="bg-orange-100 rounded-2xl shadow-md w-full cursor-pointer overflow-hidden"
            onClick={onClick}
        >
            <div className="w-full h-48 overflow-hidden">
                <img src={image} alt={recipeTitle} className="w-full h-full object-cover" />
            </div>

            <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold font-montserrat">{recipeTitle}</h3>
                    <img src={assets.rating_starts} alt="rating" className="w-20" />
                </div>

                <div className="text-sm font-semibold font-montserrat">
                    Cooking Time: {cookingTime}
                </div>

                <p className="text-sm text-gray-700 font-montserrat">{instructions}</p>

                <div className="font-bold font-montserrat mt-2">Ingredients:</div>
                <ul className="list-disc list-inside text-sm text-gray-700">
                    {Array.isArray(ingredients) ? (
                        ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                    ) : (
                        <li>No ingredients available</li>
                    )}
                </ul>

                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        handleIconClick();
                    }}
                    className="mt-2"
                >
                    <FaHeart
                        className={`text-xl ${
                            isFavorite || isFavoritePage ? "text-red-500" : "text-gray-400"
                        }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default RecipeItem;
