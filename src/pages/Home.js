import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
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

    // Refs for magnetic buttons
    const btn1Ref = useRef(null);
    const btn2Ref = useRef(null);

    // Magnetic Button Effect Logic
    useEffect(() => {
        const handleMagnetic = (e, ref) => {
            if (!ref.current) return;
            const btn = ref.current;
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, {
                x: x * 0.35,
                y: y * 0.35,
                duration: 0.6,
                ease: "power2.out"
            });
        };

        const resetMagnetic = (ref) => {
            gsap.to(ref.current, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
        };

        const b1 = btn1Ref.current;
        const b2 = btn2Ref.current;

        const onMove1 = (e) => handleMagnetic(e, btn1Ref);
        const onLeave1 = () => resetMagnetic(btn1Ref);
        const onMove2 = (e) => handleMagnetic(e, btn2Ref);
        const onLeave2 = () => resetMagnetic(btn2Ref);

        if (b1) {
            b1.addEventListener('mousemove', onMove1);
            b1.addEventListener('mouseleave', onLeave1);
        }
        if (b2) {
            b2.addEventListener('mousemove', onMove2);
            b2.addEventListener('mouseleave', onLeave2);
        }

        return () => {
            if (b1) {
                b1.removeEventListener('mousemove', onMove1);
                b1.removeEventListener('mouseleave', onLeave1);
            }
            if (b2) {
                b2.removeEventListener('mousemove', onMove2);
                b2.removeEventListener('mouseleave', onLeave2);
            }
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
            company: "Confidential Client",
            avatar: "🚀"
        },
        {
            quote: "The clarity of their reports and actionable recommendations helped us fix real security issues quickly. No noise, just valuable insights.",
            company: "Confidential Client",
            avatar: "💻"
        },
        {
            quote: "Working with HexaSentra feels like having experienced security professionals as part of our team. They understand our business context.",
            company: "Confidential Client",
            avatar: "🏥"
        }
    ];

    const clientTypes = [
        {
            icon: <FaRocket />,
            title: 'Startups',
            description: 'Fast-moving companies building security into their growth strategy',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <FaCode />,
            title: 'SaaS Companies',
            description: 'Software providers requiring continuous security validation',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <FaBuilding />,
            title: 'Enterprises',
            description: 'Large organizations with complex security requirements',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: <FaIndustry />,
            title: 'Tech Organizations',
            description: 'Technology-driven companies with core digital operations',
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

            {/* Hero Section with Cinematic Data Visuals */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#020617]">
                {/* Cinematic Background Layer */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("/images/hero-premium-bg.png")' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/60 to-[#020617]" />
                    <div className="cyber-grid" />
                </div>

                {/* Animated Light Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-[15%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            x: [0, -120, 0],
                            y: [0, 80, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px]"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
                    <div className="flex flex-col items-center">


                        {/* Main Cinematic Heading */}
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-10 tracking-tighter text-white">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="block leading-[0.9]"
                            >
                                BREAK WHAT
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="block leading-[0.9] text-shimmer"
                            >
                                MATTERS.
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="block mt-6 text-2xl md:text-4xl font-light tracking-[0.2em] text-blue-400 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                            >
                                SECURE WHAT COUNTS.
                            </motion.span>
                        </h1>

                        {/* High-Fidelity Description Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="max-w-3xl mb-16 space-y-6"
                        >
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                                Built by experienced security researchers with deep expertise in manual penetration testing.
                                We don't just find bugs; we simulate real-world devastation to ensure absolute resilience.
                            </p>

                            <div className="flex justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-premier py-3 px-8 rounded-2xl border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                                >
                                    <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Security Built by Practitioners</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Impact CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                        >
                            <Link
                                ref={btn1Ref}
                                to="/contact"
                                className="magnetic-button group relative px-10 py-5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full text-white font-bold text-lg overflow-hidden flex items-center gap-3 shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_50px_rgba(37,99,235,0.5)] transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <FaShieldAlt className="text-xl group-hover:rotate-12 transition-transform" />
                                    Get a Free Scope Call
                                </span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 shimmer-btn" />
                            </Link>

                            <Link
                                ref={btn2Ref}
                                to="/contact"
                                className="magnetic-button group px-10 py-5 glass-premier rounded-full text-white font-bold text-lg flex items-center gap-3 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <FaPhone className="text-xl group-hover:-rotate-12 transition-transform text-blue-400" />
                                Talk to a Security Expert
                            </Link>
                        </motion.div>

                        {/* Social Proof - Enhanced */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            className="flex flex-wrap justify-center gap-x-12 gap-y-6"
                        >
                            {trustedBy.map((company, index) => (
                                <span
                                    key={index}
                                    className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-white transition-colors cursor-default"
                                >
                                    {company}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Dynamic Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] items-center gap-2 text-blue-500/50 font-bold tracking-[0.4em] uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
                </motion.div>
            </section>
            {/* Introduction Section with Premium Refinements */}
            <section className="pt-32 pb-4 bg-[#020617] relative overflow-hidden z-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 cyber-grid opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-8"
                        >
                            The New Standard of Security
                        </motion.div>
                        <motion.h2
                            className="text-4xl md:text-6xl font-black mb-10 text-white tracking-tighter"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            Modern businesses move fast. <br />
                            <span className="text-shimmer drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">Security issues today are rarely basic.</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Vulnerabilities now hide in <span className="text-white font-medium">logic</span>, <span className="text-white font-medium">access control</span>, and <span className="text-white font-medium">design decisions</span>.
                            We help you uncover the invisible before it becomes impossible.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">Our Core Philosophy:</h3>
                            <div className="space-y-10">
                                {[
                                    { icon: <FaUsers className="text-emerald-400" />, title: "Human Intelligence First", desc: "Complex vulnerabilities require manual expertise that scanners simply cannot replicate." },
                                    { icon: <FaBug className="text-blue-400" />, title: "Real Attack Simulation", desc: "We think like adversaries to test your defenses against real-world devastation." },
                                    { icon: <FaCheckCircle className="text-indigo-400" />, title: "Actionable Resilience", desc: "We provide clear, strategic roadmaps to not just fix, but eliminate risks forever." }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-6 group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <div className="w-14 h-14 rounded-2xl glass-premier flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-black/20">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors uppercase text-sm">{item.title}</h4>
                                            <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
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
                                    className="mb-8"
                                >
                                    <FaShieldAlt className="text-6xl text-blue-500 mb-6 mx-auto" />
                                </motion.div>

                                <div className="mb-10">
                                    <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Security is our full-time discipline</h3>
                                    <p className="text-xl text-gray-300 leading-relaxed mb-4">
                                        From research to real-world exploitation.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        We don't just identify vulnerabilities—we understand the complete attack chain, from initial reconnaissance to full system compromise.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-6">That is exactly how we work.</h3>
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
                    </div>
                </div>
            </section>



            {/* Services Section with Horizontal Scroll */}
            <section ref={servicesScrollRef} className="relative h-screen overflow-hidden bg-[#020617] py-0 z-30">
                <div className="sticky top-0 h-screen flex flex-col justify-center bg-[#020617] z-30 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-10 px-4 relative z-40"
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tighter">
                            Our <span className="text-blue-500">Security Services</span>
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-3">
                            Scroll horizontally to explore our comprehensive cybersecurity solutions
                        </p>
                        <div className="flex items-center justify-center gap-2 text-blue-500/60">
                            <FaArrowRight className="animate-pulse text-xs" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Scroll to explore</span>
                        </div>
                    </motion.div>

                    <div ref={servicesContainerRef} className="flex gap-6 md:gap-8 px-6 md:px-10 will-change-transform pb-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] h-[420px] md:w-[400px] md:h-[520px] group perspective-1000"
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
                                    <div className="relative h-full p-10 flex flex-col justify-between z-10">
                                        <div>
                                            {/* Icon with Enhanced 3D Effect */}
                                            <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out">
                                                <div className={`text-6xl bg-gradient-to-br ${service.color} bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]`}>
                                                    {service.icon}
                                                </div>
                                            </div>

                                            {/* Title with Better Typography */}
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-all duration-700 leading-tight tracking-tight">
                                                {service.title}
                                            </h3>

                                            {/* Description with Better Readability */}
                                            <p className="text-sm text-gray-400 group-hover:text-gray-200 leading-relaxed mb-6 transition-all duration-700 line-clamp-4">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Features List */}
                                        <div>
                                            <ul className="space-y-3 mb-8">
                                                {service.features.map((feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center space-x-3 text-[13px] text-gray-500 group-hover:text-gray-300 transition-all duration-500"
                                                    >
                                                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all`}>
                                                            <FaCheckCircle className="text-white text-[10px]" />
                                                        </div>
                                                        <span className="font-medium">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Enhanced CTA Button */}
                                            <Link
                                                to="/services"
                                                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} rounded-full text-white text-xs font-bold transition-all duration-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group/link relative overflow-hidden uppercase tracking-widest`}
                                            >
                                                <span className="relative z-10">View Details</span>
                                                <FaArrowRight className="text-[10px] group-hover/link:translate-x-1 transition-transform duration-500 relative z-10" />
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
            </section >

            {/* Client Types Section */}
            < section className="py-20 bg-cyber-darker relative overflow-hidden" >
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

                                <h3 className="text-2xl font-bold text-white mb-5">{client.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-base">{client.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >
            {/* Testimonials Section with Carousel */}
            < section className="py-20 bg-cyber-dark relative overflow-hidden" >
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
                                    <div className="text-gray-400 text-sm">{testimonials[activeTestimonial].company}</div>
                                </div>
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
            </section >

            {/* Pricing Highlights Section with Horizontal Scroll - REDESIGNED */}
            <section ref={pricingScrollRef} className="relative h-screen overflow-hidden bg-[#020617] py-0 z-20">
                <div className="sticky top-0 h-screen flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-10 px-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-tighter">
                            <span className="text-blue-500">Custom Pricing</span> Models
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-3">
                            Tailored security engagements focused on quality and precision
                        </p>
                        <div className="flex items-center justify-center gap-2 text-blue-500/60 mb-6">
                            <FaArrowRight className="animate-pulse text-xs" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Scroll to explore</span>
                        </div>
                    </motion.div>

                    <div ref={pricingContainerRef} className="flex gap-6 md:gap-8 px-6 md:px-10 will-change-transform pb-10">
                        {pricingHighlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] h-[400px] md:w-[380px] md:h-[480px] group perspective-1000"
                            >
                                <div className="relative h-full rounded-[2rem] overflow-hidden transform-gpu transition-all duration-1000 hover:scale-[1.05] hover:rotate-1 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker/95 via-cyber-dark/85 to-cyber-darker/95 backdrop-blur-2xl" />
                                    <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-1000`} />
                                    <div className="absolute inset-0 rounded-[2rem] border border-white/5 group-hover:border-blue-500/30 transition-all duration-700" />

                                    <div className="relative h-full p-6 md:p-10 flex flex-col items-center justify-center text-center z-10">
                                        <div className="mb-4 md:mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700">
                                            <div className="text-4xl md:text-6xl text-blue-500 filter drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                                {highlight.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 group-hover:text-blue-400 transition-colors duration-700 leading-tight">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-[10px] md:text-sm text-gray-400 group-hover:text-gray-200 leading-relaxed mb-4 md:mb-6 transition-colors duration-700">
                                            {highlight.description}
                                        </p>

                                        {/* Decorative Micro-details */}
                                        <div className="absolute top-4 right-4 w-4 h-[1px] bg-blue-500/20" />
                                        <div className="absolute top-4 right-4 h-4 w-[1px] bg-blue-500/20" />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* End Card - CTA - Redesigned */}
                        <div className="flex-shrink-0 w-[240px] h-[360px] md:w-[380px] md:h-[480px] flex items-center justify-center">
                            <div className="glass-premier rounded-[2rem] p-6 md:p-10 border border-blue-500/20 text-center hover:border-blue-500/40 transition-all duration-700 h-full flex flex-col justify-center items-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <FaArrowRight className="text-3xl md:text-5xl text-blue-500 mb-4 md:mb-6 group-hover:translate-x-3 transition-transform duration-500" />
                                <h3 className="text-lg md:text-2xl font-black text-white mb-3 md:mb-4 tracking-tighter uppercase">
                                    Get Custom Quote
                                </h3>
                                <p className="text-[8px] md:text-xs text-gray-400 mb-6 md:mb-8 tracking-widest leading-relaxed uppercase">
                                    Tailored specifically for you
                                </p>
                                <Link
                                    to="/pricing"
                                    className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white text-[8px] md:text-xs font-black transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] uppercase tracking-widest relative z-10"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section with Timeline - REDESIGNED */}
            <section className="py-24 bg-[#020617] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            className="h-[2px] bg-blue-500 mx-auto mb-4"
                        />
                        <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-widest uppercase">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Process</span>
                        </h2>
                        <p className="text-gray-400 text-xs tracking-[0.3em] font-bold uppercase">Systematic Security Excellence</p>
                    </motion.div>

                    <div className="relative">
                        {/* Center Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 hidden lg:block" />

                        <div className="space-y-16">
                            {[
                                {
                                    step: '01',
                                    title: 'Scoping',
                                    desc: 'Environment analysis and compliance mapping.',
                                    icon: <FaSearch />,
                                    side: 'left'
                                },
                                {
                                    step: '02',
                                    title: 'Testing',
                                    desc: 'Deep manual exploitation and vulnerability research.',
                                    icon: <FaBug />,
                                    side: 'right'
                                },
                                {
                                    step: '03',
                                    title: 'Reporting',
                                    desc: 'Actionable remediation guidance and impact analysis.',
                                    icon: <FaCheckCircle />,
                                    side: 'left'
                                },
                                {
                                    step: '04',
                                    title: 'Support',
                                    desc: 'Continuous guidance and retest validation.',
                                    icon: <FaUsers />,
                                    side: 'right'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: item.side === 'left' ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className={`flex items-center ${item.side === 'right' ? 'lg:flex-row-reverse' : ''} lg:justify-center relative group`}
                                >
                                    <div className={`lg:w-5/12 ${item.side === 'right' ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                                        <div className="relative group">
                                            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative glass-premier rounded-2xl p-6 md:p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                                                <div className={`flex items-center gap-4 mb-4 ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                                                    <div className="text-3xl text-blue-500 group-hover:scale-110 transition-transform">
                                                        {item.icon}
                                                    </div>
                                                    <div className="text-2xl font-black gradient-text opacity-50">{item.step}</div>
                                                </div>
                                                <h3 className="text-lg font-black text-white mb-2 tracking-widest uppercase">{item.title}</h3>
                                                <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-wider">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Central Node */}
                                    <div className="hidden lg:flex w-4 h-4 rounded-full bg-blue-500 border-[3px] border-[#020617] z-10 mx-6 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] transition-all duration-500" />

                                    <div className="lg:w-5/12" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us - REDESIGNED */}
            <section className="py-24 bg-[#020617] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            className="h-[2px] bg-blue-500 mx-auto mb-4"
                        />
                        <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-widest uppercase">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Story</span>
                        </h2>
                        <p className="text-gray-400 text-xs tracking-[0.3em] font-bold uppercase">Built by Researchers</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest leading-tight">
                                Expert <span className="text-blue-500">Pedigree</span>
                            </h3>
                            <div className="space-y-6">
                                <p className="text-sm text-gray-400 leading-relaxed uppercase tracking-wider">
                                    Our team consists of researchers from elite platforms like HackerOne and Bugcrowd, bringing decades of combined manual exploitation experience.
                                </p>
                                <div className="glass-premier rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-lg font-black text-blue-400 italic leading-tight text-center relative z-10 uppercase tracking-tighter">
                                        "Security is our pulse, not a protocol."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-3xl group-hover:bg-blue-500/20 transition-all duration-1000" />
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="/images/team-collaboration.png"
                                    alt="Research Lab"
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Pricing Section - REDESIGNED */}
            <section className="py-24 bg-[#020617] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            className="h-[2px] bg-blue-500 mx-auto mb-4"
                        />
                        <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-widest uppercase">
                            Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Models</span>
                        </h2>
                        <p className="text-gray-400 text-sm tracking-[0.2em] font-light max-w-2xl mx-auto mb-10 leading-relaxed uppercase">
                            Custom-scoped engagements tailored to your attack surface
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
                        {[
                            { icon: <FaSearch />, title: 'Scoping', desc: 'Breadth of systems to be thoroughly tested' },
                            { icon: <FaServer />, title: 'Environment', desc: 'Infrastructures, Cloud, or App surfaces' },
                            { icon: <FaLock />, title: 'Depth', desc: 'Manual verification & custom attack logic' },
                            { icon: <FaClock />, title: 'Timeline', desc: 'Engagement duration & urgency level' }
                        ].map((factor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl md:rounded-3xl blur-sm opacity-50 transition-opacity" />
                                <div className="relative h-full text-center glass-premier rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                                    <div className="text-4xl text-blue-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
                                        {factor.icon}
                                    </div>
                                    <h3 className="text-sm md:text-lg font-bold text-white mb-2 md:mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-widest leading-tight">{factor.title}</h3>
                                    <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed opacity-80">{factor.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Portfolio Section - REDESIGNED */}
            <section className="py-24 bg-[#020617] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            className="h-[2px] bg-blue-500 mx-auto mb-4"
                        />
                        <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-widest uppercase">
                            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Guaranteed</span>
                        </h2>
                        <p className="text-gray-400 text-[10px] md:text-sm tracking-[0.2em] font-light max-w-2xl mx-auto mb-10 leading-relaxed uppercase">
                            Enterprise-grade confidentiality & professional research
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
                        {[
                            { icon: <FaLock />, title: 'Deep NDA', desc: 'Comprehensive legal frameworks for data.' },
                            { icon: <FaUserSecret />, title: 'Discretion', desc: 'Highest standards of professional privacy.' },
                            { icon: <FaShieldAlt />, title: 'Handling', desc: 'Enterprise-grade findings protection.' },
                            { icon: <FaEye />, title: 'Transparency', desc: 'Methodical visibility in all testing.' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl md:rounded-3xl blur-sm opacity-50 transition-opacity" />
                                <div className="relative h-full text-center glass-premier rounded-2xl md:rounded-3xl p-5 md:p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                                    <div className="text-3xl text-blue-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-[10px] md:text-sm font-black text-white mb-2 md:mb-3 tracking-widest uppercase">{feature.title}</h3>
                                    <p className="text-[8px] md:text-[10px] text-gray-400 leading-relaxed uppercase tracking-wider">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information Section - REDESIGNED */}
            <section className="py-24 bg-[#020617] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            className="h-[2px] bg-blue-500 mx-auto mb-4"
                        />
                        <h2 className="text-3xl md:text-5xl font-black mb-4 text-white tracking-widest uppercase">
                            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Experts</span>
                        </h2>
                        <p className="text-gray-400 text-xs tracking-[0.3em] font-bold uppercase">Ready to secure your future</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { icon: <FaEnvelope />, title: 'Email', value: 'contact@hexasentra.com', link: 'mailto:contact@hexasentra.com' },

                            { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Pune, Maharashtra', link: '#' }
                        ].map((contact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-[2rem] blur-sm opacity-50 transition-opacity" />
                                <div className="relative h-full text-center glass-premier rounded-[2rem] p-10 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                                    <motion.div
                                        className="text-5xl text-blue-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500"
                                    >
                                        {contact.icon}
                                    </motion.div>
                                    <h3 className="text-sm font-black text-white mb-2 tracking-widest uppercase">{contact.title}</h3>
                                    {contact.link !== '#' ? (
                                        <a
                                            href={contact.link}
                                            className="text-blue-400 hover:text-white transition-colors duration-300 text-[10px] md:text-sm font-medium tracking-wide break-all"
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="text-gray-400 text-[10px] md:text-sm font-medium tracking-wide">{contact.value}</span>
                                    )}
                                </div>
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
                                    Get a Free Scope Call
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