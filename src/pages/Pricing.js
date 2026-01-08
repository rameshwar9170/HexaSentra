import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaShieldAlt, FaBug, FaCode, FaUsers, FaClock, FaCheckCircle,
    FaArrowRight, FaPhone, FaStar, FaLock, FaSearch, FaServer
} from 'react-icons/fa';

const Pricing = () => {
    const [selectedEngagement, setSelectedEngagement] = useState(0);

    const engagementModels = [
        {
            icon: <FaBug />,
            title: 'Penetration Testing Engagement',
            subtitle: 'Best for companies that want a clear understanding of real security risks',
            duration: 'Typically 1–4 weeks',
            pricing: 'Shared after scope discussion',
            features: [
                'Manual penetration testing by experienced testers',
                'Real attack simulation',
                'Validated findings only',
                'Clear impact-based report',
                'Remediation guidance',
                'Optional retesting'
            ],
            color: 'from-blue-500 to-cyan-500',
            popular: true
        },
        {
            icon: <FaShieldAlt />,
            title: 'Enterprise Security Assessment',
            subtitle: 'Designed for organizations with multiple applications or complex environments',
            duration: 'Custom',
            pricing: 'Custom',
            features: [
                'Broader attack surface review',
                'Cross-system attack paths',
                'Priority risk identification for leadership',
                'Strategic security recommendations'
            ],
            color: 'from-purple-500 to-indigo-500',
            popular: false
        },
        {
            icon: <FaUsers />,
            title: 'Red Team Engagement',
            subtitle: 'Best for mature organizations that want to test detection and response, not just prevention',
            duration: 'Custom',
            pricing: 'Custom',
            features: [
                'Stealthy attacker simulation',
                'Multi-stage attack scenarios',
                'Post-engagement debrief'
            ],
            color: 'from-red-500 to-pink-500',
            popular: false
        },
        {
            icon: <FaCode />,
            title: 'Secure Code Review',
            subtitle: 'Ideal for business-critical applications, fast-moving development teams, pre-release security checks',
            duration: 'Based on codebase size',
            pricing: 'Custom',
            features: [
                'Manual source code review',
                'Logic and access control analysis',
                'Design-level security review'
            ],
            color: 'from-green-500 to-emerald-500',
            popular: false
        },
        {
            icon: <FaClock />,
            title: 'On-Call Pentester (Retainer Model)',
            subtitle: 'For teams that want continuous access to security expertise',
            duration: 'Monthly / Quarterly',
            pricing: 'Retainer-based',
            features: [
                'Direct access to a pentester',
                'Security reviews during development',
                'Quick validation of fixes',
                'Ongoing guidance'
            ],
            color: 'from-orange-500 to-yellow-500',
            popular: false
        }
    ];

    const pricingFactors = [
        {
            icon: <FaSearch />,
            title: 'Scope and complexity',
            description: 'The breadth and depth of systems to be tested'
        },
        {
            icon: <FaServer />,
            title: 'Type of systems involved',
            description: 'Web apps, mobile apps, infrastructure, or cloud environments'
        },
        {
            icon: <FaLock />,
            title: 'Depth of manual testing required',
            description: 'Level of manual verification and custom attack scenarios'
        },
        {
            icon: <FaClock />,
            title: 'Engagement duration',
            description: 'Timeline requirements and project complexity'
        }
    ];

    const whyNoFixedPricing = [
        'Shallow testing',
        'Over-reliance on automation',
        'Generic reports'
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
                            <span className="gradient-text">Pricing</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Security Engagements Tailored to Your Risk
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                Every system is different. Every attack surface is different.
                            </p>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                That is why HexaSentra does custom-scoped security engagements instead of one-size-fits-all pricing.
                            </p>
                            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20 inline-block">
                                <p className="text-xl font-semibold text-blue-400 mb-4">Our focus is quality and accuracy, not volume.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Factors */}
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
                            We price based on:
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pricingFactors.map((factor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-darker rounded-2xl p-8 text-center"
                            >
                                <div className="text-5xl text-blue-500 mb-6 flex justify-center">
                                    {factor.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{factor.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{factor.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Engagement Models</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {engagementModels.map((model, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative card-hover bg-cyber-dark rounded-2xl p-8 border-2 ${
                                    model.popular ? 'border-blue-500 shadow-xl shadow-blue-500/20' : 'border-white/10'
                                }`}
                            >
                                {model.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-sm">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`text-5xl mb-6 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                                    {model.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">{model.subtitle}</p>

                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-400">Duration:</span>
                                        <span className="text-blue-400 font-semibold">{model.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Pricing:</span>
                                        <span className="text-blue-400 font-semibold">{model.pricing}</span>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-lg font-semibold text-white mb-4">Includes:</h4>
                                    <ul className="space-y-3">
                                        {model.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to="/contact"
                                    className={`block text-center px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                                        model.popular
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50'
                                            : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10'
                                    }`}
                                >
                                    Request Assessment
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why No Fixed Prices */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Why We Do Not List <span className="text-red-400">Fixed Prices</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">Security testing is not a commodity.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="glass-effect rounded-2xl p-8 border border-red-500/20">
                                <h3 className="text-2xl font-bold text-red-400 mb-6">Fixed pricing often leads to:</h3>
                                <ul className="space-y-4">
                                    {whyNoFixedPricing.map((issue, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <span className="text-gray-300 text-lg">{issue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                <h3 className="text-2xl font-bold text-blue-400 mb-6">HexaSentra focuses on:</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center space-x-3">
                                        <FaCheckCircle className="text-blue-500" />
                                        <span className="text-gray-300 text-lg">Manual depth and accuracy</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <FaCheckCircle className="text-blue-500" />
                                        <span className="text-gray-300 text-lg">Proper scoping</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <FaCheckCircle className="text-blue-500" />
                                        <span className="text-gray-300 text-lg">Quality over quantity</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Request a Security Assessment</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                <h3 className="text-2xl font-bold text-white mb-6">Tell us about:</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start space-x-3">
                                        <FaArrowRight className="text-blue-500 mt-1" />
                                        <span className="text-gray-300">Your application or environment</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <FaArrowRight className="text-blue-500 mt-1" />
                                        <span className="text-gray-300">Your goals</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <FaArrowRight className="text-blue-500 mt-1" />
                                        <span className="text-gray-300">Any deadlines or compliance needs</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="glass-effect rounded-2xl p-8 border border-green-500/20">
                                <h3 className="text-2xl font-bold text-white mb-6">We will respond with:</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start space-x-3">
                                        <FaCheckCircle className="text-green-500 mt-1" />
                                        <span className="text-gray-300">Recommended engagement type</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <FaCheckCircle className="text-green-500 mt-1" />
                                        <span className="text-gray-300">Clear scope</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <FaCheckCircle className="text-green-500 mt-1" />
                                        <span className="text-gray-300">Transparent pricing</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                        <Link
                            to="/contact"
                            className="magnetic-button glow-button px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-500/50"
                        >
                            <FaCheckCircle />
                            Get Security Assessment
                        </Link>
                        <Link
                            to="/contact"
                            className="magnetic-button px-10 py-4 border-2 border-blue-500 hover:border-cyan-500 hover:bg-blue-500/10 rounded-full text-blue-500 hover:text-cyan-500 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <FaPhone />
                            Talk to a Pentester
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;