import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaBug, FaShieldAlt, FaSearch, FaLock, FaCode, FaServer,
    FaCloud, FaMobile, FaCheckCircle, FaUsers, FaClock, FaEye,
    FaArrowRight, FaGraduationCap, FaPhone
} from 'react-icons/fa';

const Services = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            icon: <FaBug />,
            title: 'Penetration Testing',
            shortDesc: 'Deep, manual penetration testing for modern applications and platforms',
            fullDesc: 'HexaSentra provides deep, manual penetration testing for modern applications and platforms. Our testing simulates real attackers attempting to bypass authentication and authorization, abuse business logic, escalate privileges, access sensitive data, and chain multiple weaknesses together. We do not aim to list vulnerabilities. We aim to demonstrate risk.',
            features: [
                'Bypass authentication and authorization',
                'Abuse business logic',
                'Escalate privileges',
                'Access sensitive data',
                'Chain multiple weaknesses together',
                'Real attacker simulation'
            ],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Enterprise Security Assessments',
            shortDesc: 'Broader security assessments for complex environments',
            fullDesc: 'For organizations with multiple systems and complex environments, we provide broader security assessments that look at how systems interact, where trust breaks, and how an attacker could move across your environment. These engagements help leadership understand real organizational exposure, not isolated technical issues.',
            features: [
                'Multi-system interaction analysis',
                'Trust boundary evaluation',
                'Cross-environment attack paths',
                'Leadership-focused risk assessment',
                'Organizational exposure mapping',
                'Strategic security recommendations'
            ],
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: <FaUsers />,
            title: 'Red Team Engagements',
            shortDesc: 'Real-world attack simulation to test detection and response',
            fullDesc: 'Our red team engagements simulate real-world attacks designed to test detection, monitoring, and response capabilities. This service helps organizations evaluate security visibility, incident response readiness, and internal coordination during attacks. The objective is learning and improvement, not disruption.',
            features: [
                'Security visibility testing',
                'Incident response readiness',
                'Internal coordination evaluation',
                'Real-world attack simulation',
                'Detection capability assessment',
                'Response improvement recommendations'
            ],
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: <FaCode />,
            title: 'Secure Code Review',
            shortDesc: 'Manual secure code reviews to identify security weaknesses early',
            fullDesc: 'HexaSentra performs manual secure code reviews to identify security weaknesses early. This service is valuable for fast-moving development teams, critical applications, and AI-assisted or rapidly written codebases. We focus on logic, access control, and design decisions that often lead to serious vulnerabilities later.',
            features: [
                'Manual code analysis',
                'Logic flaw identification',
                'Access control review',
                'Design decision evaluation',
                'Early vulnerability detection',
                'Development team integration'
            ],
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <FaCloud />,
            title: 'Cloud & Infrastructure Security',
            shortDesc: 'Assess cloud and infrastructure environments for attack paths',
            fullDesc: 'We assess cloud and infrastructure environments to identify attack paths that could result in full compromise. Our reviews focus on realistic abuse scenarios, not compliance-only checks. We understand how modern cloud environments work and where they typically fail.',
            features: [
                'Cloud environment assessment',
                'Infrastructure attack path analysis',
                'Realistic abuse scenario testing',
                'Full compromise risk evaluation',
                'Modern cloud security review',
                'Beyond compliance checking'
            ],
            color: 'from-cyan-500 to-blue-500'
        },
        {
            icon: <FaClock />,
            title: 'On-Call Pentester Service',
            shortDesc: 'Direct access to security expertise when you need it',
            fullDesc: 'HexaSentra offers on-call penetration tester support for organizations that need direct access to security expertise. This service allows you to consult a pentester during development or releases, validate fixes quickly, and get real answers during security incidents. Think of us as an extension of your security team.',
            features: [
                'Development consultation',
                'Release security validation',
                'Quick fix verification',
                'Security incident support',
                'Real-time expert access',
                'Security team extension'
            ],
            color: 'from-orange-500 to-yellow-500'
        },
        {
            icon: <FaGraduationCap />,
            title: 'Corporate Cybersecurity Training',
            shortDesc: 'Real-world security training for technical teams',
            fullDesc: 'We provide corporate cybersecurity training designed for real teams, not theory. Training is tailored for developers, technical teams, and engineering leadership. Sessions focus on real attack examples, common mistakes, and practical defense strategies.',
            features: [
                'Developer-focused training',
                'Technical team education',
                'Engineering leadership sessions',
                'Real attack examples',
                'Common mistake analysis',
                'Practical defense strategies'
            ],
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    const whyHexaSentra = [
        {
            icon: <FaUsers />,
            title: 'Team of experienced hackers and security researchers',
            description: 'Our team brings years of experience from professional security engagements and real-world testing.'
        },
        {
            icon: <FaEye />,
            title: 'Manual testing instead of scanner-only results',
            description: 'We prioritize human expertise over automated tools to find complex vulnerabilities that scanners miss.'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Clear, professional reports',
            description: 'Our reports focus on actionable findings with clear business impact, not technical noise.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Honest risk assessment without exaggeration',
            description: 'We provide realistic risk assessments based on actual exploitability and business impact.'
        },
        {
            icon: <FaPhone />,
            title: 'Direct communication with testers',
            description: 'Work directly with the security professionals who performed your assessment.'
        },
        {
            icon: <FaLock />,
            title: 'Confidential and responsible handling',
            description: 'We treat your security information with the highest level of confidentiality and professionalism.'
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
                            <span className="gradient-text">HexaSentra Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            Manual security testing focused on real attack paths and actionable outcomes
                        </p>
                        <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 inline-block">
                            <p className="text-lg font-semibold text-blue-400">
                                Security Built by Practitioners
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                onClick={() => setActiveService(index)}
                                className={`card-hover bg-cyber-darker rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeService === index ? 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/20' : ''
                                    }`}
                            >
                                <div className={`text-4xl mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm">{service.shortDesc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        key={activeService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                    >
                        <div>
                            <div className={`text-6xl mb-6 bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent inline-block`}>
                                {services[activeService].icon}
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">{services[activeService].title}</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {services[activeService].fullDesc}
                            </p>
                            <Link
                                to="/contact"
                                className="glow-button inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
                            >
                                Request This Service
                            </Link>
                        </div>

                        <div className="bg-cyber-dark rounded-2xl p-8 border border-blue-500/20">
                            <h3 className="text-2xl font-bold text-white mb-6">What We Focus On</h3>
                            <ul className="space-y-4">
                                {services[activeService].features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <FaCheckCircle className="text-blue-500 text-lg mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why HexaSentra Section */}
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
                            Why Clients Work With <span className="text-blue-400">HexaSentra</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We treat security as a partnership, not a transaction
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyHexaSentra.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-darker rounded-2xl p-8"
                            >
                                <div className="text-4xl text-blue-500 mb-6">
                                    {reason.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">{reason.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                            </motion.div>
                        ))}
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
                            How We Do <span className="text-blue-400">Security Testing</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            At HexaSentra, manual testing is the foundation of every engagement
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
                                    <h3 className="text-2xl font-bold text-white mb-4">Manual Testing Foundation</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Automation is used only where it genuinely helps. All findings are manually validated.
                                        No false positives. No copied reports.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Attacker Perspective</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We focus on understanding how an attacker would approach your system,
                                        what can realistically be exploited, and what the actual business impact is.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Clear Outcomes</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our goal is to give you clarity, not noise. We provide actionable recommendations
                                        that help you fix real security issues.
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
                                <FaEye className="text-6xl text-blue-500 mb-6" />
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
                            Ready to Work with <span className="text-blue-400">Real Security Professionals</span>?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                            If you want to understand your real security risks and address them properly, let's talk.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/contact"
                                className="magnetic-button glow-button inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50"
                            >
                                <FaCheckCircle />
                                Get a Free Scope Call
                            </Link>
                            <Link
                                to="/pricing"
                                className="magnetic-button inline-flex items-center gap-3 px-10 py-4 border-2 border-blue-500 hover:border-cyan-500 hover:bg-blue-500/10 rounded-full text-blue-500 hover:text-cyan-500 font-bold text-lg transition-all duration-300"
                            >
                                <FaArrowRight />
                                View Pricing Models
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;