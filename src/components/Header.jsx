import React from 'react';
import { ShoppingCart, Search, Menu, Phone } from 'lucide-react';

const Header = ({ onOpenOwnerModal, cartCount }) => {
    return (
        <header className="sticky top-0 z-50 shadow-md">
            {/* Top Navbar */}
            <div className="bg-amazon-blue text-white py-2 px-3 md:px-4 flex items-center justify-between gap-2">
                {/* Logo / Brand */}
                <div className="flex items-center gap-2">
                    {/* Mobile Menu Icon */}
                    <button className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer leading-none">
                        Vijay<span className="text-amazon-yellow">Electronics</span>
                        <div className="text-[10px] text-gray-300 font-normal tracking-wide">Unnao</div>
                    </div>
                </div>

                {/* Search Bar - Hidden on small mobile, shown on md+ */}
                <div className="hidden md:flex flex-1 mx-4 max-w-3xl">
                    <input
                        type="text"
                        placeholder="Search for CCTV, Inverters, Batteries..."
                        className="w-full p-2.5 rounded-l-md text-black focus:outline-none text-sm"
                    />
                    <button className="bg-amazon-yellow p-2.5 rounded-r-md hover:bg-yellow-500 transition">
                        <Search className="w-5 h-5 text-black" />
                    </button>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 md:gap-6">
                    {/* Click to Call (Mobile optimized) */}
                    <a href="tel:8090090051" className="flex flex-col items-center justify-center hover:text-amazon-yellow">
                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="hidden md:block text-xs font-bold">8090090051</span>
                    </a>

                    {/* Cart */}
                    <div className="relative flex items-center cursor-pointer hover:text-amazon-yellow">
                        <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />
                        <span className="absolute -top-1 -right-1 bg-amazon-yellow text-black text-xs font-bold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                            {cartCount}
                        </span>
                    </div>
                </div>
            </div>

            {/* Mobile Search Bar - Shown only on small mobile */}
            <div className="md:hidden bg-amazon-blue px-3 pb-2">
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full p-2 rounded-l-md text-black focus:outline-none text-sm"
                    />
                    <button className="bg-amazon-yellow p-2 rounded-r-md">
                        <Search className="w-5 h-5 text-black" />
                    </button>
                </div>
            </div>

            {/* Sub Navbar */}
            <div className="bg-amazon-light_blue text-white text-sm py-2 px-3 md:px-4 flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <button className="flex items-center gap-1 font-bold hover:text-amazon-yellow">
                    <Menu className="w-4 h-4" /> All
                </button>
                <button onClick={onOpenOwnerModal} className="hover:text-amazon-yellow cursor-pointer font-medium">Best Sellers</button>
                <button className="hover:text-amazon-yellow cursor-pointer font-medium">CCTV Cameras</button>
                <button className="hover:text-amazon-yellow cursor-pointer font-medium">Inverters & Batteries</button>
                <button className="hover:text-amazon-yellow cursor-pointer font-medium">Installation Services</button>
            </div>
        </header>
    );
};

export default Header;
