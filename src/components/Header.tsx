import React from "react";
import { Link } from "react-router-dom";
import { ContactIcon, CookingPot, HomeIcon, MoonIcon, UserIcon } from "lucide-react";
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

const Header: React.FC<HeaderProps> = ({
                                           activeSection,
                                           toggleDarkMode,
                                           isModalOpen,
                                           toggleModal,
                                           isSignModalOpen,
                                           toggleSignupModal
                                       }) => {
    return (
        <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 z-10">
            <div className="flex items-center space-x-3">
                <img src="/src/assets/logo.png" alt="Logo" className="h-15 w-14" />
                <h1 className="text-4xl font-bold text-orange-700">TastyBites</h1>
            </div>

            <nav className="flex gap-6 text-orange-600 font-medium text-lg mx-auto">
                <Link to="#home" className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "home" ? "text-orange-800 font-bold" : "text-gray-600"}`}>
                    <HomeIcon size={20} />
                    <span className="hidden sm:inline">Home</span>
                </Link>
                <Link to="#about" className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "about" ? "text-orange-800 font-bold" : "text-gray-600"}`}>
                    <UserIcon size={20} />
                    <span className="hidden sm:inline">About</span>
                </Link>
                <Link to="#recipe" className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "recipe" ? "text-orange-800 font-bold" : "text-gray-600"}`}>
                    <CookingPot size={20} />
                    <span className="hidden sm:inline">Recipes</span>
                </Link>
                <Link to="#contact" className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "contact" ? "text-orange-800 font-bold" : "text-gray-600"}`}>
                    <ContactIcon size={20} />
                    <span className="hidden sm:inline">Contact</span>
                </Link>
            </nav>

            <div className="space-x-4">
                <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition" onClick={toggleModal}>
                    Login
                </button>
                <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition" onClick={toggleSignupModal}>
                    Signup
                </button>
                {isSignModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
                        <SignupPage toggleSignupModal={toggleSignupModal} />
                    </div>
                )}
                <button className="text-gray-600 hover:text-orange-600 transition" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                    <MoonIcon size={22} />
                </button>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
                        <LoginPage toggleModal={toggleModal} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
