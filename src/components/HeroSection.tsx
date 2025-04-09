
const HeroSection = () => {
    return (
        <section id="home" className="relative w-full h-[90vh] flex items-center justify-center text-center px-4">
            <div className="w-full h-full rounded-4xl overflow-hidden bg-cover bg-center relative"
                 style={{ backgroundImage: "url('src/assets/newRecipe.jpg')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative flex flex-col items-center justify-center h-full text-white text-center pt-24">
                    <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Welcome to <span className="text-orange-400">TastyBites</span></h2>
                    <p className="mt-4 text-xl md:text-2xl text-orange-100 max-w-2xl drop-shadow-md">Discover, share, and savor delicious recipes from around the world.</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
