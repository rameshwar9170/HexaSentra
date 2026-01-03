import React from 'react';
import { motion } from 'framer-motion';
import {
    FaCertificate, FaShieldAlt,
    FaLightbulb, FaUsers, FaRocket
} from 'react-icons/fa';

const About = () => {
    const skills = [
        { name: 'Penetration Testing', level: 95 },
        { name: 'Web Application Security', level: 98 },
        { name: 'Network Security', level: 90 },
        { name: 'Cryptography', level: 85 },
        { name: 'Reverse Engineering', level: 88 },
        { name: 'Cloud Security', level: 92 },
    ];

    const certifications = [
        { name: 'OSCP', org: 'Offensive Security Certified Professional' },
        { name: 'CEH', org: 'Certified Ethical Hacker' },
        { name: 'CISSP', org: 'Certified Information Systems Security Professional' },
        { name: 'GPEN', org: 'GIAC Penetration Tester' },
    ];

    const timeline = [
        { year: '2018', title: 'Started Bug Bounty Journey', description: 'Discovered first critical vulnerability on HackerOne' },
        { year: '2019', title: 'Top 100 Bug Hunter', description: 'Ranked in top 100 on HackerOne and Bugcrowd' },
        { year: '2020', title: 'Security Researcher', description: 'Published multiple CVEs and security research papers' },
        { year: '2021', title: 'Founded CyberGuard', description: 'Started offering professional security services' },
        { year: '2022', title: 'Industry Recognition', description: 'Featured in Forbes 30 Under 30 for Cybersecurity' },
        { year: '2023', title: 'Global Impact', description: 'Helped secure 100+ organizations worldwide' },
    ];

    const values = [
        {
            icon: <FaShieldAlt />,
            title: 'Security First',
            description: 'Every decision is made with security as the top priority'
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovation',
            description: 'Constantly exploring new techniques and methodologies'
        },
        {
            icon: <FaUsers />,
            title: 'Collaboration',
            description: 'Working closely with clients to achieve their security goals'
        },
        {
            icon: <FaRocket />,
            title: 'Excellence',
            description: 'Delivering the highest quality security assessments'
        },
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
                            <span className="gradient-text">About Me</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            A passionate cybersecurity expert dedicated to making the digital world safer, one vulnerability at a time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-cyber-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 gradient-text">My Journey</h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    With over 6 years of experience in cybersecurity, I've dedicated my career to identifying and eliminating security vulnerabilities that could compromise digital assets.
                                </p>
                                <p>
                                    My journey began with a curiosity about how systems work and evolved into a passion for breaking them (ethically, of course) to make them stronger. I've worked with Fortune 500 companies, startups, and government organizations to secure their infrastructure.
                                </p>
                                <p>
                                    As a top-ranked bug bounty hunter, I've discovered hundreds of critical vulnerabilities across major platforms, earning recognition from tech giants like Google, Microsoft, Apple, and Facebook.
                                </p>
                                <p>
                                    Today, I combine my practical experience with cutting-edge research to provide comprehensive security solutions that protect organizations from evolving cyber threats.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="card-hover bg-cyber-darker rounded-xl p-6 text-center"
                                >
                                    <div className="text-4xl text-cyber-blue mb-3 flex justify-center">{value.icon}</div>
                                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                    <p className="text-sm text-gray-400">{value.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
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
                            <span className="gradient-text">Technical Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Mastery across multiple cybersecurity domains
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-semibold">{skill.name}</span>
                                    <span className="text-cyber-blue font-bold">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-cyber-dark rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
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
                            <span className="gradient-text">Certifications</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Industry-recognized credentials and qualifications
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-darker rounded-xl p-6 text-center"
                            >
                                <FaCertificate className="text-5xl text-cyber-blue mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">{cert.name}</h3>
                                <p className="text-sm text-gray-400">{cert.org}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-cyber-darker">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Career Timeline</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Key milestones in my cybersecurity journey
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyber-blue to-cyber-purple hidden md:block"></div>

                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
                            >
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                                    <div className="bg-cyber-dark rounded-xl p-6 border border-cyber-blue/30 hover:border-cyber-blue transition-all duration-300">
                                        <div className="text-cyber-blue font-bold text-2xl mb-2">{item.year}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-blue rounded-full border-4 border-cyber-darker"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
