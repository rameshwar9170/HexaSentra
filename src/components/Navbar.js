import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Clients', path: '/clients' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-darker/95 backdrop-blur-lg shadow-lg shadow-cyber-blue/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <FaShieldAlt className="text-4xl text-cyber-blue group-hover:animate-pulse" />
                            <div className="absolute inset-0 bg-cyber-blue/20 blur-xl group-hover:bg-cyber-blue/40 transition-all duration-300"></div>
                        </div>
                        <span className="text-2xl font-bold gradient-text">HexaSentra</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-lg font-medium transition-all duration-300 group ${location.pathname === link.path ? 'text-cyber-blue' : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                ></span>
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="glow-button relative px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-3xl text-cyber-blue hover:text-cyber-purple transition-colors duration-300"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="md:hidden overflow-hidden bg-cyber-dark/98 backdrop-blur-lg"
            >
                <div className="px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${location.pathname === link.path
                                ? 'bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 text-cyber-blue border-l-4 border-cyber-blue'
                                : 'text-gray-300 hover:bg-cyber-blue/10 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
