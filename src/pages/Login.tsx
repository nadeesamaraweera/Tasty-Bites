import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi"; // Import close icon
import Input from "../components/input/Input.tsx";
import CustomButton from "../components/input/custom-button.tsx";

interface LoginProps {
    toggleModal: () => void;
}

export const Login: React.FC<LoginProps> = ({ toggleModal }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const login = () => {
        if (username && password) {
            // Simulate successful login
            localStorage.setItem("username", username);

            Swal.fire({
                icon: "success",
                title: "Login Successful!",
                text: "Welcome back, chef! 👨‍🍳",
                confirmButtonColor: "#F97316"
            }).then(() => {
                navigate("/home");
                toggleModal(); // Close modal after successful login
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Missing Fields",
                text: "Please enter both email and password.",
                confirmButtonColor: "#F97316"
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blur bg-opacity-50 fixed inset-0">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl flex flex-col lg:flex-row relative">

                {/* Close Icon */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={toggleModal}
                >
                    <FiX size={24} />
                </button>

                {/* Right - Recipe Image */}
                <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center rounded-lg p-4">
                    <img
                        src="/src/assets/login.jpg"
                        alt="Recipe Login"
                        className="w-full h-full object-cover rounded-b-full"
                    />
                </div>

                {/* Left - Form Section */}
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img src="/src/assets/logo.png" alt="Recipe Logo" className="w-20 h-20" />
                    </div>

                    <p className="text-md font-bold text-gray-800 text-center">
                        Welcome to Tasty Bites!
                    </p>
                    <p className="text-md text-gray-600 mb-3 text-center">
                        Please log in to start cooking delicious meals.
                    </p>

                    <div className="w-full mb-4 text-gray-500">
                        <Input
                            type="text"
                            name="username"
                            label="Email :"
                            optional={false}
                            callBack={handleUsernameChange}
                            placeholder="Enter your email"
                            value={username}
                        />
                    </div>

                    <div className="w-full mb-4 text-gray-500 ">
                        <Input
                            type="password"
                            name="password"
                            label="Password :"
                            optional={false}
                            callBack={handlePasswordChange}
                            placeholder="Password"
                            value={password}
                        />
                    </div>

                    <div>
                        <CustomButton
                            borderColor={'#F97316'}
                            bgColor={'#F97316'}
                            hoverColor={'#EA580C'}
                            textColor={'white'}
                            textHoverColor={'white'}
                            text={'LOGIN'}
                            onClick={login}
                        />
                    </div>

                    <div className="mt-4 text-center text-gray-600 ">
                        <p>
                            Don't have an account?
                            <Link to="/signup" className="text-orange-500 ml-1">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
