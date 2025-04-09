import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import useDarkMode from "../hooks/darkMode";

const MainPage: React.FC = () => {
    const { toggleDarkMode } = useDarkMode();
    const [activeSection, setActiveSection] = useState("home");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignModalOpen, setIsSignModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const toggleSignupModal = () => setIsSignModalOpen(!isSignModalOpen);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "recipe", "contact"];
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
            <Header
                activeSection={activeSection}
                toggleDarkMode={toggleDarkMode}
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
                isSignModalOpen={isSignModalOpen}
                toggleSignupModal={toggleSignupModal}
            />
            <HeroSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
};

export default MainPage;
