import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import RecipesDisplay from "../components/RecipeDisplay.tsx";

const HomePage: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

    const [recipes, setRecipes] = useState<any[]>([]);

    useEffect(() => {
        const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
        setRecipes(storedRecipes);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "recipe-display", "contact"];
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

            <HeroSection />
            <AboutSection />
            <RecipesDisplay/>
            <ContactSection />
        </div>
    );
};

export default HomePage;
