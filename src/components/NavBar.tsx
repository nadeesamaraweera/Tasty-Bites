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
    Menu,
    X
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        setMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`w-full flex justify-between items-center px-4 py-4 fixed top-0 z-10 shadow-md transition duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <img src="/src/assets/logo.png" alt="Logo" className="h-15 w-14" />
                    <h1 className="text-3xl sm:text-4xl font-bold text-orange-700">TastyBites</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden sm:flex gap-6 font-medium text-lg mx-auto">
                    <button onClick={() => handleScrollToSection("home")} className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <HomeIcon size={20} /> Home
                    </button>
                    <button onClick={() => handleScrollToSection("about")} className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <UserIcon size={20} /> About
                    </button>
                    <button onClick={() => handleScrollToSection("recipes-display")} className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <CookingPot size={20} /> Recipes
                    </button>
                    <button onClick={() => handleScrollToSection("contact")} className="flex items-center gap-2 text-gray-600 hover:text-orange-600">
                        <ContactIcon size={20} /> Contact
                    </button>
                </nav>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-4">
                    {/* Mobile Menu Button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="sm:hidden text-gray-600 hover:text-orange-600">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Icons */}
                    <div className="hidden sm:flex items-center space-x-4">
                        <button onClick={() => navigate("/favorite-recipes")} className="text-gray-600 hover:text-orange-600">
                            <Heart size={22} />
                        </button>

                        <button onClick={handleAddRecipeClick} className="text-gray-600 hover:text-orange-600">
                            <ClipboardPlus size={22} />
                        </button>

                        <button onClick={toggleDarkMode} className={`hover:text-orange-600 ${darkMode ? "text-white" : "text-gray-600"}`}>
                            <MoonIcon size={22} />
                        </button>

                        {isLoggedIn ? (
                            <div className="relative">
                                <button onClick={() => setShowProfileMenu(!showProfileMenu)} className="text-gray-600 hover:text-orange-600">
                                    <UserCircle size={22} />
                                </button>
                                {showProfileMenu && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                                        <button onClick={() => navigate("/my-recipes")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100">
                                            My Recipes
                                        </button>
                                        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100">
                                            <LogOut size={16} className="inline mr-1" /> Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button onClick={() => setOpenSignupPopup(true)} className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition">
                                Signup
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {mobileMenuOpen && (
                <div className="sm:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-neutral-500 shadow-lg z-50 p-6 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center space-x-2">
                            <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-10" />
                            <h1 className="text-2xl font-bold text-orange-700">TastyBites</h1>
                        </div>
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <X size={24} className="text-gray-600 dark:text-white" />
                        </button>
                    </div>

                    {/* Nav Items */}
                    <nav className="space-y-4">
                        <button onClick={() => handleScrollToSection("home")} className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-white hover:text-orange-600">
                            <HomeIcon size={20} /> Home
                        </button>
                        <button onClick={() => handleScrollToSection("about")} className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-white hover:text-orange-600">
                            <UserIcon size={20} /> About
                        </button>
                        <button onClick={() => handleScrollToSection("recipes-display")} className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-white hover:text-orange-600">
                            <CookingPot size={20} /> Recipes
                        </button>
                        <button onClick={() => handleScrollToSection("contact")} className="flex items-center gap-3 w-full text-left text-gray-700 dark:text-white hover:text-orange-600">
                            <ContactIcon size={20} /> Contact
                        </button>
                    </nav>

                    {/* Bottom Icons */}
                    <div className="mt-6 flex gap-4 items-center border-t pt-4">
                        <button onClick={() => navigate("/favorite-recipes")} className="text-gray-600 dark:text-white hover:text-orange-600">
                            <Heart size={22} />
                        </button>
                        <button onClick={handleAddRecipeClick} className="text-gray-600 dark:text-white hover:text-orange-600">
                            <ClipboardPlus size={22} />
                        </button>
                        <button onClick={toggleDarkMode} className="text-gray-600 dark:text-white hover:text-orange-600">
                            <MoonIcon size={22} />
                        </button>
                        {!isLoggedIn && (
                            <button onClick={() => {
                                setOpenSignupPopup(true);
                                setMobileMenuOpen(false);
                            }} className="text-orange-500 border border-orange-500 rounded-md px-3 py-1 hover:bg-orange-500 hover:text-white transition">
                                Signup
                            </button>
                        )}
                    </div>
                </div>
            )}


            {/* Popups */}
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
        </>
    );
};

export default NavBar;
