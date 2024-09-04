import React, { useState } from 'react';
import LogoWhite from '@/components/logo/Logow';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <LogoWhite />
                </div>
                <div className="block lg:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className={`hidden lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="text-white px-4 py-2 hover:bg-blue-700 rounded">Itinerary</a>
                    <a href="#" className="text-white px-4 py-2 hover:bg-blue-700 rounded">Help</a>
                    <a href="#" className="text-white px-4 py-2 hover:bg-blue-700 rounded">Settings</a>
                </div>
            </div>
            {/* Dropdown Menu */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-primary mt-2`}>
                <a href="#" className="block text-white px-4 py-2 hover:bg-blue-700 rounded">Itinerary</a>
                <a href="#" className="block text-white px-4 py-2 hover:bg-blue-700 rounded">Help</a>
                <a href="#" className="block text-white px-4 py-2 hover:bg-blue-700 rounded">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;
