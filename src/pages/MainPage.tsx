import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactIcon, HomeIcon, MoonIcon, UserIcon } from "lucide-react";
import useDarkMode from "../hooks/darkMode.ts";
import LoginPage from "./LoginPage.tsx";
import  {SignupPage} from "./SignupPage.tsx";

const MainPage: React.FC = () => {
    const { toggleDarkMode } = useDarkMode();
    const [activeSection, setActiveSection] = useState("home");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignModalOpen, setIsSignModalOpen] = useState(false);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const toggleSignupModal = () => {
        setIsSignModalOpen(!isSignModalOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "contact"];
            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 overflow-hidden">
            <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 z-10">
                <div className="flex items-center space-x-3">
                    <img src="/src/assets/logo.png" alt="Logo" className="h-15 w-14"/>
                    <h1 className="text-4xl font-bold text-orange-700">TastyBites</h1>
                </div>

                <nav className="flex gap-6 text-orange-600 font-medium text-lg mx-auto">
                    <Link to="#home"
                          className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "home" ? "text-orange-800 font-bold" : "text-gray-600"}`}>
                        <HomeIcon size={20}/>
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <Link to="#about"
                          className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "about" ? "text-orange-800 font-bold" : "text-gray-600 "}`}>
                        <UserIcon size={20}/>
                        <span className="hidden sm:inline">About</span>
                    </Link>
                    <Link to="#contact"
                          className={`flex items-center gap-2 px-3 py-2 rounded-md ${activeSection === "contact" ? "text-orange-800 font-bold" : "text-gray-600 "}`}>
                        <ContactIcon size={20}/>
                        <span className="hidden sm:inline">Contact</span>
                    </Link>
                </nav>

                <div className="space-x-4">
                    <button
                        className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
                        onClick={toggleModal}
                    >
                        Login
                    </button>
                    <button
                        className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
                        onClick={toggleSignupModal}
                    >
                        Signup
                    </button>
                    {isSignModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
                            <SignupPage toggleSignupModal={toggleSignupModal}/>
                        </div>
                    )}
                    <button className="text-gray-600 hover:text-orange-600 transition" onClick={toggleDarkMode}
                            aria-label="Toggle Dark Mode">
                        <MoonIcon size={22}/>
                    </button>
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
                            <LoginPage toggleModal={toggleModal}/>
                        </div>
                    )}
                </div>
            </header>

            <section id="home" className="relative w-full h-[90vh] flex items-center justify-center text-center px-4">
                <div className="w-full h-full rounded-4xl overflow-hidden bg-cover bg-center relative"
                     style={{backgroundImage: "url('src/assets/newRecipe.jpg')"}}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div
                        className="relative flex flex-col items-center justify-center h-full text-white text-center pt-24">
                        <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Welcome to <span
                            className="text-orange-400">TastyBites</span></h2>
                        <p className="mt-4 text-xl md:text-2xl text-orange-100 max-w-2xl drop-shadow-md">Discover,
                            share, and savor delicious recipes from around the world.</p>
                    </div>
                </div>
            </section>

            <section id="about"
                     className="w-full bg-gradient-to-r from-yellow-100 to-orange-100 py-12 border-t border-orange-300 text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase">Who are
                        We?</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-12">
                        <span className="font-semibold text-orange-600">TastyBites</span> is a vibrant online
                        recipe-sharing platform made for food enthusiasts of all levels. Whether you're a home cook, a
                        professional chef, or
                        just starting out, you can discover new dishes, share your favorite recipes, and connect with a
                        global community
                        that loves cooking!
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
                        {/* Card 1 */}
                        <div
                            className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs mx-auto h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                            <img src="/src/assets/newRecipe.jpg" alt="New Recipes"
                                 className="w-full h-60 object-cover rounded-lg"/>
                            <h3 className="mt-4 text-xl font-bold text-gray-800">New Recipes</h3>
                            <p className="text-gray-500 mt-2 text-center">Explore trending and seasonal recipes curated
                                by chefs.</p>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs mx-auto h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                            <img src="/src/assets/shareRecipe.jpg" alt="Share Recipe"
                                 className="w-full h-60 object-cover rounded-lg"/>
                            <h3 className="mt-4 text-xl font-bold text-gray-800">Share Recipe</h3>
                            <p className="text-gray-500 mt-2 text-center">Post your own recipes and get feedback from
                                the community.</p>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs mx-auto h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                            <img src="/src/assets/addrecipe.jpg" alt="Your Recipes"
                                 className="w-full h-60 object-cover rounded-lg"/>
                            <h3 className="mt-4 text-xl font-bold text-gray-800">Your Recipes</h3>
                            <p className="text-gray-500 mt-2 text-center">Save, manage, and revisit your favorite
                                homemade recipes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact"
                     className="w-full bg-gradient-to-r from-yellow-200 to-orange-100 py-12 border-t border-orange-300 text-center">
                <div className="px-6 md:px-0 max-w-4xl mx-auto">
                    <h3 className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase">
                        Get In Touch?
                    </h3>                    <p
                    className="text-gray-700 text-lg mb-6 leading-relaxed font-serif italic tracking-wide">
                    At <span className="font-bold text-orange-700">TastyBites</span>, we’re passionate about
                    bringing food lovers together through mouth-watering recipes and culinary creativity.
                </p>

                    <div className="text-md text-gray-800 space-y-2">
                        <p>
                            📧 Email:{" "}
                            <a href="mailto:contact@tastybites.com" className="text-orange-600 hover:underline">
                                contact@tastybites.com
                            </a>
                            <span className="mx-4">|</span>
                            📞 Phone: <span className="text-orange-600">+1 (234) 567-8901</span>
                        </p>
                    </div>
                </div>

                {/* App Download Section */}
                <div className="mt-12">
                    <p className="text-2xl font-semibold text-gray-800 mb-6 text-center leading-relaxed sm:text-3xl lg:text-4xl">
                        Download our App and Start Cooking Today!
                    </p>

                    <div className="flex justify-center space-x-6">
                        {/* App Store Button */}
                        <a href="https://apps.apple.com/us/app" target="_blank" rel="noopener noreferrer"
                           className="block">
                            <img src="/src/assets/app_store.png" alt="App Store"
                                 className="w-32 h-16 hover:opacity-80 transition-all duration-300 cursor-pointer"/>
                        </a>

                        {/* Google Play Button */}
                        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                           className="block">
                            <img src="/src/assets/play_store.png" alt="Google Play"
                                 className="w-32 h-16 mr-2 hover:opacity-80 transition-all duration-300 cursor-pointer"/>
                        </a>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;
