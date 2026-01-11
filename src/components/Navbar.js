import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navBtnRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Magnetic effect for the "Get Started" button
    useEffect(() => {
        const btn = navBtnRef.current;
        if (!btn) return;

        const onMouseMove = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const onMouseLeave = () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.4)"
            });
        };

        btn.addEventListener('mousemove', onMouseMove);
        btn.addEventListener('mouseleave', onMouseLeave);
        return () => {
            btn.removeEventListener('mousemove', onMouseMove);
            btn.removeEventListener('mouseleave', onMouseLeave);
        };
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
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed w-full z-[100] transition-all duration-500 ${scrolled
                ? 'py-4 glass-premier border-b border-white/5'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center transition-all duration-500">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative h-16 md:h-20 flex items-center"
                        >
                            <img
                                src="/images/hexapng.png"
                                alt="HexaSentra Logo"
                                className="h-full w-auto object-contain filter drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                            />
                            <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={`relative px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 group ${location.pathname === link.path ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {location.pathname === link.path && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-blue-500/10 rounded-full border border-blue-500/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-1/2 transition-all duration-300" />
                            </Link>
                        ))}

                        <div className="pl-6">
                            <Link
                                ref={navBtnRef}
                                to="/contact"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="magnetic-button group relative px-8 py-3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full text-white font-bold text-sm uppercase tracking-widest overflow-hidden flex items-center gap-3 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] transition-all duration-300"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 shimmer-btn" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-3xl text-blue-500 hover:text-white transition-colors duration-300"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                }}
                className="md:hidden overflow-hidden glass-premier border-t border-white/5"
            >
                <div className="px-4 py-8 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => {
                                setIsOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`block text-xl font-bold uppercase tracking-tighter py-4 px-6 rounded-2xl transition-all duration-300 ${location.pathname === link.path
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => {
                            setIsOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="block text-center px-6 py-5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl text-white font-bold text-xl uppercase tracking-widest"
                    >
                        Get Started
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
