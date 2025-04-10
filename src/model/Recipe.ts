export class Recipe {
    id: string;
    image: string;
    recipeTitle: string;
    cookingTime: string;
    ingredients: string[];
    instructions: string

    constructor(
        id: string,
        image: string,
        recipeTitle: string,
        cookingTime: string,
        ingredients: string[],
        instructions: string
    ) {
        this.id = id;
        this.image = image;
        this.recipeTitle = recipeTitle;
        this.cookingTime = cookingTime;
        this.ingredients = ingredients;
        this.instructions = instructions
    }
}
