import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ContactIcon,
    CookingPot,
    HomeIcon,
    MoonIcon,
    UserIcon,
    Heart,
    ClipboardPlus,
    LogOut,
    UserCircle,
} from "lucide-react";
import Swal from "sweetalert2";
import SignUpPopup from "../pages/SignUpPopup";
import LoginPopup from "../pages/LoginPopup";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState(false);
    const [openSignupPopup, setOpenSignupPopup] = useState<boolean>(false);
    const [openLoginPopup, setOpenLoginPopup] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "#000" : "#fff";
        document.body.style.color = darkMode ? "#fff" : "#000";
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    const handleAddRecipeClick = () => {
        if (!isLoggedIn) {
            Swal.fire({
                title: "⚠️ Please Register!",
                html: '<p class="swal-text">You need to signup or login to share your recipe.</p>',
                icon: "warning",
                confirmButtonText: "Ok",
                background: "white",
                color: "black",
                confirmButtonColor: "#ef832b",
            });
        } else {
            navigate("/recipes");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setShowProfileMenu(false);
        Swal.fire({
            title: "✅ Logged out!",
            html: '<p class="swal-text">Logout successfully</p>',
            icon: "success",
            confirmButtonText: "OK",
            background: "white",
            color: "black",
            confirmButtonColor: "#D2691E",
            timer: 2000,
        });
    };

    const handleScrollToSection = (sectionId: string) => {
        const currentPath = window.location.pathname;

        if (currentPath === "/") {
            if (sectionId === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        } else {
            navigate(`/?scroll=${sectionId}`);
        }
    };

    return (
        <header className={`w-full flex justify-between items-center px-8 py-4 fixed top-0 z-10 shadow-md transition duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
                <img src="/src/assets/logo.png" alt="Logo" className="h-15 w-14"/>
                <h1 className="text-4xl font-bold text-orange-700">TastyBites</h1>
            </div>

            {/* Navigation */}
            <nav className="flex gap-6 text-orange-600 font-medium text-lg mx-auto">
                <button
                    onClick={() => handleScrollToSection("home")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 ${
                        darkMode
                            ? "text-white hover:bg-gray-800"
                            : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                    <HomeIcon size={20}/>
                    <span className="hidden sm:inline">Home</span>
                </button>

                <button
                    onClick={() => handleScrollToSection("about")}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                >
                    <UserIcon size={20}/>
                    <span className="hidden sm:inline">About</span>
                </button>

                <button
                    onClick={() => handleScrollToSection("recipes-display")}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                >
                    <CookingPot size={20}/>
                    <span className="hidden sm:inline">Recipes</span>
                </button>

                <button
                    onClick={() => handleScrollToSection("contact")}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                >
                    <ContactIcon size={20}/>
                    <span className="hidden sm:inline">Contact</span>
                </button>
            </nav>

            {/* Right Side */}
            <div className="space-x-4 flex items-center">
                <button onClick={() => navigate("/favorite-recipes")}
                        className="text-gray-600 hover:text-orange-600 transition">
                    <Heart size={22}/>
                </button>

                <button onClick={handleAddRecipeClick} className="text-gray-600 hover:text-orange-600 transition">
                    <ClipboardPlus size={22} />
                </button>

                <button onClick={toggleDarkMode} className={`transition ${darkMode ? "text-black" : "text-white"}`}>
                    <MoonIcon />
                </button>

                {isLoggedIn ? (
                    <div className="relative inline-block">
                        <button
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                            className="text-gray-600 hover:text-orange-600 transition"
                        >
                            <UserCircle size={22} />
                        </button>
                        {showProfileMenu && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                                <button
                                    onClick={() => navigate("/my-recipes")}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                                >
                                    My Recipes
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                                >
                                    <LogOut size={16} className="inline mr-1" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => setOpenSignupPopup(true)}
                        className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
                    >
                        Signup
                    </button>
                )}

                {/* Modals for Signup and Login */}
                {openSignupPopup && (
                    <SignUpPopup
                        setShowSignup={setOpenSignupPopup}
                        setIsLoggedIn={setIsLoggedIn}
                        onSwitchToLogin={() => {
                            setOpenSignupPopup(false);
                            setOpenLoginPopup(true);
                        }}
                    />
                )}

                {openLoginPopup && (
                    <LoginPopup
                        setShowLogin={setOpenLoginPopup}
                        setIsLoggedIn={setIsLoggedIn}
                        onSwitchToSignup={() => {
                            setOpenLoginPopup(false);
                            setOpenSignupPopup(true);
                        }}
                    />
                )}
            </div>
        </header>
    );
};

export default NavBar;
