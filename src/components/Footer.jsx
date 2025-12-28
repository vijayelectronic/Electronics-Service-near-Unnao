import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-amazon-light_blue text-white mt-10">
            <button
                onClick={scrollToTop}
                className="w-full bg-[#37475a] hover:bg-[#485769] py-3 text-sm font-medium transition"
            >
                Back to top
            </button>

            <div className="py-10 px-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <h3 className="font-bold mb-3 text-white">Get to Know Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:underline cursor-pointer">About Vijay Electronics</li>
                        <li className="hover:underline cursor-pointer">Careers</li>
                        <li className="hover:underline cursor-pointer">Visit Our Shop</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-3 text-white">Connect with Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:underline cursor-pointer">Facebook</li>
                        <li className="hover:underline cursor-pointer">Instagram</li>
                        <li className="hover:underline cursor-pointer">WhatsApp</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-3 text-white">Services</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:underline cursor-pointer">CCTV Installation</li>
                        <li className="hover:underline cursor-pointer">Inverter Repair</li>
                        <li className="hover:underline cursor-pointer">Battery Sales</li>
                        <li className="hover:underline cursor-pointer">Electronics Service</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-3 text-white">Let Us Help You</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:underline cursor-pointer">Your Account</li>
                        <li className="hover:underline cursor-pointer">Returns Centre</li>
                        <li className="hover:underline cursor-pointer">Help</li>
                    </ul>
                </div>
            </div>

            <div className="bg-amazon-blue py-8 border-t border-gray-600 text-center px-4">
                <div className="text-2xl font-bold mb-2">
                    Vijay<span className="text-amazon-yellow">Electronics</span>
                </div>
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Vijay Electronics, Unnao. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                    Address: 9 Purani Bazar, Unnao, Uttar Pradesh, 209801 | Phone: 8090090051
                </p>
            </div>
        </footer>
    );
};

export default Footer;
