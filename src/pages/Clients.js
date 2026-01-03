import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Clients = () => {
    const clients = [
        {
            name: 'Google',
            logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            industry: 'Technology',
            project: 'Web Application Security Assessment'
        },
        {
            name: 'Microsoft',
            logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
            industry: 'Technology',
            project: 'Cloud Infrastructure Penetration Testing'
        },
        {
            name: 'Apple',
            logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
            industry: 'Technology',
            project: 'iOS Application Security Review'
        },
        {
            name: 'Amazon',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
            industry: 'E-commerce',
            project: 'AWS Security Architecture Review'
        },
        {
            name: 'Meta',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
            industry: 'Social Media',
            project: 'API Security Assessment'
        },
        {
            name: 'Netflix',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
            industry: 'Entertainment',
            project: 'Streaming Platform Security Audit'
        },
        {
            name: 'Tesla',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
            industry: 'Automotive',
            project: 'IoT Security Assessment'
        },
        {
            name: 'PayPal',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
            industry: 'Fintech',
            project: 'Payment Gateway Security Testing'
        },
        {
            name: 'Airbnb',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
            industry: 'Hospitality',
            project: 'Platform Security Review'
        },
        {
            name: 'Uber',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
            industry: 'Transportation',
            project: 'Mobile App Security Testing'
        },
        {
            name: 'Spotify',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
            industry: 'Music Streaming',
            project: 'API Security Assessment'
        },
        {
            name: 'Adobe',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg',
            industry: 'Software',
            project: 'Cloud Security Review'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            position: 'CISO, Google',
            company: 'Google',
            rating: 5,
            text: 'Outstanding security expertise! The penetration testing revealed critical vulnerabilities we never knew existed. Highly professional and thorough.',
            avatar: 'https://i.pravatar.cc/150?img=1'
        },
        {
            name: 'Michael Chen',
            position: 'VP of Security, Microsoft',
            company: 'Microsoft',
            rating: 5,
            text: 'Exceptional work on our cloud infrastructure assessment. The detailed reports and remediation guidance were invaluable.',
            avatar: 'https://i.pravatar.cc/150?img=13'
        },
        {
            name: 'Emily Rodriguez',
            position: 'Head of InfoSec, Apple',
            company: 'Apple',
            rating: 5,
            text: 'Top-tier security researcher. Discovered multiple zero-day vulnerabilities in our iOS applications. Truly impressive skills.',
            avatar: 'https://i.pravatar.cc/150?img=5'
        },
        {
            name: 'David Park',
            position: 'Security Director, Amazon',
            company: 'Amazon',
            rating: 5,
            text: 'The AWS security review was comprehensive and insightful. Helped us significantly improve our security posture.',
            avatar: 'https://i.pravatar.cc/150?img=12'
        },
        {
            name: 'Lisa Anderson',
            position: 'Chief Security Officer, Meta',
            company: 'Meta',
            rating: 5,
            text: 'Incredible attention to detail in the API security assessment. Found vulnerabilities that could have been catastrophic.',
            avatar: 'https://i.pravatar.cc/150?img=9'
        },
        {
            name: 'James Wilson',
            position: 'Security Lead, Netflix',
            company: 'Netflix',
            rating: 5,
            text: 'Professional, thorough, and highly skilled. The security audit exceeded our expectations in every way.',
            avatar: 'https://i.pravatar.cc/150?img=14'
        }
    ];

    const stats = [
        { number: '100+', label: 'Enterprise Clients' },
        { number: '500+', label: 'Vulnerabilities Found' },
        { number: '99.9%', label: 'Client Satisfaction' },
        { number: '$10M+', label: 'Potential Losses Prevented' }
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
                            <span className="gradient-text neon-glow">Trusted by Industry Leaders</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Securing the world's most innovative companies with cutting-edge cybersecurity solutions
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Logo Grid */}
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
                            <span className="gradient-text">Our Clients</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Partnering with Fortune 500 companies and innovative startups worldwide
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="tilt-card bg-cyber-dark rounded-xl p-8 border border-cyber-blue/20 hover:border-cyber-blue transition-all duration-300 group"
                            >
                                <div className="h-20 flex items-center justify-center mb-4 image-hover-zoom">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<div class="text-2xl font-bold text-cyber-blue">${client.name}</div>`;
                                        }}
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-semibold text-gray-400 mb-1">{client.industry}</h3>
                                    <p className="text-xs text-gray-500">{client.project}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infinite Logo Carousel */}
            <section className="py-16 bg-cyber-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <h3 className="text-2xl font-bold text-center gradient-text">Featured In</h3>
                </div>
                <div className="relative">
                    <div className="flex logo-carousel">
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-cyber-darker rounded-lg border border-cyber-blue/10"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-12 max-w-32 object-contain filter brightness-0 invert opacity-50"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<div class="text-lg font-bold text-cyber-blue">${client.name}</div>`;
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
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
                            <span className="gradient-text">Client Testimonials</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            What our clients say about working with us
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-dark rounded-2xl p-8 border border-cyber-blue/20"
                            >
                                <FaQuoteLeft className="text-3xl text-cyber-blue mb-4 opacity-50" />
                                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>

                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 text-sm" />
                                    ))}
                                </div>

                                <div className="flex items-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-cyber-blue"
                                    />
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                                        <p className="text-xs text-cyber-blue">{testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-3xl p-12 border border-cyber-blue/30"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            Join Our Growing List of Satisfied Clients
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Let's work together to secure your digital infrastructure
                        </p>
                        <a
                            href="/contact"
                            className="magnetic-button glow-button inline-block px-10 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyber-blue/50 transition-all duration-300"
                        >
                            Start Your Security Journey
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
