import SignUpPopup from "./pages/SignUpPopup.tsx";
import LoginPopup from "./pages/LoginPopup.tsx";
import HomePage from "./pages/HomePage.tsx";
import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import FavoriteRecipe from "./pages/FavouriteRecipe.tsx";

import AddRecipes from "./components/AddRecipe.tsx";
import {useDispatch} from "react-redux";
import {addRecipe} from "./reducers/RecipeSlice.ts";

function App() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        const storedUser = localStorage.getItem("user");
        return !!storedUser;
    });
    const dispatch = useDispatch();

    const handleAddRecipe = (newRecipe: any): void => {
        dispatch(addRecipe(newRecipe));
    };

    return (
        <BrowserRouter>
            <NavBar
                activeSection="home"
                isModalOpen={showSignup}
                toggleModal={() => setShowSignup(!showSignup)}
                isLoginModalOpen={showLogin}
                toggleSignupModal={() => setShowLogin(!showLogin)}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorite-recipes" element={<FavoriteRecipe />} />
                <Route
                    path="/recipes"
                    element={<AddRecipes onAddRecipe={handleAddRecipe} />}
                />
            </Routes>

            <Footer />

            {showSignup && (
                <SignUpPopup
                    setShowSignup={setShowSignup}
                    setIsLoggedIn={setIsLoggedIn}
                    onSwitchToLogin={() => {
                        setShowSignup(false);
                        setShowLogin(true);
                    }}
                />
            )}
            {showLogin && (
                <LoginPopup
                    setShowLogin={setShowLogin}
                    onSwitchToSignup={() => {
                        setShowLogin(false);
                        setShowSignup(true);
                    }}
                    setIsLoggedIn={setIsLoggedIn}
                />
            )}
        </BrowserRouter>
    );
}



export default App;
