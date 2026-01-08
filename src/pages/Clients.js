import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaShieldAlt, FaUsers, FaBuilding, FaRocket, FaGlobe, FaLock,
    FaCheckCircle, FaArrowRight, FaIndustry, FaHeart, FaCode,
    FaEye, FaPhone, FaUserSecret
} from 'react-icons/fa';

const Clients = () => {
    const clientTypes = [
        {
            icon: <FaRocket />,
            title: 'Startups',
            description: 'Fast-moving companies that need security built into their growth strategy from day one.',
            benefits: [
                'Rapid security assessments',
                'Developer-friendly guidance',
                'Cost-effective solutions',
                'Scalable security practices',
                'Growth-focused security strategy'
            ],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <FaCode />,
            title: 'SaaS Companies',
            description: 'Software-as-a-Service providers requiring continuous security validation and customer trust.',
            benefits: [
                'Application security testing',
                'API security assessment',
                'Multi-tenant security review',
                'Compliance support',
                'Customer security assurance'
            ],
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <FaGlobe />,
            title: 'Technology-Driven Organizations',
            description: 'Companies where technology is core to their business operations and competitive advantage.',
            benefits: [
                'Infrastructure security',
                'Cloud security assessment',
                'DevSecOps integration',
                'Continuous security monitoring',
                'Technology risk management'
            ],
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: <FaBuilding />,
            title: 'Enterprises',
            description: 'Large organizations with complex security requirements and compliance obligations.',
            benefits: [
                'Enterprise security assessments',
                'Red team engagements',
                'Compliance auditing',
                'Executive security reporting',
                'Multi-location coordination'
            ],
            color: 'from-orange-500 to-red-500'
        }
    ];

    const testimonials = [
        {
            quote: "HexaSentra's manual testing approach identified critical vulnerabilities that our automated tools completely missed. Their team thinks like real attackers.",
            author: "CTO, Technology Startup",
            company: "Confidential Client",
            icon: <FaRocket />
        },
        {
            quote: "The clarity of their reports and actionable recommendations helped us fix real security issues quickly. No noise, just valuable insights.",
            author: "Security Lead, SaaS Company",
            company: "Confidential Client",
            icon: <FaCode />
        },
        {
            quote: "Working with HexaSentra feels like having experienced security professionals as part of our team. They understand our business context.",
            author: "Engineering Director, Enterprise",
            company: "Confidential Client",
            icon: <FaBuilding />
        }
    ];

    const confidentialityFeatures = [
        {
            icon: <FaLock />,
            title: 'Strict Confidentiality',
            description: 'All client information is kept strictly confidential with comprehensive NDAs and security protocols.'
        },
        {
            icon: <FaUserSecret />,
            title: 'Professional Discretion',
            description: 'Our team maintains the highest standards of professional discretion in all engagements.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Secure Handling',
            description: 'Client data and findings are handled with enterprise-grade security measures and access controls.'
        },
        {
            icon: <FaEye />,
            title: 'Transparent Process',
            description: 'While maintaining confidentiality, we provide full transparency in our testing methodologies and findings.'
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
                            <span className="gradient-text">Who We Work With</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            HexaSentra partners with organizations of all sizes to strengthen their security posture
                        </p>
                        <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 inline-block">
                            <p className="text-lg font-semibold text-blue-400">
                                Client names and details are kept confidential unless explicitly approved
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Client Types Section */}
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
                            Our <span className="text-blue-400">Client Portfolio</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We work with diverse organizations, each with unique security challenges and requirements
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {clientTypes.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-darker rounded-2xl p-8"
                            >
                                <div className={`text-5xl mb-6 bg-gradient-to-r ${client.color} bg-clip-text text-transparent`}>
                                    {client.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{client.title}</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">{client.description}</p>
                                
                                <h4 className="text-lg font-semibold text-white mb-4">How We Help:</h4>
                                <ul className="space-y-3">
                                    {client.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-400">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
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
                            What Our <span className="text-blue-400">Clients Say</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Feedback from organizations we've helped secure
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-effect rounded-2xl p-8 border border-blue-500/20"
                            >
                                <div className="text-4xl text-blue-500 mb-6">
                                    {testimonial.icon}
                                </div>
                                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div>
                                    <div className="text-white font-semibold">{testimonial.author}</div>
                                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Confidentiality Section */}
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
                            <span className="text-blue-400">Confidentiality</span> & Trust
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Your security information is handled with the highest level of confidentiality and professionalism
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {confidentialityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-darker rounded-2xl p-8 text-center"
                            >
                                <div className="text-4xl text-blue-500 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
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
                            Client <span className="text-blue-400">Success Metrics</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">500+</div>
                            <div className="text-lg font-semibold text-white mb-2">Organizations Secured</div>
                            <div className="text-gray-400 text-sm">From startups to Fortune 500 companies</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">98%</div>
                            <div className="text-lg font-semibold text-white mb-2">Client Satisfaction</div>
                            <div className="text-gray-400 text-sm">Trusted by leading organizations worldwide</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">24h</div>
                            <div className="text-lg font-semibold text-white mb-2">Response Time</div>
                            <div className="text-gray-400 text-sm">Quick response to security inquiries</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">100%</div>
                            <div className="text-lg font-semibold text-white mb-2">Confidentiality</div>
                            <div className="text-gray-400 text-sm">Strict confidentiality maintained</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-effect rounded-2xl p-12 border border-blue-500/20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Ready to Join Our <span className="text-blue-400">Client Family</span>?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Whether you're a startup building your first product or an enterprise managing complex systems, 
                            we have the expertise to help secure your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="magnetic-button glow-button inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50"
                            >
                                <FaCheckCircle />
                                Get Security Assessment
                            </Link>
                            <Link
                                to="/about"
                                className="magnetic-button inline-flex items-center gap-3 px-10 py-4 border-2 border-blue-500 hover:border-cyan-500 hover:bg-blue-500/10 rounded-full text-blue-500 hover:text-cyan-500 font-bold text-lg transition-all duration-300"
                            >
                                <FaArrowRight />
                                Learn More About Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Clients;