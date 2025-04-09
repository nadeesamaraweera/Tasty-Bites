import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi";
import Input from "../components/input/Input.tsx";
import CustomButton from "../components/input/custom-button.tsx";

interface SignupProps {
    toggleSignupModal?: () => void;
}

export const SignupPage: React.FC<SignupProps> = ({ toggleSignupModal }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const signup = () => {
        if (username && email && password) {
            localStorage.setItem("user", JSON.stringify({ username, email }));

            Swal.fire({
                icon: "success",
                title: "Account Created!",
                text: "Welcome to Tasty Bites! 🎉",
                confirmButtonColor: "#F97316"
            }).then(() => {
                navigate("/log");
                if (toggleSignupModal) toggleSignupModal();
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Missing Fields",
                text: "Please fill all fields.",
                confirmButtonColor: "#F97316"
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blur bg-opacity-50 fixed inset-0">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl flex flex-col lg:flex-row relative">

                {/* Close Icon */}
                {toggleSignupModal && (
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        onClick={toggleSignupModal}
                    >
                        <FiX size={24} />
                    </button>
                )}

                {/* Right - Recipe Image */}
                <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center rounded-lg p-4">
                    <img
                        src="/src/assets/signup.jpg"
                        alt="SignupPage Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Left - Form Section */}
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <img src="/src/assets/logo.png" alt="Recipe Logo" className="w-20 h-20" />
                    </div>

                    <p className="text-md font-bold text-gray-800 text-center">
                        Join Tasty Bites!
                    </p>
                    <p className="text-md text-gray-600 mb-3 text-center">
                        Create an account to start exploring and saving recipes.
                    </p>

                    <div className="w-full mb-4 text-gray-500">
                        <Input
                            type="text"
                            name="username"
                            label="Username :"
                            optional={false}
                            callBack={handleUsernameChange}
                            placeholder="Enter your username"
                            value={username}
                        />
                    </div>

                    <div className="w-full mb-4 text-gray-500">
                        <Input
                            type="email"
                            name="email"
                            label="Email :"
                            optional={false}
                            callBack={handleEmailChange}
                            placeholder="Enter your email"
                            value={email}
                        />
                    </div>

                    <div className="w-full mb-4 text-gray-500">
                        <Input
                            type="password"
                            name="password"
                            label="Password :"
                            optional={false}
                            callBack={handlePasswordChange}
                            placeholder="Enter a strong password"
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
                            text={'SIGN UP'}
                            onClick={signup}
                        />
                    </div>

                    <div className="mt-4 text-center text-gray-600">
                        <p>
                            Already have an account?
                            <Link to="LoginPage" className="text-orange-500 ml-1">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
