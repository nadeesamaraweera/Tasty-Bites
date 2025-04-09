import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { assets } from "../assets/assets";

interface RecipeItemProps {
  id: string;
  recipeTitle: string;
  image: string;
  ingredients: string[];
  instructions: string;
  isFavoritePage?: boolean;
  onRemoveFavorite?: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({
                                                 id,
                                                 recipeTitle,
                                                 image,
                                                 ingredients,
                                                 instructions,
                                                 isFavoritePage = false,
                                                 onRemoveFavorite,
                                               }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existing = localStorage.getItem(id);
    if (existing) setIsFavorite(true);
  }, [id]);

  const handleFavoriteClick = () => {
    const newStatus = !isFavorite;
    setIsFavorite(newStatus);
    if (newStatus) {
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
          key={id}
          className="bg-orange-100 rounded-xl shadow-md overflow-hidden flex flex-col justify-between"
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
          {/* Title + Rating */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-orange-900">{recipeTitle}</h3>
            <img src={assets.rating_starts} alt="rating" className="h-5" />
          </div>

          {/* Instructions */}
          <p className="text-gray-700 text-sm">{instructions}</p>

          {/* Ingredients */}
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

          {/* Favorite Icon */}
          <button
              onClick={handleIconClick}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/70 transition"
          >
            <Heart
                size={20}
                fill={isFavorite || isFavoritePage ? "red" : "none"}
                className={`${
                    isFavorite || isFavoritePage ? "text-red-500" : "text-gray-400"
                }`}
            />
          </button>
        </div>
      </div>
  );
};

export default RecipeItem;
