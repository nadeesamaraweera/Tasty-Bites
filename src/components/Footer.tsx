import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-orange-500  text-black dark:text-white text-center py-5 ">
            <div className="flex flex-col items-center">
                <p>&copy; 2025 TastyBites. All rights reserved.</p>
                <div className="mt-3 space-x-4 text-xl">
                    <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
