import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { assets } from "../assets/assets";

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

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent triggering card click
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

  const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent triggering card click
    if (isFavoritePage && onRemoveFavorite) {
      onRemoveFavorite();
    } else {
      handleFavoriteClick(e);
    }
  };

  const handleMoreInfoClick = () => {
    // You can replace this with any action, such as opening a modal or navigating to a detailed recipe page
    console.log("More information about the recipe:", recipeTitle);
  };

  return (
      <div
          key={id}
          onClick={onClick} // 🔥 Now triggers modal open
          className="bg-orange-200 rounded-xl shadow-md overflow-hidden flex flex-col justify-between transition-transform duration-200 transform hover:scale-105 cursor-pointer"
      >
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
              src={image}
              alt={recipeTitle}
              className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 font-montserrat relative">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-orange-900">{recipeTitle}</h3>
            <img src={assets.rating_starts} alt="rating" className="h-5" />
          </div>

          <p className="text-sm text-gray-700">
            <span className="font-semibold text-orange-800">Cooking Time:</span> {cookingTime || "N/A"}
          </p>

          <p className="text-gray-700 text-sm">{instructions}</p>

          <div>
            <h4 className="text-orange-800 font-semibold">Ingredients:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
              {Array.isArray(ingredients) && ingredients.length > 0 ? (
                  ingredients.map((item, i) => <li key={item + i}>{item}</li>)
              ) : (
                  <li>No ingredients available</li>
              )}
            </ul>
          </div>

          {/* Favorite Button */}
          <button
              onClick={handleIconClick}
              className="absolute bottom-12 right-4 p-2 rounded-full hover:bg-white/70 transition"
          >
            <Heart
                size={20}
                fill={isFavorite || isFavoritePage ? "red" : "none"}
                className={`${
                    isFavorite || isFavoritePage ? "text-red-500" : "text-gray-400"
                }`}
            />
          </button>

          {/* More About This Recipe Button */}
          <button
              onClick={handleMoreInfoClick}
              className="mt-4 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
          >
            More About This Recipe
          </button>
        </div>
      </div>
  );
};

export default RecipeItem;
