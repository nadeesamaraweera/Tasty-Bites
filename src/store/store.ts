import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../reducers/RecipeSlice"; // Example reducer

export const store = configureStore({
    reducer: {
        recipes: recipesReducer, // Add your reducers here
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
