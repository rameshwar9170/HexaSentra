import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaShieldAlt, FaUsers, FaGlobe, FaAward, FaChartLine, FaLock,
    FaRocket, FaCheckCircle, FaArrowRight, FaEye, FaHeart, FaLightbulb,
    FaBug, FaCode, FaSearch, FaPhone, FaClock
} from 'react-icons/fa';

const About = () => {
    const teamExperience = [
        {
            icon: <FaBug />,
            title: 'Attacker mindset',
            description: 'We think like attackers to identify real-world vulnerabilities and attack paths.'
        },
        {
            icon: <FaEye />,
            title: 'Manual testing expertise',
            description: 'Deep expertise in manual security testing that goes beyond automated scanning.'
        },
        {
            icon: <FaUsers />,
            title: 'Clear technical communication',
            description: 'We explain complex security issues in clear, actionable terms for technical and business teams.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Professional engagement handling',
            description: 'Confidential, responsible, and professional approach to every security engagement.'
        }
    ];

    const clientTypes = [
        {
            icon: <FaRocket />,
            title: 'Startups',
            description: 'Fast-moving companies that need security built into their growth strategy'
        },
        {
            icon: <FaCode />,
            title: 'SaaS Companies',
            description: 'Software-as-a-Service providers requiring continuous security validation'
        },
        {
            icon: <FaLightbulb />,
            title: 'Technology-driven Organizations',
            description: 'Companies where technology is core to their business operations'
        },
        {
            icon: <FaGlobe />,
            title: 'Enterprises',
            description: 'Large organizations with complex security requirements and compliance needs'
        }
    ];

    const achievements = [
        {
            number: '500+',
            label: 'Organizations Secured',
            description: 'From startups to Fortune 500 companies'
        },
        {
            number: '10,000+',
            label: 'Vulnerabilities Identified',
            description: 'Critical security flaws discovered and remediated'
        },
        {
            number: '99.9%',
            label: 'Service Uptime',
            description: 'Reliable and consistent security services'
        },
        {
            number: '98%',
            label: 'Client Satisfaction',
            description: 'Trusted by leading organizations worldwide'
        }
    ];

    return (
        <div className="min-h-screen pt-20 bg-cyber-darker">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            About <span className="gradient-text">HexaSentra</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Cybersecurity & Penetration Testing Company
                        </h2>
                        <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 inline-block mb-8">
                            <p className="text-xl font-semibold text-blue-400">
                                Security Built by Hackers
                            </p>
                        </div>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            HexaSentra is a cybersecurity company founded by ethical hackers and penetration testers
                            with strong backgrounds in offensive security and vulnerability research.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Who <span className="text-blue-400">We Are</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Our team includes security professionals who have spent years finding critical vulnerabilities
                                    across real-world systems on leading bug bounty platforms and private security engagements.
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    While HexaSentra is a new company, our people are not new to security testing.
                                </p>
                                <div className="glass-effect rounded-2xl p-6 border border-blue-500/20">
                                    <p className="text-xl font-semibold text-blue-400 text-center">
                                        "Security is our daily work, not a side offering."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                <h3 className="text-2xl font-bold text-white mb-6">We Bring:</h3>
                                <div className="space-y-6">
                                    {teamExperience.map((item, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="text-2xl text-blue-500 mt-1">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                                <p className="text-gray-400">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Our <span className="text-blue-400">Approach</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                            How We Do Security Testing
                        </p>
                        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            At HexaSentra, manual testing is the foundation of every engagement.
                            Automation is used only where it genuinely helps. All findings are manually validated.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">No False Positives</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        All findings are manually validated. No false positives. No copied reports.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Real Attack Focus</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We focus on understanding how an attacker would approach your system,
                                        what can realistically be exploited, and what the actual business impact is.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Clarity Over Noise</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our goal is to give you clarity, not noise. We provide actionable insights
                                        that help you make informed security decisions.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                <FaSearch className="text-6xl text-blue-500 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-6">We Focus on Understanding:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start space-x-3">
                                        <FaArrowRight className="text-blue-500 mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">How an attacker would approach your system</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <FaArrowRight className="text-blue-500 mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">What can realistically be exploited</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <FaArrowRight className="text-blue-500 mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">What the actual business impact is</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who We Work With Section */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Who We <span className="text-blue-400">Work With</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                            HexaSentra works with organizations of all sizes
                        </p>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Client names and details are kept confidential unless explicitly approved.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {clientTypes.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-darker rounded-2xl p-8 text-center"
                            >
                                <div className="text-5xl text-blue-500 mb-6 flex justify-center">
                                    {client.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{client.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{client.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Our <span className="text-blue-400">Track Record</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Numbers that speak to our commitment and expertise
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
                                    {achievement.number}
                                </div>
                                <div className="text-lg font-semibold text-white mb-2">
                                    {achievement.label}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    {achievement.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Global Security <span className="text-blue-400">Operations</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                Based in Pune, Maharashtra, India, HexaSentra provides security services globally.
                                We offer both remote and on-site engagements to meet your organization's needs.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <FaGlobe className="text-blue-500" />
                                    <span className="text-gray-300">Remote engagements worldwide</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaUsers className="text-blue-500" />
                                    <span className="text-gray-300">On-site services available</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaClock className="text-blue-500" />
                                    <span className="text-gray-300">Flexible engagement timelines</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <FaGlobe className="text-blue-500 mt-1" />
                                        <div>
                                            <h4 className="text-white font-semibold">Location</h4>
                                            <p className="text-gray-400">Pune, Maharashtra, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <FaPhone className="text-blue-500 mt-1" />
                                        <div>
                                            <h4 className="text-white font-semibold">Phone</h4>
                                            <p className="text-gray-400">+91 9421939661</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <FaShieldAlt className="text-blue-500 mt-1" />
                                        <div>
                                            <h4 className="text-white font-semibold">Email</h4>
                                            <p className="text-gray-400">security@hexasentra.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect rounded-2xl p-12 border border-blue-500/20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Talk to Real <span className="text-blue-400">Security Professionals</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                            If you want to understand your real security risks and address them properly, let's talk.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="magnetic-button glow-button inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50"
                            >
                                <FaRocket />
                                Start Your Security Journey
                            </Link>
                            <Link
                                to="/services"
                                className="magnetic-button inline-flex items-center gap-3 px-10 py-4 border-2 border-blue-500 hover:border-cyan-500 hover:bg-blue-500/10 rounded-full text-blue-500 hover:text-cyan-500 font-bold text-lg transition-all duration-300"
                            >
                                <FaArrowRight />
                                Explore Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;