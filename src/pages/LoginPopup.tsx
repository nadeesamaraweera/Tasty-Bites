import React, { useState } from "react";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi";

interface LoginPopupProps {
    setShowLogin: (show: boolean) => void;
    onSwitchToSignup: () => void;
    setIsLoggedIn: (status: boolean) => void; // <- You accept this
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin, onSwitchToSignup, setIsLoggedIn }) => {
    const [data, setData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!data.email.trim() || !data.password.trim()) {
            setMessage("Both fields are required.");
            return;
        }

        // Check if the email and password match what's saved in localStorage (from sign-up)
        const storedData = localStorage.getItem("user");



        if (storedData) {
            const user = JSON.parse(storedData);

            // If email and password match
            if (user.email === data.email && user.password === data.password) {
                setMessage("Login successful!");

                setIsLoggedIn(true);


                setTimeout(() => {
                    Swal.fire({
                        title: "🎉 Logged In!",
                        text: "You can now add recipes and access your account.",
                        icon: "success",
                        confirmButtonText: "OK",
                        background: "white",
                        color: "black",
                        confirmButtonColor: "#D2691E",
                        width: "450px",
                        customClass: {
                            popup: "rounded-lg font-montserrat",
                            confirmButton: "bg-orange-600",
                            title: "text-xl font-semibold",
                        },
                    }).then(() => {
                        setShowLogin(false); // Close login popup
                    });
                }, 500);
            } else {
                setMessage("Incorrect email or password.");
            }
        } else {
            setMessage("No user found. Please sign up first.");
        }
    };

    return (
        <div className="fixed inset-0 bg-opacity-50 sm flex items-center justify-center z-50 font-montserrat">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl flex flex-col lg:flex-row relative">
                {/* Close Icon */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={() => setShowLogin(false)}
                >
                    <FiX size={24} />
                </button>
                <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center rounded-lg p-4">
                    <img
                        src="/src/assets/login.jpg" // Replace with your image path
                        alt="SignupPage Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img
                            src="/src/assets/logo.png" // Replace with your logo path
                            alt="Recipe Logo"
                            className="w-20 h-20"
                        />
                    </div>

                    <p className="text-md font-bold text-gray-800 text-center">
                        Welcome back to Tasty Bites!
                    </p>
                    <p className="text-md text-gray-600 mb-3 text-center">
                        Log in to explore and save your favorite recipes.
                    </p>

                    {/* Error Message */}
                    {message && <p className="text-red-500 text-sm mb-2">{message}</p>}

                    <form onSubmit={handleSubmit} className="w-full mb-4">
                        <div className="w-full mb-4 text-gray-500">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={data.email}
                                onChange={onChangeHandler}
                                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                            />
                        </div>

                        <div className="w-full mb-4 text-gray-500">
                            <input
                                type="password"
                                name="password"
                                placeholder="Your Password"
                                value={data.password}
                                onChange={onChangeHandler}
                                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 w-full"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Don't have an account?{" "}
                            <span
                                onClick={onSwitchToSignup}
                                className="text-orange-600 font-bold cursor-pointer"
                            >
                                Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
