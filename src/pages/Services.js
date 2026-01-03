import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaBug, FaShieldAlt, FaSearch, FaLock, FaCode, FaServer,
    FaCloud, FaMobile, FaCheckCircle
} from 'react-icons/fa';

const Services = () => {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            icon: <FaBug />,
            title: 'Bug Bounty Hunting',
            shortDesc: 'Expert vulnerability discovery on major platforms',
            fullDesc: 'As a top-ranked bug bounty hunter, I specialize in discovering critical vulnerabilities across web applications, mobile apps, and APIs. With a proven track record on platforms like HackerOne and Bugcrowd, I help organizations identify security flaws before malicious actors can exploit them.',
            features: [
                'Web Application Testing',
                'API Security Assessment',
                'Mobile App Penetration Testing',
                'Business Logic Flaws',
                'Authentication Bypass',
                'Data Exposure Analysis'
            ],
            color: 'from-cyber-blue to-blue-600'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Penetration Testing',
            shortDesc: 'Comprehensive security assessments',
            fullDesc: 'Thorough penetration testing services following industry-standard methodologies like OWASP, PTES, and NIST. I simulate real-world attacks to identify vulnerabilities in your infrastructure, applications, and networks.',
            features: [
                'External Network Penetration Testing',
                'Internal Network Assessment',
                'Web Application Penetration Testing',
                'Wireless Security Testing',
                'Social Engineering Assessments',
                'Red Team Operations'
            ],
            color: 'from-cyber-purple to-purple-600'
        },
        {
            icon: <FaSearch />,
            title: 'Vulnerability Assessment',
            shortDesc: 'Identify and prioritize security weaknesses',
            fullDesc: 'Systematic examination of your systems to identify, quantify, and prioritize vulnerabilities. I provide detailed reports with risk ratings and remediation recommendations.',
            features: [
                'Automated Vulnerability Scanning',
                'Manual Security Testing',
                'Risk Assessment & Prioritization',
                'Compliance Verification',
                'Patch Management Review',
                'Configuration Audits'
            ],
            color: 'from-cyber-pink to-pink-600'
        },
        {
            icon: <FaLock />,
            title: 'Security Audits',
            shortDesc: 'In-depth security posture evaluation',
            fullDesc: 'Comprehensive security audits that evaluate your entire security posture, including policies, procedures, and technical controls. I provide actionable recommendations to strengthen your defenses.',
            features: [
                'Security Policy Review',
                'Access Control Audits',
                'Encryption Implementation Review',
                'Incident Response Planning',
                'Security Architecture Review',
                'Compliance Gap Analysis'
            ],
            color: 'from-cyber-green to-green-600'
        },
        {
            icon: <FaCode />,
            title: 'Secure Code Review',
            shortDesc: 'Line-by-line security analysis',
            fullDesc: 'Expert code review services to identify security vulnerabilities in your source code. I analyze your codebase for common vulnerabilities like SQL injection, XSS, CSRF, and insecure configurations.',
            features: [
                'Static Code Analysis',
                'Dynamic Application Testing',
                'Dependency Vulnerability Scanning',
                'Security Best Practices Review',
                'OWASP Top 10 Compliance',
                'Secure Development Training'
            ],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <FaServer />,
            title: 'Infrastructure Security',
            shortDesc: 'Hardening and securing your infrastructure',
            fullDesc: 'Comprehensive infrastructure security services including server hardening, network segmentation, and security architecture design. I help you build a robust security foundation.',
            features: [
                'Server Hardening',
                'Network Segmentation',
                'Firewall Configuration',
                'IDS/IPS Implementation',
                'Security Monitoring Setup',
                'Disaster Recovery Planning'
            ],
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: <FaCloud />,
            title: 'Cloud Security',
            shortDesc: 'Secure your cloud infrastructure',
            fullDesc: 'Specialized cloud security services for AWS, Azure, and GCP. I help you implement security best practices, configure proper access controls, and ensure compliance.',
            features: [
                'Cloud Security Assessment',
                'IAM Configuration Review',
                'Data Encryption Setup',
                'Cloud Compliance Audits',
                'Container Security',
                'Serverless Security'
            ],
            color: 'from-cyan-500 to-blue-500'
        },
        {
            icon: <FaMobile />,
            title: 'Mobile Security',
            shortDesc: 'iOS and Android app security testing',
            fullDesc: 'Comprehensive mobile application security testing for both iOS and Android platforms. I identify vulnerabilities in mobile apps, APIs, and backend services.',
            features: [
                'iOS App Security Testing',
                'Android App Security Testing',
                'API Security Assessment',
                'Data Storage Analysis',
                'Network Communication Review',
                'Reverse Engineering'
            ],
            color: 'from-pink-500 to-rose-500'
        }
    ];

    const packages = [
        {
            name: 'Basic',
            price: '$2,500',
            duration: '1-2 weeks',
            features: [
                'Single Service Assessment',
                'Detailed Report',
                'Executive Summary',
                'Email Support',
                '30-day Retest'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: '$5,000',
            duration: '2-4 weeks',
            features: [
                'Multiple Service Assessments',
                'Comprehensive Report',
                'Executive Presentation',
                'Priority Support',
                '60-day Retest',
                'Remediation Guidance'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            duration: 'Flexible',
            features: [
                'Full Security Program',
                'Ongoing Assessments',
                'Dedicated Security Consultant',
                '24/7 Support',
                'Unlimited Retests',
                'Security Training',
                'Compliance Support'
            ],
            popular: false
        }
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
                            <span className="gradient-text">Security Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive cybersecurity solutions to protect your digital assets from evolving threats
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                onClick={() => setActiveService(index)}
                                className={`card-hover bg-cyber-darker rounded-2xl p-6 cursor-pointer ${activeService === index ? 'ring-2 ring-cyber-blue' : ''
                                    }`}
                            >
                                <div className={`text-5xl mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
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
                            <a
                                href="/contact"
                                className="glow-button inline-block px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold hover:shadow-2xl hover:shadow-cyber-blue/50 transition-all duration-300"
                            >
                                Request This Service
                            </a>
                        </div>

                        <div className="bg-cyber-dark rounded-2xl p-8 border border-cyber-blue/20">
                            <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                            <ul className="space-y-4">
                                {services[activeService].features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-start space-x-3"
                                    >
                                        <FaCheckCircle className="text-cyber-blue text-xl mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Pricing Packages</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Flexible pricing options to suit your security needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative bg-cyber-darker rounded-2xl p-8 border-2 ${pkg.popular ? 'border-cyber-blue shadow-xl shadow-cyber-blue/20' : 'border-cyber-blue/20'
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold text-sm">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                <div className="text-4xl font-bold gradient-text mb-2">{pkg.price}</div>
                                <p className="text-gray-400 mb-6">{pkg.duration}</p>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <FaCheckCircle className="text-cyber-blue mt-1 flex-shrink-0" />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="/contact"
                                    className={`block text-center px-6 py-3 rounded-full font-bold transition-all duration-300 ${pkg.popular
                                            ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white hover:shadow-lg hover:shadow-cyber-blue/50'
                                            : 'border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10'
                                        }`}
                                >
                                    Get Started
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">My Process</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A systematic approach to securing your digital assets
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Discovery', desc: 'Understanding your security needs and objectives' },
                            { step: '02', title: 'Assessment', desc: 'Thorough testing using advanced tools and techniques' },
                            { step: '03', title: 'Reporting', desc: 'Detailed documentation with actionable recommendations' },
                            { step: '04', title: 'Support', desc: 'Ongoing guidance and retest validation' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-cyber-dark rounded-xl p-6 border border-cyber-blue/20 hover:border-cyber-blue transition-all duration-300"
                            >
                                <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
