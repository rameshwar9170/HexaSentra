import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FaShieldAlt, FaBug, FaLock, FaSearch, FaCode, FaServer,
    FaRocket, FaUserSecret, FaDownload, FaCheckCircle, FaArrowRight,
    FaUsers, FaGlobe, FaChartLine, FaAward, FaClock, FaPhone,
    FaEye, FaHeart, FaLightbulb, FaBuilding, FaGraduationCap,
    FaCloud, FaMobile, FaEnvelope, FaMapMarkerAlt, FaIndustry,
    FaStar, FaQuoteLeft, FaPlay, FaPause
} from 'react-icons/fa';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [stats, setStats] = useState({
        clients: 0,
        vulnerabilities: 0,
        uptime: 0,
        satisfaction: 0
    });

    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Refs for horizontal scroll sections
    const servicesScrollRef = useRef(null);
    const servicesContainerRef = useRef(null);
    const pricingScrollRef = useRef(null);
    const pricingContainerRef = useRef(null);

    const { scrollYProgress } = useScroll();
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const yProgress = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const scaleSpring = useSpring(scaleProgress, springConfig);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targets = {
            clients: 500,
            vulnerabilities: 10000,
            uptime: 99.9,
            satisfaction: 98
        };

        let step = 0;
        const timer = setInterval(() => {
            step++;
            setStats({
                clients: Math.floor((targets.clients / steps) * step),
                vulnerabilities: Math.floor((targets.vulnerabilities / steps) * step),
                uptime: Math.min(99.9, ((targets.uptime / steps) * step)),
                satisfaction: Math.floor((targets.satisfaction / steps) * step)
            });

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    // GSAP Horizontal Scroll Animation for Services - Enhanced Smoothness
    useEffect(() => {
        if (servicesScrollRef.current && servicesContainerRef.current) {
            const scrollContainer = servicesScrollRef.current;
            const container = servicesContainerRef.current;

            const scrollWidth = container.scrollWidth - scrollContainer.offsetWidth;

            // Create smooth horizontal scroll animation
            const scrollTween = gsap.to(container, {
                x: -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: scrollContainer,
                    start: "top top",
                    end: () => `+=${scrollWidth * 1.2}`, // Extended for smoother scroll
                    scrub: 2, // Increased for ultra-smooth scrolling
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    smoothChildTiming: true,
                    snap: {
                        snapTo: 1 / (services.length + 1), // Snap to each card
                        duration: 0.5,
                        ease: "power2.inOut"
                    }
                }
            });

            // Animate cards on scroll
            gsap.utils.toArray(container.children).forEach((card, i) => {
                gsap.fromTo(card,
                    {
                        opacity: 0.6,
                        scale: 0.9,
                        rotateY: -15
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        scrollTrigger: {
                            trigger: card,
                            containerAnimation: scrollTween,
                            start: "left right",
                            end: "center center",
                            scrub: 2,
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // GSAP Horizontal Scroll Animation for Pricing - Enhanced Smoothness
    useEffect(() => {
        if (pricingScrollRef.current && pricingContainerRef.current) {
            const scrollContainer = pricingScrollRef.current;
            const container = pricingContainerRef.current;

            const scrollWidth = container.scrollWidth - scrollContainer.offsetWidth;

            // Create smooth horizontal scroll animation
            const scrollTween = gsap.to(container, {
                x: -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: scrollContainer,
                    start: "top top",
                    end: () => `+=${scrollWidth * 1.2}`, // Extended for smoother scroll
                    scrub: 2, // Increased for ultra-smooth scrolling
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    smoothChildTiming: true,
                    snap: {
                        snapTo: 1 / (pricingHighlights.length + 1), // Snap to each card
                        duration: 0.5,
                        ease: "power2.inOut"
                    }
                }
            });

            // Animate cards on scroll
            gsap.utils.toArray(container.children).forEach((card, i) => {
                gsap.fromTo(card,
                    {
                        opacity: 0.6,
                        scale: 0.85,
                        y: 50
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: card,
                            containerAnimation: scrollTween,
                            start: "left right",
                            end: "center center",
                            scrub: 2,
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });
        }
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const services = [
        {
            icon: <FaBug />,
            title: 'Penetration Testing',
            description: 'Deep, manual penetration testing for modern applications and platforms. We simulate real attackers attempting to bypass authentication, abuse business logic, and chain multiple weaknesses together.',
            features: ['Manual testing by experts', 'Real attack simulation', 'Validated findings only', 'Clear impact reports'],
            color: 'from-blue-500 to-cyan-500',
            bgGradient: 'from-blue-900/10 via-cyan-900/10 to-transparent',
            image: '/images/web-security.png'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Enterprise Security Assessment',
            description: 'Broader security assessments for complex environments that look at how systems interact, where trust breaks, and how attackers could move across your environment.',
            features: ['Multi-system analysis', 'Cross-environment paths', 'Leadership insights', 'Strategic recommendations'],
            color: 'from-purple-500 to-indigo-500',
            bgGradient: 'from-purple-900/10 via-indigo-900/10 to-transparent',
            image: '/images/cloud-security.png'
        },
        {
            icon: <FaUsers />,
            title: 'Red Team Engagement',
            description: 'Real-world attack simulation designed to test detection, monitoring, and response capabilities. The objective is learning and improvement, not disruption.',
            features: ['Stealthy simulation', 'Detection testing', 'Response evaluation', 'Improvement focus'],
            color: 'from-red-500 to-pink-500',
            bgGradient: 'from-red-900/10 via-pink-900/10 to-transparent',
            image: '/images/network-security.png'
        },
        {
            icon: <FaCode />,
            title: 'Secure Code Review',
            description: 'Manual secure code reviews to identify security weaknesses early. Valuable for fast-moving development teams and critical applications.',
            features: ['Manual code analysis', 'Logic flaw detection', 'Early identification', 'Development integration'],
            color: 'from-green-500 to-emerald-500',
            bgGradient: 'from-green-900/10 via-emerald-900/10 to-transparent',
            image: '/images/code-review.png'
        },
        {
            icon: <FaClock />,
            title: 'On-Call Pentester',
            description: 'Direct access to security expertise when you need it. Consult during development, validate fixes quickly, and get real answers during incidents.',
            features: ['Direct expert access', 'Development consultation', 'Quick validation', 'Incident support'],
            color: 'from-orange-500 to-yellow-500',
            bgGradient: 'from-orange-900/10 via-yellow-900/10 to-transparent',
            image: '/images/api-security.png'
        },
        {
            icon: <FaMobile />,
            title: 'Mobile App Security',
            description: 'Comprehensive security testing for iOS and Android applications including API testing, local storage analysis, and runtime manipulation.',
            features: ['iOS & Android testing', 'API security review', 'Runtime analysis', 'Compliance validation'],
            color: 'from-pink-500 to-purple-500',
            bgGradient: 'from-pink-900/10 via-purple-900/10 to-transparent',
            image: '/images/mobile-security.png'
        }
    ];

    const testimonials = [
        {
            quote: "HexaSentra's manual testing approach identified critical vulnerabilities that our automated tools completely missed. Their team thinks like real attackers.",
            author: "Sarah Chen",
            role: "CTO, TechFlow Solutions",
            company: "Fortune 500 Technology Company",
            rating: 5,
            avatar: "🚀"
        },
        {
            quote: "The clarity of their reports and actionable recommendations helped us fix real security issues quickly. No noise, just valuable insights.",
            author: "Michael Rodriguez",
            role: "Security Lead, CloudVault",
            company: "SaaS Platform Provider",
            rating: 5,
            avatar: "💻"
        },
        {
            quote: "Working with HexaSentra feels like having experienced security professionals as part of our team. They understand our business context.",
            author: "Dr. Emily Watson",
            role: "Engineering Director",
            company: "Healthcare Technology Enterprise",
            rating: 5,
            avatar: "🏥"
        }
    ];

    const clientTypes = [
        {
            icon: <FaRocket />,
            title: 'Startups',
            description: 'Fast-moving companies building security into their growth strategy',
            count: '150+',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <FaCode />,
            title: 'SaaS Companies',
            description: 'Software providers requiring continuous security validation',
            count: '200+',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <FaBuilding />,
            title: 'Enterprises',
            description: 'Large organizations with complex security requirements',
            count: '100+',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: <FaIndustry />,
            title: 'Tech Organizations',
            description: 'Technology-driven companies with core digital operations',
            count: '50+',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const pricingHighlights = [
        {
            icon: <FaSearch />,
            title: 'Custom Scoping',
            description: 'Every engagement tailored to your specific environment and risk profile'
        },
        {
            icon: <FaUsers />,
            title: 'Manual Expertise',
            description: 'Human-led testing that identifies complex vulnerabilities tools miss'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Quality Focus',
            description: 'Validated findings with clear business impact, not volume metrics'
        },
        {
            icon: <FaClock />,
            title: 'Flexible Timeline',
            description: 'Engagement duration based on complexity and your requirements'
        }
    ];

    const trustedBy = [
        'Fortune 500 Companies',
        'Financial Institutions',
        'Healthcare Organizations',
        'Government Agencies',
        'Technology Startups',
        'E-commerce Platforms'
    ];

    return (
        <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">
            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Hero Section with Parallax */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker"
                    style={{ scale: scaleSpring }}
                />

                {/* Dynamic Blue Glow */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle absolute bg-blue-500/20 rounded-full"
                            style={{
                                width: Math.random() * 4 + 2 + 'px',
                                height: Math.random() * 4 + 2 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 8,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* Status Badge with Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
                        >
                            <motion.div
                                className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <span className="text-base text-gray-300 font-semibold">Trusted by 500+ Organizations Worldwide</span>
                        </motion.div>

                        {/* Main Heading with Stagger Animation */}
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.span
                                className="text-white block mb-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            >
                                Break What Matters.
                            </motion.span>
                            <motion.span
                                className="neon-text block text-shimmer"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            >
                                Secure What Counts.
                            </motion.span>
                        </motion.h1>

                        {/* Description with Typewriter Effect */}
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                                HexaSentra is a cybersecurity startup built by experienced penetration testers and security researchers
                                from top global bug bounty platforms such as <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">HackerOne</span>, <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Bugcrowd</span>, and <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Intigriti</span>.
                            </p>
                            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                                We help companies uncover real security risks through manual penetration testing, attacker-style assessments,
                                and practical security reviews. Our work focuses on how systems are actually abused, not how scanners describe them.
                            </p>
                            <motion.div
                                className="glass-effect rounded-2xl p-8 border border-blue-500/20 inline-block"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37, 99, 235, 0.4)" }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <p className="text-lg font-bold text-blue-400">
                                    Security Built by Hackers
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* CTA Buttons with Hover Effects */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link
                                    to="/contact"
                                    className="magnetic-button glow-button px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-base transition-all duration-500 flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-blue-500/60"
                                >
                                    <FaCheckCircle className="text-lg" />
                                    Get Security Assessment
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link
                                    to="/contact"
                                    className="magnetic-button px-8 py-4 border-2 border-white/20 hover:border-blue-500/60 hover:bg-white/10 rounded-full text-white font-bold text-base transition-all duration-500 flex items-center justify-center gap-3"
                                >
                                    <FaPhone className="text-lg" />
                                    Talk to a Pentester
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trusted By Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <p className="text-gray-400 text-base mb-8 font-medium">Trusted by leading organizations across industries:</p>
                            <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
                                {trustedBy.map((company, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 1.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        whileHover={{ scale: 1.08, y: -2, backgroundColor: "rgba(37, 99, 235, 0.15)" }}
                                    >
                                        {company}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
                        <motion.div
                            className="w-2 h-3 bg-blue-500 rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>
            {/* Introduction Section with Parallax */}
            <section className="py-20 bg-cyber-dark relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-5"
                    style={{ y: yProgress }}
                >
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #2563eb 2px, transparent 2px)',
                        backgroundSize: '100px 100px'
                    }}></div>
                </motion.div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold mb-8 text-white"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Modern businesses move fast. <br />
                            <span className="text-blue-400">Security issues today are rarely basic or obvious.</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            They exist in logic, access control, workflows, integrations, and design decisions.
                        </motion.p>
                        <motion.p
                            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            HexaSentra was created to help organizations understand these risks clearly and fix them before they turn into incidents.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-bold text-white mb-8">We believe good security testing should:</h3>
                            <div className="space-y-8">
                                {[
                                    { icon: <FaUsers />, title: "Be led by humans, not tools", desc: "Manual expertise identifies complex vulnerabilities that automated scanners miss" },
                                    { icon: <FaArrowRight />, title: "Focus on real attack paths", desc: "Understanding how attackers actually exploit systems in the real world" },
                                    { icon: <FaCheckCircle />, title: "Provide clear, actionable outcomes", desc: "Practical recommendations that help you fix issues effectively" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <motion.div
                                            className="text-2xl text-blue-500 mt-1 flex-shrink-0"
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.div
                                className="glass-effect rounded-2xl p-8 border border-blue-500/20 text-center relative overflow-hidden"
                                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(37, 99, 235, 0.2)" }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Background Image */}
                                <motion.div
                                    className="absolute inset-0 opacity-10"
                                    initial={{ scale: 1.2 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <img src="/images/security-shield.png" alt="Security" className="w-full h-full object-cover" />
                                </motion.div>

                                <div className="relative z-10">
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        <FaShieldAlt className="text-6xl text-blue-500 mb-6 mx-auto" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-4">That is exactly how we work.</h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        We are a startup by name, but our team members bring years of individual experience securing real production systems.
                                    </p>
                                    <div className="bg-cyber-darker rounded-lg p-4">
                                        <p className="text-blue-400 font-semibold">
                                            "Security is our daily work, not a side offering."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Counter Animation */}
            <section className="py-20 bg-cyber-darker relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Proven <span className="text-blue-400">Track Record</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { key: 'clients', label: 'Clients Secured', suffix: '+' },
                            { key: 'vulnerabilities', label: 'Vulnerabilities Found', suffix: '+' },
                            { key: 'uptime', label: 'Service Uptime', suffix: '%' },
                            { key: 'satisfaction', label: 'Client Satisfaction', suffix: '%' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.key}
                                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ scale: 1.08, y: -8 }}
                                className="text-center glass-effect rounded-3xl p-10 hover:bg-white/12 transition-all duration-500 cursor-pointer border-glow"
                            >
                                <motion.div
                                    className="text-5xl md:text-6xl font-bold text-blue-400 mb-4"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.12, type: "spring", bounce: 0.4 }}
                                >
                                    {stat.key === 'vulnerabilities' ? stats[stat.key].toLocaleString() :
                                        stat.key === 'uptime' ? stats[stat.key].toFixed(1) :
                                            stats[stat.key]}{stat.suffix}
                                </motion.div>
                                <div className="text-gray-400 font-semibold text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section with Horizontal Scroll */}
            <section ref={servicesScrollRef} className="relative h-screen overflow-hidden bg-cyber-dark">
                <div className="sticky top-0 h-screen flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 px-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Our <span className="text-blue-400">Security Services</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                            Scroll horizontally to explore our comprehensive cybersecurity solutions
                        </p>
                        <div className="flex items-center justify-center gap-2 text-blue-400">
                            <FaArrowRight className="animate-pulse" />
                            <span className="text-sm font-semibold">Scroll to explore</span>
                        </div>
                    </motion.div>

                    <div ref={servicesContainerRef} className="flex gap-12 px-8 will-change-transform">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[480px] h-[650px] group perspective-1000"
                            >
                                <div className="relative h-full rounded-[2rem] overflow-hidden transform-gpu transition-all duration-1000 hover:scale-[1.08] hover:-rotate-2 shadow-2xl hover:shadow-blue-500/40">
                                    {/* Multi-layer Glassmorphism Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker/95 via-cyber-dark/85 to-cyber-darker/95 backdrop-blur-2xl" />

                                    {/* Animated Gradient Overlay - More Vibrant */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-all duration-1000`} />

                                    {/* Enhanced Glowing Border Effect */}
                                    <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-1000`} />

                                    {/* Subtle Inner Border */}
                                    <div className="absolute inset-0 rounded-[2rem] border-2 border-white/5 group-hover:border-white/20 transition-all duration-700" />

                                    {/* Background Image with Better Blend */}
                                    <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-all duration-1000">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover mix-blend-luminosity" />
                                    </div>

                                    {/* Radial Gradient Spotlight */}
                                    <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-cyber-darker/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                    {/* Content */}
                                    <div className="relative h-full p-12 flex flex-col justify-between z-10">
                                        <div>
                                            {/* Icon with Enhanced 3D Effect */}
                                            <div className="mb-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 ease-out">
                                                <div className={`text-8xl bg-gradient-to-br ${service.color} bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]`}>
                                                    {service.icon}
                                                </div>
                                            </div>

                                            {/* Title with Better Typography */}
                                            <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-all duration-700 leading-tight tracking-tight">
                                                {service.title}
                                            </h3>

                                            {/* Description with Better Readability */}
                                            <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed mb-10 text-base transition-all duration-700">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Features List with Stagger Effect */}
                                        <div>
                                            <ul className="space-y-4 mb-10">
                                                {service.features.map((feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center space-x-3 text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-500"
                                                        style={{ transitionDelay: `${idx * 50}ms` }}
                                                    >
                                                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-125 transition-transform duration-500`}>
                                                            <FaCheckCircle className="text-white text-xs" />
                                                        </div>
                                                        <span className="font-medium">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Enhanced CTA Button */}
                                            <Link
                                                to="/services"
                                                className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${service.color} rounded-full text-white font-bold transition-all duration-700 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-105 group/link relative overflow-hidden`}
                                            >
                                                <span className="relative z-10">Learn More</span>
                                                <FaArrowRight className="text-sm group-hover/link:translate-x-2 transition-transform duration-500 relative z-10" />
                                                {/* Button Shine Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/link:translate-x-[200%] transition-transform duration-1000" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Enhanced Floating Particles */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        {[...Array(8)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-60 animate-float blur-sm`}
                                                style={{
                                                    left: `${Math.random() * 100}%`,
                                                    top: `${Math.random() * 100}%`,
                                                    animationDelay: `${i * 0.3}s`,
                                                    animationDuration: `${3 + Math.random() * 3}s`
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                </div>
                            </div>
                        ))}

                        {/* End Card - CTA */}
                        <div className="flex-shrink-0 w-[450px] h-[600px] flex items-center justify-center">
                            <div className="glass-effect rounded-3xl p-12 border border-blue-500/20 text-center hover:border-blue-500/40 transition-all duration-500">
                                <FaShieldAlt className="text-6xl text-blue-500 mb-6 mx-auto animate-pulse" />
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    Ready to Secure Your Business?
                                </h3>
                                <p className="text-gray-400 mb-8 text-lg">
                                    Explore all our services and find the perfect security solution for your needs.
                                </p>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50"
                                >
                                    <FaShieldAlt className="text-2xl" />
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Types Section */}
            <section className="py-20 bg-cyber-darker relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Who We <span className="text-blue-400">Work With</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Trusted by organizations of all sizes across diverse industries
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {clientTypes.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, rotateY: -20 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{
                                    y: -15,
                                    rotateY: 8,
                                    boxShadow: "0 30px 60px rgba(37, 99, 235, 0.3)"
                                }}
                                className="card-hover bg-cyber-dark rounded-3xl p-10 text-center relative overflow-hidden"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${client.color} opacity-0 hover:opacity-8 transition-opacity duration-700`}
                                />

                                <motion.div
                                    className="text-6xl text-blue-500 mb-8 flex justify-center"
                                    whileHover={{ scale: 1.3, rotate: 360 }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {client.icon}
                                </motion.div>
                                <motion.div
                                    className={`text-4xl font-bold bg-gradient-to-r ${client.color} bg-clip-text text-transparent mb-3`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.12, type: "spring", bounce: 0.4 }}
                                >
                                    {client.count}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-5">{client.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-base">{client.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Testimonials Section with Carousel */}
            <section className="py-20 bg-cyber-dark relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            What Our <span className="text-blue-400">Clients Say</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Real feedback from organizations we've helped secure
                        </p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        <motion.div
                            key={activeTestimonial}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="glass-effect rounded-2xl p-12 border border-blue-500/20 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <FaQuoteLeft className="text-4xl text-blue-500 mb-6 mx-auto" />
                            </motion.div>

                            <motion.blockquote
                                className="text-xl text-gray-300 leading-relaxed mb-8 italic"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                "{testimonials[activeTestimonial].quote}"
                            </motion.blockquote>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex items-center justify-center space-x-4"
                            >
                                <div className="text-4xl">{testimonials[activeTestimonial].avatar}</div>
                                <div className="text-left">
                                    <div className="text-white font-semibold text-lg">{testimonials[activeTestimonial].author}</div>
                                    <div className="text-blue-400 font-medium">{testimonials[activeTestimonial].role}</div>
                                    <div className="text-gray-400 text-sm">{testimonials[activeTestimonial].company}</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex justify-center space-x-1 mt-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                                    >
                                        <FaStar className="text-yellow-400" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Testimonial Navigation */}
                        <div className="flex justify-center space-x-3 mt-8">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Highlights Section with Horizontal Scroll */}
            <section ref={pricingScrollRef} className="relative h-screen overflow-hidden bg-cyber-darker">
                <div className="sticky top-0 h-screen flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 px-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            <span className="text-blue-400">Custom Pricing</span> for Real Security
                        </h2>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-4">
                            Scroll horizontally to discover our flexible pricing approach
                        </p>
                        <div className="flex items-center justify-center gap-2 text-blue-400 mb-6">
                            <FaArrowRight className="animate-pulse" />
                            <span className="text-sm font-semibold">Scroll to explore</span>
                        </div>
                        <motion.div
                            className="glass-effect rounded-2xl p-6 border border-blue-500/20 inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-lg font-semibold text-blue-400">Our focus is quality and accuracy, not volume.</p>
                        </motion.div>
                    </motion.div>

                    <div ref={pricingContainerRef} className="flex gap-8 px-8 will-change-transform">
                        {pricingHighlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[400px] h-[500px] group"
                            >
                                <div className="relative h-full rounded-3xl overflow-hidden transform-gpu transition-all duration-700 hover:scale-110 hover:rotate-2">
                                    {/* Glassmorphism Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark/90 via-cyber-darker/80 to-cyber-dark/90 backdrop-blur-xl border border-white/10" />

                                    {/* Animated Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-700" />

                                    {/* Glowing Border Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700" />

                                    {/* Content */}
                                    <div className="relative h-full p-10 flex flex-col items-center justify-center text-center z-10">
                                        {/* Icon with 3D Effect */}
                                        <div className="mb-8 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">
                                            <div className="text-7xl text-blue-500 filter drop-shadow-2xl">
                                                {highlight.icon}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-500">
                                            {highlight.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed text-base group-hover:text-white transition-colors duration-500">
                                            {highlight.description}
                                        </p>

                                        {/* Decorative Elements */}
                                        <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-700" />
                                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-all duration-700" />
                                    </div>

                                    {/* Floating Particles */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float"
                                                style={{
                                                    left: `${20 + Math.random() * 60}%`,
                                                    top: `${20 + Math.random() * 60}%`,
                                                    animationDelay: `${i * 0.7}s`,
                                                    animationDuration: `${4 + Math.random() * 2}s`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* End Card - CTA */}
                        <div className="flex-shrink-0 w-[400px] h-[500px] flex items-center justify-center">
                            <div className="glass-effect rounded-3xl p-10 border border-blue-500/20 text-center hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col justify-center">
                                <FaArrowRight className="text-6xl text-blue-500 mb-6 mx-auto animate-pulse" />
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    Get Custom Quote
                                </h3>
                                <p className="text-gray-400 mb-8 text-base">
                                    Every engagement is tailored to your specific needs and security requirements.
                                </p>
                                <Link
                                    to="/pricing"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50"
                                >
                                    <FaArrowRight />
                                    View Pricing Models
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section with Timeline */}
            <section className="py-20 bg-cyber-dark relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Our <span className="text-blue-400">Proven Process</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A systematic approach to identifying and mitigating security risks
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block"></div>

                        <div className="space-y-12">
                            {[
                                {
                                    step: '01',
                                    title: 'Discovery & Scoping',
                                    desc: 'We understand your environment, objectives, and compliance requirements to create a custom engagement scope.',
                                    icon: <FaSearch />,
                                    side: 'left'
                                },
                                {
                                    step: '02',
                                    title: 'Manual Testing',
                                    desc: 'Our experts conduct thorough manual testing using advanced techniques to simulate real-world attacks.',
                                    icon: <FaBug />,
                                    side: 'right'
                                },
                                {
                                    step: '03',
                                    title: 'Detailed Reporting',
                                    desc: 'Comprehensive documentation with validated findings, impact analysis, and actionable remediation guidance.',
                                    icon: <FaCheckCircle />,
                                    side: 'left'
                                },
                                {
                                    step: '04',
                                    title: 'Ongoing Support',
                                    desc: 'Continuous guidance, retest validation, and support to ensure your security posture remains strong.',
                                    icon: <FaUsers />,
                                    side: 'right'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className={`flex items-center ${item.side === 'right' ? 'lg:flex-row-reverse' : ''} lg:justify-center`}
                                >
                                    <div className={`lg:w-5/12 ${item.side === 'right' ? 'lg:text-right lg:pr-8' : 'lg:pl-8'}`}>
                                        <motion.div
                                            className="bg-cyber-darker rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                                            whileHover={{ scale: 1.02, y: -5 }}
                                        >
                                            <div className="flex items-center space-x-4 mb-4">
                                                <motion.div
                                                    className="text-4xl text-blue-500"
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    {item.icon}
                                                </motion.div>
                                                <div className="text-3xl font-bold gradient-text">{item.step}</div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    </div>

                                    {/* Timeline Node */}
                                    <motion.div
                                        className="hidden lg:flex w-6 h-6 bg-blue-500 rounded-full border-4 border-cyber-dark z-10 mx-4"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                        whileHover={{ scale: 1.5 }}
                                    />

                                    <div className="lg:w-5/12"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us - Who We Are Section */}
            <section className="py-20 bg-cyber-dark relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            About <span className="text-blue-400">HexaSentra</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Cybersecurity & Penetration Testing Company
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Who <span className="text-blue-400">We Are</span>
                            </h3>
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
                            initial={{ opacity: 0, x: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Team Collaboration Image */}
                            <motion.div
                                className="rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-2xl shadow-blue-500/20"
                                whileHover={{ scale: 1.05, borderColor: "rgba(37, 99, 235, 0.4)" }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src="/images/team-collaboration.png"
                                    alt="Team Collaboration"
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:hidden"
                        >
                            <div className="glass-effect rounded-2xl p-8 border border-blue-500/20">
                                <h4 className="text-2xl font-bold text-white mb-6">We Bring:</h4>
                                <div className="space-y-6">
                                    {[
                                        { icon: <FaBug />, title: 'Attacker mindset', desc: 'We think like attackers to identify real-world vulnerabilities and attack paths.' },
                                        { icon: <FaEye />, title: 'Manual testing expertise', desc: 'Deep expertise in manual security testing that goes beyond automated scanning.' },
                                        { icon: <FaUsers />, title: 'Clear technical communication', desc: 'We explain complex security issues in clear, actionable terms for technical and business teams.' },
                                        { icon: <FaShieldAlt />, title: 'Professional engagement handling', desc: 'Confidential, responsible, and professional approach to every security engagement.' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="text-2xl text-blue-500 mt-1">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h5 className="text-lg font-semibold text-white mb-2">{item.title}</h5>
                                                <p className="text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Pricing Section */}
            <section className="py-20 bg-cyber-darker relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Pricing Models</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                            Every system is different. Every attack surface is different. That's why HexaSentra does custom-scoped security engagements instead of one-size-fits-all pricing.
                        </p>
                        <div className="glass-effect rounded-2xl p-8 border border-blue-500/20 inline-block">
                            <p className="text-xl font-semibold text-blue-400">Our focus is quality and accuracy, not volume.</p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { icon: <FaSearch />, title: 'Scope and complexity', desc: 'The breadth and depth of systems to be tested' },
                            { icon: <FaServer />, title: 'Type of systems involved', desc: 'Web apps, mobile apps, infrastructure, or cloud environments' },
                            { icon: <FaLock />, title: 'Depth of manual testing required', desc: 'Level of manual verification and custom attack scenarios' },
                            { icon: <FaClock />, title: 'Engagement duration', desc: 'Timeline requirements and project complexity' }
                        ].map((factor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-dark rounded-2xl p-8 text-center"
                            >
                                <div className="text-5xl text-blue-500 mb-6 flex justify-center">
                                    {factor.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{factor.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{factor.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Portfolio Section */}
            <section className="py-20 bg-cyber-dark relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            Client <span className="text-blue-400">Success Stories</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                            We work with diverse organizations, each with unique security challenges
                        </p>
                        <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 inline-block">
                            <p className="text-lg font-semibold text-blue-400">
                                Client names and details are kept confidential unless explicitly approved
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { icon: <FaLock />, title: 'Strict Confidentiality', desc: 'All client information is kept strictly confidential with comprehensive NDAs and security protocols.' },
                            { icon: <FaUserSecret />, title: 'Professional Discretion', desc: 'Our team maintains the highest standards of professional discretion in all engagements.' },
                            { icon: <FaShieldAlt />, title: 'Secure Handling', desc: 'Client data and findings are handled with enterprise-grade security measures and access controls.' },
                            { icon: <FaEye />, title: 'Transparent Process', desc: 'While maintaining confidentiality, we provide full transparency in our testing methodologies and findings.' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card-hover bg-cyber-darker rounded-2xl p-8 text-center"
                            >
                                <div className="text-4xl text-blue-500 mb-6 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-20 bg-cyber-darker relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Talk to Real <span className="text-blue-400">Security Professionals</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Ready to secure your organization? Get in touch with our expert team.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <FaEnvelope />, title: 'Email', value: 'security@hexasentra.com', link: 'mailto:security@hexasentra.com' },
                            { icon: <FaPhone />, title: 'Phone', value: '+91 9421939661', link: 'tel:+919421939661' },
                            { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Pune, Maharashtra, India', link: '#' }
                        ].map((contact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="card-hover bg-cyber-dark rounded-2xl p-8 text-center"
                            >
                                <motion.div
                                    className="text-5xl text-blue-500 mb-6 flex justify-center"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {contact.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-4">{contact.title}</h3>
                                {contact.link !== '#' ? (
                                    <a
                                        href={contact.link}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-lg"
                                    >
                                        {contact.value}
                                    </a>
                                ) : (
                                    <span className="text-gray-400 text-lg">{contact.value}</span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-cyber-dark relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-effect rounded-2xl p-12 border border-blue-500/20 relative overflow-hidden"
                    >
                        {/* Animated Background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        />

                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Ready to <span className="text-blue-400">Secure</span> Your Organization?
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Don't wait for a security breach to discover your vulnerabilities.
                            Get a custom-scoped security assessment from HexaSentra's expert team today.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="magnetic-button glow-button inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50"
                                >
                                    <FaCheckCircle />
                                    Get Security Assessment
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contact"
                                    className="magnetic-button inline-flex items-center gap-3 px-10 py-4 border-2 border-blue-500 hover:border-cyan-500 hover:bg-blue-500/10 rounded-full text-blue-500 hover:text-cyan-500 font-bold text-lg transition-all duration-300"
                                >
                                    <FaPhone />
                                    Talk to a Security Expert
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;