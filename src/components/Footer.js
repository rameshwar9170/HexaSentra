import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-cyber-darker border-t border-cyber-blue/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <FaShieldAlt className="text-3xl text-cyber-blue" />
                            <span className="text-2xl font-bold gradient-text">HexaSentra</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Security Built by Practitioners
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Cybersecurity & Penetration Testing Services
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">About</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">Services</Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/clients" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">Clients</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Penetration Testing</li>
                            <li className="text-gray-400">Enterprise Security Assessment</li>
                            <li className="text-gray-400">Red Team Engagement</li>
                            <li className="text-gray-400">Secure Code Review</li>
                            <li className="text-gray-400">On-Call Pentester</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <FaEnvelope className="text-cyber-blue mt-1 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span>contact@hexasentra.com</span>
                                    <span>hello@hexasentra.com</span>
                                    <span>security@hexasentra.com</span>
                                </div>
                            </li>

                            <li className="flex items-start space-x-3 text-gray-400">
                                <FaMapMarkerAlt className="text-cyber-blue mt-1 flex-shrink-0" />
                                <span>Pune, Maharashtra, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-cyber-blue/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} HexaSentra. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="/privacy" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">Privacy Policy</a>
                            <a href="/terms" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">Terms of Service</a>
                            <a href="/cookies" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
