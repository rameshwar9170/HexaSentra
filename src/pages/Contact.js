import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin,
    FaTwitter, FaGithub, FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'contact@cyberguard.com',
            link: 'mailto:contact@cyberguard.com'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Cyber City, CC 12345',
            link: '#'
        }
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, name: 'LinkedIn', link: 'https://linkedin.com', color: 'hover:text-blue-500' },
        { icon: <FaTwitter />, name: 'Twitter', link: 'https://twitter.com', color: 'hover:text-sky-400' },
        { icon: <FaGithub />, name: 'GitHub', link: 'https://github.com', color: 'hover:text-gray-400' }
    ];

    const services = [
        'Bug Bounty Hunting',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Audit',
        'Secure Code Review',
        'Infrastructure Security',
        'Cloud Security',
        'Mobile Security',
        'Other'
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #00d4ff 1px, transparent 1px)',
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
                            <span className="gradient-text">Get In Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Let's discuss how I can help secure your digital assets
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-cyber-darker rounded-2xl p-8 border border-cyber-blue/20">
                                <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-gradient-to-r from-cyber-blue/20 to-cyber-green/20 border border-cyber-green rounded-xl p-8 text-center"
                                    >
                                        <div className="text-6xl text-cyber-green mb-4">✓</div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-300">I'll get back to you within 24 hours.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors duration-300"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="service" className="block text-gray-300 mb-2 font-medium">
                                                Service Interested In *
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors duration-300"
                                            >
                                                <option value="">Select a service</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                className="w-full px-4 py-3 bg-cyber-dark border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors duration-300 resize-none"
                                                placeholder="Tell me about your security needs..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="glow-button w-full px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyber-blue/50 transition-all duration-300 flex items-center justify-center space-x-2"
                                        >
                                            <span>Send Message</span>
                                            <FaPaperPlane />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your security team.
                                </p>

                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={index}
                                            href={info.link}
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="flex items-start space-x-4 bg-cyber-darker rounded-xl p-6 border border-cyber-blue/20 hover:border-cyber-blue transition-all duration-300 group"
                                        >
                                            <div className="text-3xl text-cyber-blue group-hover:scale-110 transition-transform duration-300">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                                                <p className="text-gray-400">{info.value}</p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-cyber-darker rounded-2xl p-8 border border-cyber-blue/20">
                                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className={`flex items-center justify-center w-14 h-14 bg-cyber-dark rounded-full text-2xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-2xl p-8 border border-cyber-blue/30">
                                <h3 className="text-2xl font-bold text-white mb-4">Availability</h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    I'm currently available for new projects and consulting opportunities. Response time is typically within 24 hours.
                                </p>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
                                    <span className="text-cyber-green font-semibold">Available for hire</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-cyber-dark rounded-2xl overflow-hidden border border-cyber-blue/20"
                        style={{ height: '400px' }}
                    >
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyber-dark to-cyber-darker">
                            <div className="text-center">
                                <FaMapMarkerAlt className="text-6xl text-cyber-blue mx-auto mb-4" />
                                <p className="text-xl text-gray-400">Map Location</p>
                                <p className="text-gray-500 mt-2">Cyber City, CC 12345</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
