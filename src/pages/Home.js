import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaShieldAlt, FaBug, FaLock, FaSearch, FaCode, FaServer,
    FaRocket, FaUserSecret, FaDownload
} from 'react-icons/fa';

const Home = () => {
    const [stats, setStats] = useState({
        experience: 0,
        engagements: 0,
        coffee: 0
    });

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targets = {
            experience: 2,
            engagements: 300,
            coffee: 10000
        };

        let step = 0;
        const timer = setInterval(() => {
            step++;
            setStats({
                experience: Math.floor((targets.experience / steps) * step),
                engagements: Math.floor((targets.engagements / steps) * step),
                coffee: Math.floor((targets.coffee / steps) * step)
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const services = [
        {
            icon: <FaUserSecret />,
            title: 'Security Consultation',
            description: 'Strategic guidance and expert recommendations to strengthen your security posture and protect critical assets.',
        },
        {
            icon: <FaBug />,
            title: 'Bug Hunting',
            description: 'Responsible disclosure of 50+ critical vulnerabilities in major platforms through ethical hacking.',
        },
        {
            icon: <FaCode />,
            title: 'Security Training',
            description: 'Customized programs for defensive techniques and secure coding practices for your team.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Penetration Testing',
            description: 'Comprehensive security assessments using industry-standard methodologies and cutting-edge tools.',
        },
        {
            icon: <FaSearch />,
            title: 'Vulnerability Assessment',
            description: 'Thorough analysis of your systems to identify and prioritize security weaknesses.',
        },
        {
            icon: <FaServer />,
            title: 'Infrastructure Security',
            description: 'Hardening and securing your network infrastructure against advanced threats.',
        }
    ];

    return (
        <div className="min-h-screen bg-cyber-darker">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background with blue glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker"></div>

                {/* Blue glow effect in center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl"></div>

                {/* Minimal particles */}
                <div className="absolute inset-0 parallax-element" data-speed="5">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle absolute bg-blue-500/10"
                            style={{
                                width: Math.random() * 2 + 1 + 'px',
                                height: Math.random() * 2 + 1 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                            }}
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{
                                duration: Math.random() * 6 + 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-300">System Security: ACTIVE</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-white block mb-2">Secure Your Future with</span>
                            <span className="neon-text block">Cybersecurity Solutions</span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                            From deep-dive penetration testing to proactive threat monitoring, I provide tailored
                            solutions to secure your network and protect your business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="magnetic-button glow-button px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FaRocket />
                                Contact Me!
                            </Link>
                            <Link
                                to="/about"
                                className="magnetic-button px-8 py-4 border border-white/20 hover:border-blue-500/50 hover:bg-white/5 rounded-lg text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FaDownload />
                                Download C.V.
                            </Link>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 scroll-reveal">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="stagger-item glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stats.experience}+</div>
                            <div className="text-gray-400 text-sm font-medium">Years of Experience</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="stagger-item glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stats.engagements}+</div>
                            <div className="text-gray-400 text-sm font-medium">Engagements Completed</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="stagger-item glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stats.coffee.toLocaleString()}</div>
                            <div className="text-gray-400 text-sm font-medium">Cups of Dark Roast Coffee</div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                        <motion.div
                            className="w-1.5 h-2.5 bg-blue-500 rounded-full"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-cyber-dark relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center scroll-reveal mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Breaking Systems, <span className="text-blue-400">Building Security</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Specialized in uncovering critical security vulnerabilities through advanced penetration testing,
                            helping organizations fortify their digital infrastructure before real threats emerge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-cyber-darker relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 scroll-reveal">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                            Expert <span className="text-blue-400">Services</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                            Comprehensive cybersecurity solutions tailored to protect your digital infrastructure
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`scroll-reveal-${index % 2 === 0 ? 'left' : 'right'} card-hover rounded-xl p-8 group`}
                            >
                                <div className="text-5xl text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section-padding bg-cyber-dark relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="scroll-reveal-left">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                About Me, <span className="text-blue-400">H4K3R</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                                Dedicated to finding vulnerabilities others miss, starting from CTF competitions
                                to full-time security commitment.
                            </p>
                            <p className="text-base text-gray-400 mb-8 leading-relaxed">
                                With a passion for ethical hacking and cybersecurity, I've helped numerous organizations
                                identify and fix critical security flaws before they could be exploited by malicious actors.
                            </p>
                            <Link
                                to="/about"
                                className="magnetic-button glow-button inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-base transition-all duration-300"
                            >
                                <FaDownload />
                                Download C.V.
                            </Link>
                        </div>
                        <div className="scroll-reveal-right">
                            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <FaShieldAlt className="text-5xl text-blue-500" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Pushpak Pawar</h3>
                                        <p className="text-gray-400">Cybersecurity Expert</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FaBug className="text-blue-500 mt-1" />
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Bug Bounty Hunter</h4>
                                            <p className="text-gray-400 text-sm">50+ critical vulnerabilities disclosed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaLock className="text-blue-500 mt-1" />
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Penetration Tester</h4>
                                            <p className="text-gray-400 text-sm">300+ successful security assessments</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FaCode className="text-blue-500 mt-1" />
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">Security Trainer</h4>
                                            <p className="text-gray-400 text-sm">Educating teams on secure practices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-cyber-darker relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="scroll-reveal-scale glass-effect rounded-2xl p-12 border border-blue-500/20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Ready to <span className="text-blue-400">Secure</span> Your Digital Assets?
                        </h2>
                        <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                            Let's work together to identify and eliminate security vulnerabilities
                            before they become threats to your business.
                        </p>
                        <Link
                            to="/contact"
                            className="magnetic-button glow-button inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-base transition-all duration-300"
                        >
                            <FaRocket className="text-lg" />
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
