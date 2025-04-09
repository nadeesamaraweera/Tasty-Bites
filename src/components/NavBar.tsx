import React, { useState } from "react";
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
import LoginPage from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";

interface HeaderProps {
    activeSection: string;
    toggleDarkMode: () => void;
    isModalOpen: boolean;
    toggleModal: () => void;
    isSignModalOpen: boolean;
    toggleSignupModal: () => void;
}

const NavBar: React.FC<HeaderProps> = ({
                                           activeSection,
                                           toggleDarkMode,
                                           isModalOpen,
                                           toggleModal,
                                           isSignModalOpen,
                                           toggleSignupModal,
                                       }) => {
    const navigate = useNavigate();

    // Add login and profile dropdown states
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Set true after mock login
    const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

    // Scroll function
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

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
            navigate("/add-recipe");
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

    return (
        <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 z-10">
            <div className="flex items-center space-x-3">
                <img src="/src/assets/logo.png" alt="Logo" className="h-15 w-14" />
                <h1 className="text-4xl font-bold text-orange-700">TastyBites</h1>
            </div>

            <nav className="flex gap-6 text-orange-600 font-medium text-lg mx-auto">
                <button
                    onClick={() => handleScroll("home")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                        activeSection === "home"
                            ? "text-orange-800 font-bold"
                            : "text-gray-600"
                    } hover:bg-gray-100`}
                >
                    <HomeIcon size={20} />
                    <span className="hidden sm:inline">Home</span>
                </button>
                <button
                    onClick={() => handleScroll("about")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                        activeSection === "about"
                            ? "text-orange-800 font-bold"
                            : "text-gray-600"
                    } hover:bg-gray-100`}
                >
                    <UserIcon size={20} />
                    <span className="hidden sm:inline">About</span>
                </button>
                <button
                    onClick={() => handleScroll("recipe")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                        activeSection === "recipe"
                            ? "text-orange-800 font-bold"
                            : "text-gray-600"
                    } hover:bg-gray-100`}
                >
                    <CookingPot size={20} />
                    <span className="hidden sm:inline">Recipes</span>
                </button>
                <button
                    onClick={() => handleScroll("contact")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                        activeSection === "contact"
                            ? "text-orange-800 font-bold"
                            : "text-gray-600"
                    } hover:bg-gray-100`}
                >
                    <ContactIcon size={20} />
                    <span className="hidden sm:inline">Contact</span>
                </button>
            </nav>

            <div className="space-x-4 flex items-center">
                {/* Favorite */}
                <button
                    onClick={() => navigate("/favorite-recipes")}
                    className="text-gray-600 hover:text-orange-600 transition"
                    aria-label="Favorite Recipes"
                >
                    <Heart size={22} />
                </button>

                {/* Add Recipe */}
                <button
                    onClick={handleAddRecipeClick}
                    className="text-gray-600 hover:text-orange-600 transition"
                    aria-label="Add Recipe"
                >
                    <ClipboardPlus size={22} />
                </button>

                {/* Profile Menu */}
                {isLoggedIn && (
                    <div className="relative inline-block">
                        <button
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                            className="text-gray-600 hover:text-orange-600 transition"
                            aria-label="Profile"
                        >
                            <UserCircle size={22} />
                        </button>
                        {showProfileMenu && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                                <button
                                    onClick={() => {
                                        navigate("/my-recipes");
                                        setShowProfileMenu(false);
                                    }}
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
                )}

                {/* Dark Mode */}
                <button
                    className="text-gray-600 hover:text-orange-600 transition"
                    onClick={toggleDarkMode}
                    aria-label="Toggle Dark Mode"
                >
                    <MoonIcon size={22} />
                </button>

                {/* Login / Signup Buttons */}
                {!isLoggedIn && (
                    <>

                        <button
                            className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
                            onClick={toggleSignupModal}
                        >
                            Signup
                        </button>
                    </>
                )}
            </div>

            {/* Signup Modal */}
            {isSignModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
                    <SignupPage toggleSignupModal={toggleSignupModal}/>
                </div>
            )}

            {/* Login Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
                    <LoginPage toggleModal={toggleModal} />
                </div>
            )}
        </header>
    );
};

export default NavBar;
