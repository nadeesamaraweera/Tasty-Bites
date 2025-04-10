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
        const params = new URLSearchParams(location.search);
        const scrollTarget = params.get("scroll");

        if (scrollTarget === "home") {
            // scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (scrollTarget === "recipes") {
            const recipesSection = document.getElementById("recipes-display");
            if (recipesSection) {
                recipesSection.scrollIntoView({ behavior: "smooth" });
            }
        } else if (scrollTarget === "about") {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        } else if (scrollTarget === "contact") {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

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
