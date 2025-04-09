import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 text-center">
            {/* Logo */}
            <img src="/src/assets/logo.png" alt="TastyBites Logo" className="w-24 h-24 mb-4" />

            {/* Welcome Text */}
            <h1 className="text-4xl font-bold text-orange-700 mb-2">Welcome to TastyBites!</h1>
            <p className="text-lg text-gray-700 max-w-xl mb-6">
                Discover, share, and enjoy delicious recipes from around the world. Join us today!
            </p>

            {/* Buttons for Login & Signup */}
            <div className="space-x-4">
                <button
                    onClick={() => navigate("/login")}
                    className="px-6 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition"
                >
                    Login
                </button>
                <button
                    onClick={() => navigate("/signup")}
                    className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                >
                    Signup
                </button>
            </div>
        </div>
    );
};

export default HomePage;
