import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import useDarkMode from "../hooks/darkMode";
import RecipesDisplay from "../components/RecipeDisplay.tsx";

const MainPage: React.FC = () => {
    const { toggleDarkMode } = useDarkMode();
    const [activeSection, setActiveSection] = useState("home");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignModalOpen, setIsSignModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const toggleSignupModal = () => setIsSignModalOpen(!isSignModalOpen);
    const [recipes, setRecipes] = useState<any[]>([]);

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
        setRecipes(storedRecipes);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "recipes", "contact"];
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
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 overflow-hidden">
            <NavBar
                activeSection={activeSection}
                toggleDarkMode={toggleDarkMode}
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
                isSignModalOpen={isSignModalOpen}
                toggleSignupModal={toggleSignupModal}
            />
            <HeroSection />
            <AboutSection />
            <RecipesDisplay recipes={recipes} />
            <ContactSection />
        </div>
    );
};

export default MainPage;
