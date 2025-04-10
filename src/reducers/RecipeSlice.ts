import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/User";

interface UserState {
  users: User[];
  currentUser: User | null;
}

const initialState: UserState = {
  users: [], // Registered users
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },

    login: (state, action: PayloadAction<{ username: string; password: string }>) => {
      const user = state.users.find(
          (u) => u.username === action.payload.username && u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },

    loadUserFromLocalStorage: (state) => {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        state.currentUser = JSON.parse(storedUser);
      }
    },
  },
});

export const { signup, login, logout, loadUserFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;

export class addRecipe {
}
