import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/UserSlice";
import recipeSlice from "../reducers/RecipeSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        recipes: recipeSlice,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
