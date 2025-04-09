const AboutSection = () => {
    return (
        <section id="about"
                 className="w-full bg-gradient-to-r from-yellow-100 to-orange-100 py-12 border-t border-orange-300 text-center">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase">Who are
                    We?</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-12">
                    <span className="font-semibold text-orange-600">TastyBites</span> is a vibrant online
                    recipe-sharing platform made for food enthusiasts of all levels. Whether you're a home cook, a
                    professional chef, or
                    just starting out, you can discover new dishes, share your favorite recipes, and connect with a
                    global community
                    that loves cooking!
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
                    {/* Card 1 */}
                    <div
                        className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs mx-auto h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                        <img src="/src/assets/newRecipe.jpg" alt="New Recipes"
                             className="w-full h-60 object-cover rounded-lg"/>
                        <h3 className="mt-4 text-xl font-bold text-gray-800">New Recipes</h3>
                        <p className="text-gray-500 mt-2 text-center">Explore trending and seasonal recipes curated
                            by chefs.</p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs mx-auto h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                        <img src="/src/assets/shareRecipe.jpg" alt="Share Recipe"
                             className="w-full h-60 object-cover rounded-lg"/>
                        <h3 className="mt-4 text-xl font-bold text-gray-800">Share Recipe</h3>
                        <p className="text-gray-500 mt-2 text-center">Post your own recipes and get feedback from
                            the community.</p>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs mx-auto h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                        <img src="/src/assets/addrecipe.jpg" alt="Your Recipes"
                             className="w-full h-60 object-cover rounded-lg"/>
                        <h3 className="mt-4 text-xl font-bold text-gray-800">Your Recipes</h3>
                        <p className="text-gray-500 mt-2 text-center">Save, manage, and revisit your favorite
                            homemade recipes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
