import SignUpPopup from "./pages/SignUpPopup.tsx";
import LoginPopup from "./pages/LoginPopup.tsx";
import HomePage from "./pages/HomePage.tsx";
import  {useState} from "react";
import NavBar from "./components/NavBar.tsx";
import {Routes,Route} from "react-router-dom";
import Footer from "./components/Footer.tsx";
import { BrowserRouter } from "react-router-dom";
import FavoriteRecipe from "./pages/FavouriteRecipe.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";


function App() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        const storedUser = localStorage.getItem("user");
        return !!storedUser;
    });

    return (
        <Provider store={store}>
        <BrowserRouter>
            <NavBar
                activeSection="home"
                isModalOpen={showSignup}
                toggleModal={() => setShowSignup(!showSignup)}
                isLoginModalOpen={showLogin}
                toggleSignupModal={() => setShowLogin(!showLogin)}
                // ↓ pass down
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorite-recipes" element={<FavoriteRecipe />} />

                {/* Add your other routes */}
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
        </Provider>
    );
}
export default App
