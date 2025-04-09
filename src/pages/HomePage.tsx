import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {ContactIcon, HomeIcon, MoonIcon, UserIcon} from "lucide-react";
import useDarkMode from "../hooks/darkMode.ts";

const WelcomePage: React.FC = () => {
    const navigate = useNavigate();
    const {toggleDarkMode} = useDarkMode();


    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 overflow-hidden">
            {/* Background animation */}
            <div
                className="absolute inset-0 animate-pulse bg-gradient-to-r from-orange-300 to-yellow-300 opacity-20 blur-3xl"></div>

            {/* Header Bar */}
            <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 z-10">
                <div className="flex items-center space-x-3">
                    <img src="/src/assets/logo.png" alt="Logo" className="h-15 w-14"/>
                    <h1 className="text-4xl font-bold text-orange-700">TastyBites</h1>
                </div>

                <nav className="flex gap-6 text-orange-600 font-medium text-lg mx-auto">
                    <Link
                        to="/"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <HomeIcon size={20}/>
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <Link
                        to="/about"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md ${location.pathname === '/about' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <UserIcon size={20}/>
                        <span className="hidden sm:inline">About</span>
                    </Link>
                    <Link
                        to="/contact"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md ${location.pathname === '/contact' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <ContactIcon size={20}/>
                        <span className="hidden sm:inline">Contact</span>
                    </Link>
                </nav>

                <div className="space-x-4">
                    <button
                        className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                    <button
                        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                        onClick={() => navigate("/signup")}
                    >
                        Signup
                    </button>
                    <button
                        className="text-gray-600 hover:text-orange-600 transition"
                        onClick={toggleDarkMode}
                        aria-label="Toggle Dark Mode"
                    >
                        <MoonIcon size={22}/>
                    </button>
                </div>
            </header>


            {/* Welcome Content */}
            <main className="relative w-full h-[90vh] flex items-center justify-center text-center px-4">
                <div
                    className="w-full h-full rounded-4xl overflow-hidden bg-cover bg-center relative"
                    style={{backgroundImage: "url('src/assets/newRecipe.jpg')"}}
                >
                    {/* Overlay (optional for contrast) */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Text Content */}
                    <div
                        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                        <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                            Welcome to <span className="text-orange-400">TastyBites</span>
                        </h2>
                        <p className="mt-4 text-xl md:text-2xl text-orange-100 max-w-2xl drop-shadow-md">
                            Discover, share, and savor delicious recipes from around the world.
                        </p>
                    </div>
                </div>
            </main>


            {/* 🔥 About Us Section */}
            <section id="about" className="mt-20 w-full bg-orange-50 py-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-orange-700 mb-6">About Us</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        <span className="font-semibold text-orange-600">TastyBites</span> is a vibrant online
                        recipe-sharing platform
                        made for food enthusiasts of all levels. Whether you're a home cook, a professional chef, or
                        just starting out,
                        you can discover new dishes, share your favorite recipes, and connect with a global community
                        that loves cooking!
                    </p>
                </div>
            </section>

            {/* 🔗 Contact Section */}
            <footer
                id="contact"
                className="mt-20 w-full bg-gradient-to-r from-yellow-100 to-orange-100 py-12 border-t border-orange-300 text-center"
            >
                <div className="px-6 md:px-0 max-w-4xl mx-auto">
                    <h4 className="text-2xl font-semibold text-orange-700 mb-4">Get in Touch</h4>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-serif italic tracking-wide">
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
            </footer>
        </div>
    )
}

export default WelcomePage
