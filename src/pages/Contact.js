import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin,
    FaTwitter, FaGithub, FaPaperPlane, FaCheckCircle,
    FaShieldAlt, FaClock, FaUsers, FaGlobe
} from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        environment: '',
        timeline: '',
        compliance: '',
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
        console.log('Security Assessment Request:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                environment: '',
                timeline: '',
                compliance: '',
                message: ''
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'security@hexasentra.com',
            link: 'mailto:security@hexasentra.com'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            value: '+91 9421939661',
            link: 'tel:+919421939661'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: 'Pune, Maharashtra, India',
            link: '#'
        },
        {
            icon: <FaClock />,
            title: 'Response Time',
            value: '24 Hours or Less',
            link: '#'
        }
    ];

    const services = [
        'Penetration Testing Engagement',
        'Enterprise Security Assessment',
        'Red Team Engagement',
        'Secure Code Review',
        'On-Call Pentester (Retainer)',
        'Infrastructure Security',
        'Other / Consultation'
    ];

    const environments = [
        'Web Applications',
        'Mobile Applications',
        'Cloud Infrastructure (AWS/Azure/GCP)',
        'Network Infrastructure',
        'API Endpoints',
        'IoT Devices',
        'Multiple Systems',
        'Other'
    ];

    const timelines = [
        'ASAP (Emergency)',
        '1-2 Weeks',
        '2-4 Weeks',
        '1-2 Months',
        '3+ Months',
        'Flexible'
    ];

    const complianceNeeds = [
        'None',
        'PCI DSS',
        'HIPAA',
        'SOX',
        'ISO 27001',
        'NIST',
        'GDPR',
        'Other'
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
                            <span className="gradient-text">Get Started</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Talk to Real Security Professionals
                        </h2>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            If you want to understand your real security risks and address them properly, let us talk. 
                            Remote and on-site engagements available.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="glass-effect rounded-2xl p-8 border border-blue-500/20"
                            >
                                <h3 className="text-3xl font-bold text-white mb-8">Security Assessment Request</h3>
                                
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                                        <h4 className="text-2xl font-bold text-white mb-4">Request Submitted!</h4>
                                        <p className="text-gray-300">
                                            Thank you for your interest in HexaSentra. Our security experts will review your 
                                            request and respond within 24 hours with a recommended engagement plan.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white font-semibold mb-2">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white font-semibold mb-2">Company *</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                    placeholder="Your organization"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white font-semibold mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                    placeholder="your.email@company.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white font-semibold mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white font-semibold mb-2">Service Needed *</label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service, index) => (
                                                        <option key={index} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-white font-semibold mb-2">Environment Type *</label>
                                                <select
                                                    name="environment"
                                                    value={formData.environment}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                >
                                                    <option value="">Select environment</option>
                                                    {environments.map((env, index) => (
                                                        <option key={index} value={env}>{env}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white font-semibold mb-2">Timeline</label>
                                                <select
                                                    name="timeline"
                                                    value={formData.timeline}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                >
                                                    <option value="">Select timeline</option>
                                                    {timelines.map((timeline, index) => (
                                                        <option key={index} value={timeline}>{timeline}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-white font-semibold mb-2">Compliance Needs</label>
                                                <select
                                                    name="compliance"
                                                    value={formData.compliance}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                                >
                                                    <option value="">Select compliance</option>
                                                    {complianceNeeds.map((compliance, index) => (
                                                        <option key={index} value={compliance}>{compliance}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white font-semibold mb-2">Additional Details</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                                                placeholder="Tell us more about your security goals, specific concerns, or any additional context that would help us provide the best recommendation..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full glow-button px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-500/50"
                                        >
                                            <FaPaperPlane />
                                            Request Security Assessment
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        {contactInfo.map((info, index) => (
                                            <div key={index} className="flex items-start space-x-4">
                                                <div className="text-2xl text-blue-500 mt-1">
                                                    {info.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                                                    {info.link !== '#' ? (
                                                        <a
                                                            href={info.link}
                                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                                        >
                                                            {info.value}
                                                        </a>
                                                    ) : (
                                                        <span className="text-gray-400">{info.value}</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                    <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">Review & Analysis</h4>
                                                <p className="text-gray-400 text-sm">We analyze your requirements and environment details</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">Custom Proposal</h4>
                                                <p className="text-gray-400 text-sm">Receive a tailored engagement plan with transparent pricing</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">Security Assessment</h4>
                                                <p className="text-gray-400 text-sm">Begin your custom-scoped security engagement</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-effect rounded-2xl p-8 border border-green-500/20">
                                    <div className="text-center">
                                        <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-2">Trusted by 500+ Organizations</h3>
                                        <p className="text-gray-400 text-sm">
                                            Join leading companies that trust HexaSentra to protect their critical assets
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative Contact Methods */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Other Ways to <span className="text-blue-400">Connect</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="card-hover bg-cyber-dark rounded-2xl p-8 text-center"
                        >
                            <FaPhone className="text-5xl text-blue-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-bold text-white mb-4">Emergency Response</h3>
                            <p className="text-gray-400 mb-6">
                                Need immediate security assistance? Our emergency response team is available 24/7.
                            </p>
                            <a
                                href="tel:+15551234392"
                                className="inline-block px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
                            >
                                Call Now
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="card-hover bg-cyber-dark rounded-2xl p-8 text-center"
                        >
                            <FaUsers className="text-5xl text-blue-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-bold text-white mb-4">Schedule Consultation</h3>
                            <p className="text-gray-400 mb-6">
                                Book a free 30-minute consultation to discuss your security needs with our experts.
                            </p>
                            <a
                                href="#"
                                className="inline-block px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
                            >
                                Book Meeting
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="card-hover bg-cyber-dark rounded-2xl p-8 text-center"
                        >
                            <FaGlobe className="text-5xl text-blue-500 mb-6 mx-auto" />
                            <h3 className="text-2xl font-bold text-white mb-4">Partner Program</h3>
                            <p className="text-gray-400 mb-6">
                                Interested in partnering with HexaSentra? Learn about our partner opportunities.
                            </p>
                            <a
                                href="mailto:partners@hexasentra.com"
                                className="inline-block px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;