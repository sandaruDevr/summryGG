import { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import RightArrow from '../assets/right_arrow.svg';
import Menu from '../assets/menu.svg';
import CloseMenu from '../assets/close_menu.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isMenuOpen);
        return () => document.body.classList.remove('overflow-hidden');
    }, [isMenuOpen]);

    const navLinks = ['Home', 'Features', 'Pricing', 'Reviews', 'FAQ’s'];

    return (
        <header className="px-[18px] py-4">
            <div className="w-full max-w-[1640px] mx-auto flex justify-between items-center relative z-40">

                {/* Logo */}
                <div className="lg:flex">
                    <img src={Logo} alt="Logo" className="h-8 md:h-auto block" />
                </div>

                {/* Mobile Hamburger Menu */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden"
                    aria-label="Open Menu"
                >
                    <img src={Menu} alt="menu icon" className="h-5" />
                </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    <ul className="flex gap-[33px] list-none">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className='text-[20px] leading-[40px] tracking-[-0.005em] text-black text-opacity-80 hover:text-opacity-100 font-normal'
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className="flex items-center cursor-pointer rounded-[10px] px-7 py-5 gap-[10px] bg-[#009EFF] text-white font-medium text-[22px] leading-[100%] tracking-[-0.5%]">
                        Get Started
                        <img src={RightArrow} alt="Right Arrow" />
                    </button>
                </div>

                {/* Mobile Fullscreen Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 h-screen w-screen backdrop-blur-[70px] bg-[#FFFFFF0D] flex flex-col px-[18px] py-4 lg:hidden overflow-hidden">
                        {/* Top: Logo + Close */}
                        <div className="flex justify-between items-center w-full">
                            <img src={Logo} alt="Logo" className="h-8" />
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close Menu"
                            >
                                <img src={CloseMenu} alt="Close menu" className="h-5" />
                            </button>
                        </div>

                        {/* Center Content */}
                        <div className="flex flex-col items-center flex-1 gap-9 mt-16">
                            <nav className="flex flex-col items-center gap-9 text-lg font-normal text-[#000000CC]">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </nav>

                            <button className="flex items-center justify-center rounded-lg px-5 py-4 gap-[10px] bg-[#009EFF] text-white font-medium w-full tracking-[-0.5%]">
                                <img src={RightArrow} alt="Right Arrow" />
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
