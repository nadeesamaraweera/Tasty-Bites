import React from "react";
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

    // Function to smoothly scroll to a section
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 z-10">
            <div className="flex items-center space-x-3">
                <img src="/src/assets/logo.png" alt="Logo" className="h-15 w-14" />
                <h1 className="text-4xl font-bold text-orange-700">TastyBites</h1>
            </div>

            <nav className="flex gap-6 text-orange-600 font-medium text-lg mx-auto">
                <button onClick={() => handleScroll("home")} className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "home" ? "text-orange-800 font-bold" : "text-gray-600"} hover:bg-gray-100`}>
                    <HomeIcon size={20} />
                    <span className="hidden sm:inline">Home</span>
                </button>
                <button onClick={() => handleScroll("about")} className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "about" ? "text-orange-800 font-bold" : "text-gray-600"} hover:bg-gray-100`}>
                    <UserIcon size={20} />
                    <span className="hidden sm:inline">About</span>
                </button>
                <button onClick={() => handleScroll("recipe")} className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "recipe" ? "text-orange-800 font-bold" : "text-gray-600"} hover:bg-gray-100`}>
                    <CookingPot size={20} />
                    <span className="hidden sm:inline">Recipes</span>
                </button>
                <button onClick={() => handleScroll("contact")} className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "contact" ? "text-orange-800 font-bold" : "text-gray-600"} hover:bg-gray-100`}>
                    <ContactIcon size={20} />
                    <span className="hidden sm:inline">Contact</span>
                </button>
            </nav>

            <div className="space-x-4">
                <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition" onClick={toggleModal}>
                    Login
                </button>
                <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition" onClick={toggleSignupModal}>
                    Signup
                </button>

                {/* Signup Modal */}
                {isSignModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
                        <SignupPage toggleSignupModal={toggleSignupModal} />
                    </div>
                )}

                {/* Dark Mode Toggle */}
                <button className="text-gray-600 hover:text-orange-600 transition" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                    <MoonIcon size={22} />
                </button>

                {/* Login Modal */}
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
