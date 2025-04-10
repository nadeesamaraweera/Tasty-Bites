import React, { useState } from "react";
import RecipesDisplay from "../components/RecipeDisplay";
import { Recipe } from "../model/Recipe";

// Example parent component
const ParentComponent: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    // Add your initial recipes data here

  ]);

  const handleUpdateRecipe = (updatedRecipe: Recipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  const handleDeleteRecipe = (recipeId: string) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== recipeId)
    );
  };

  return (
    <RecipesDisplay
      recipes={recipes}
      onUpdateRecipe={handleUpdateRecipe}
      onDeleteRecipe={handleDeleteRecipe}
    />
  );
};

export default ParentComponent;
