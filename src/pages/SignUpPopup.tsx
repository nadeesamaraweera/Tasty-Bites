import React, { useState } from "react";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi"; // Importing close icon

interface SignUpPopupProps {
    setShowSignup: (show: boolean) => void;
    setIsLoggedIn: (status: boolean) => void;
    onSwitchToLogin: () => void; // Function to switch to the login modal
}

const SignUpPopup: React.FC<SignUpPopupProps> = ({
                                                     setShowSignup,
                                                     onSwitchToLogin,
                                                 }) => {
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!data.name.trim() || !data.email.trim() || !data.password.trim()) {
            setMessage("All fields are required.");
            return;
        }

        // Assuming signup is successful
        localStorage.setItem("user", JSON.stringify(data));
        setMessage("Signup successful!");

        setTimeout(() => {
            Swal.fire({
                title: "🎉 Signed Up!",
                text: "You can now login and add your recipes.",
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
                setShowSignup(false); // Close signup popup

                // After the alert closes, open the login popup
                onSwitchToLogin(); // Switch to the login modal
            });
        }, 500);
    };

    return (
        <div className="fixed inset-0  bg-opacity-50 sm flex items-center justify-center z-50 font-montserrat">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl flex flex-col lg:flex-row relative">

                {/* Close Icon */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={() => setShowSignup(false)}
                >
                    <FiX size={24}/>
                </button>

                {/* Right - Recipe Image */}
                <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center rounded-lg p-4">
                    <img
                        src="/src/assets/signup.jpg" // Replace with your image path
                        alt="SignupPage Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Left - Form Section */}
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img
                            src="/src/assets/logo.png" // Replace with your logo path
                            alt="Recipe Logo"
                            className="w-20 h-20"
                        />
                    </div>

                    <p className="text-md font-bold text-gray-800 text-center">
                        Join Tasty Bites!
                    </p>
                    <p className="text-md text-gray-600 mb-3 text-center">
                        Create an account to start exploring and saving recipes.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full mb-4">
                        <div className="w-full mb-4 text-gray-500">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={data.name}
                                onChange={onChangeHandler}
                                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                            />
                        </div>

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
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-4 text-center text-gray-600">
                        <p>
                            Already have an account?{" "}
                            <span
                                onClick={onSwitchToLogin} // Switch to Login
                                className="text-orange-600 font-bold cursor-pointer"
                            >
                                Log in
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPopup;
