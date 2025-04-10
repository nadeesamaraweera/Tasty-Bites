import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Type definition (optional unless you're passing the prop)
interface AddRecipesProps {
    onAddRecipe?: (newRecipe: any) => void;
}

const AddRecipes: React.FC<AddRecipesProps> = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
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

        const newRecipe = {
            id: Math.random().toString(36).substr(2, 9),
            image: preview || "",
            recipeTitle: formData.recipeTitle,
            cookingTime: formData.cookingTime,
            ingredients: formData.ingredients
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean),
            instructions: formData.instructions,
        };

        setFormData({
            image: "",
            recipeTitle: "",
            cookingTime: "",
            ingredients: "",
            instructions: "",
        });
        setImage(null);
        setPreview(null);

        console.log("Recipe saved successfully:", newRecipe);
        navigate("/");
    };

    return (
        <Box
            sx={{
                minHeight: "70vh",
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat, sans-serif",
                p: 4,
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#f6e1d2",
                    padding: 3,
                    borderRadius: 2,
                    maxWidth: 600,
                    width: "100%",
                    border: "3px solid #b28c71",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        color: "#bd5f1b",
                        fontWeight: 700,
                        mb: 3,
                    }}
                >
                    Add New Recipe
                </Typography>

                <form onSubmit={handleAddRecipe} noValidate>
                    {/* Image Upload Box */}
                    <Box
                        sx={{
                            width: "100%",
                            height: 200,
                            backgroundColor: "#fff",
                            border: "2px dashed #ccc",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            mb: 2,
                            position: "relative",
                            overflow: "hidden",
                        }}
                        onClick={triggerFileSelect}
                    >
                        {preview ? (
                            <img
                                src={preview}
                                alt="Preview"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        ) : (
                            <Typography color="gray">Upload Image</Typography>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            ref={inputRef}
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                    </Box>

                    {/* Recipe Name */}
                    <TextField
                        placeholder="Recipe Name"
                        fullWidth
                        value={formData.recipeTitle}
                        onChange={(e) =>
                            setFormData({ ...formData, recipeTitle: e.target.value })
                        }
                        sx={textFieldStyles}
                    />

                    {/* Cooking Time */}
                    <TextField
                        placeholder="Cooking Time"
                        fullWidth
                        value={formData.cookingTime}
                        onChange={(e) =>
                            setFormData({ ...formData, cookingTime: e.target.value })
                        }
                        sx={textFieldStyles}
                    />

                    {/* Ingredients */}
                    <TextField
                        placeholder="Ingredients (comma separated)"
                        multiline
                        rows={3}
                        fullWidth
                        value={formData.ingredients}
                        onChange={(e) =>
                            setFormData({ ...formData, ingredients: e.target.value })
                        }
                        sx={textFieldStyles}
                    />

                    {/* Instructions */}
                    <TextField
                        placeholder="Instructions"
                        multiline
                        rows={4}
                        fullWidth
                        value={formData.instructions}
                        onChange={(e) =>
                            setFormData({ ...formData, instructions: e.target.value })
                        }
                        sx={textFieldStyles}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 2,
                            fontWeight: 600,
                            backgroundColor: "#7e3f12",
                            fontFamily: "Montserrat, sans-serif",
                            "&:hover": {
                                backgroundColor: "#5d2d0a",
                                border: "2px solid white",
                            },
                        }}
                    >
                        Add Recipe
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

// Shared TextField Styles
const textFieldStyles = {
    mb: 2,
    fontSize: "13px",
    fontFamily: "Montserrat, sans-serif",
    "& .MuiOutlinedInput-root": {
        fontFamily: "Montserrat, sans-serif",
        "& fieldset": {
            borderColor: "#ccc",
        },
        "&:hover fieldset": {
            borderColor: "#FF5722",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#FF5722",
            borderWidth: "3px",
        },
    },
    "& .MuiInputBase-input::placeholder": {
        fontFamily: "Montserrat, sans-serif",
    },
};

export default AddRecipes;
