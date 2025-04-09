const ContactSection = () => {
    return (
        <section id="contact"
                 className="w-full bg-gradient-to-r from-yellow-100 to-orange-100 py-12 border-t border-orange-300 text-center">
            <div className="px-6 md:px-0 max-w-4xl mx-auto">
                <h3 className="text-4xl font-extrabold text-orange-700 mb-6 tracking-wide uppercase">
                    Get In Touch?
                </h3>                    <p
                className="text-gray-700 text-lg mb-6 leading-relaxed font-serif italic tracking-wide">
                At <span className="font-bold text-orange-700">TastyBites</span>, we’re passionate about
                bringing food lovers together through mouth-watering recipes and culinary creativity.
            </p>

                <div className="text-md text-gray-800 space-y-2">
                    <p>
                        📧 Email:{" "}
                        <a href="mailto:contact@tastybites.com" className="text-orange-600 hover:underline">
                            contact@tastybites.com
                        </a>
                        <span className="mx-4">|</span>
                        📞 Phone: <span className="text-orange-600">+1 (234) 567-8901</span>
                    </p>
                </div>
            </div>

            {/* App Download Section */}
            <div className="mt-12">
                <p className="text-2xl font-semibold text-gray-800 mb-6 text-center leading-relaxed sm:text-3xl lg:text-4xl">
                    Download our App and Start Cooking Today!
                </p>

                <div className="flex justify-center space-x-6">
                    {/* App Store Button */}
                    <a href="https://apps.apple.com/us/app" target="_blank" rel="noopener noreferrer"
                       className="block">
                        <img src="/src/assets/app_store.png" alt="App Store"
                             className="w-32 h-16 hover:opacity-80 transition-all duration-300 cursor-pointer"/>
                    </a>

                    {/* Google Play Button */}
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                       className="block">
                        <img src="/src/assets/play_store.png" alt="Google Play"
                             className="w-32 h-16 mr-2 hover:opacity-80 transition-all duration-300 cursor-pointer"/>
                    </a>


                </div>
            </div>
        </section>
    );
};

export default ContactSection;
