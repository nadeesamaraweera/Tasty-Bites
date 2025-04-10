import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addRecipe} from "../reducers/RecipeSlice.ts";

const AddRecipes: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        image: "",
        recipeTitle: "",
        cookingTime: "",
        ingredients: "",
        instructions: "",
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    setPreview(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileSelect = () => {
        inputRef.current?.click();
    };

    const handleAddRecipe = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(
            addRecipe({
                id: Math.random().toString(36).substr(2, 9),
                image: preview || "",
                recipeTitle: formData.recipeTitle,
                cookingTime: formData.cookingTime,
                ingredients: formData.ingredients
                    .split(",")
                    .map((i) => i.trim())
                    .filter(Boolean),
                instructions: formData.instructions,
            })
        );

        setFormData({
            image: "",
            recipeTitle: "",
            cookingTime: "",
            ingredients: "",
            instructions: "",
        });
        setImage(null);
        setPreview(null);

        navigate("/");
    };

    return (
        <div
            className="min-h-[90vh] bg-gradient-to-br from-[#fff5ee] to-[#fef7f2] flex flex-col justify-end items-center p-4 font-montserrat">
            <div
                className="bg-white/80 backdrop-blur-md p-5 rounded-2xl w-full max-w-md border border-[#d6bfa6] shadow space-y-4 ">
                <h2 className="text-center text-xl font-bold text-[#b3541e] mb-2">
                    🍽️ Add New Recipe
                </h2>

                <form onSubmit={handleAddRecipe} className="space-y-3">
                    <div
                        onClick={triggerFileSelect}
                        className="w-full h-36 bg-white/60 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center cursor-pointer hover:border-orange-400 transition relative overflow-hidden"
                    >
                        {preview ? (
                            <img
                                src={preview}
                                alt="Uploaded"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <p className="text-gray-400 text-sm">📸 Click to upload</p>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            ref={inputRef}
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Recipe Name"
                        value={formData.recipeTitle}
                        onChange={(e) => setFormData({...formData, recipeTitle: e.target.value})}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/80"
                    />

                    <input
                        type="text"
                        placeholder="Cooking Time"
                        value={formData.cookingTime}
                        onChange={(e) => setFormData({...formData, cookingTime: e.target.value})}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/80"
                    />

                    <textarea
                        placeholder="Ingredients"
                        rows={2}
                        value={formData.ingredients}
                        onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/80"
                    ></textarea>

                    <textarea
                        placeholder="Instructions"
                        rows={3}
                        value={formData.instructions}
                        onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/80"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-orange-400 text-white text-l font-bold py-2 rounded-md shadow-sm transition-all"
                    >
                        ➕ Add Recipe
                    </button>
                </form>
            </div>
        </div>

    )
}

export default AddRecipes;
