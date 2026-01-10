import React, { useEffect } from 'react';
import { FaShieldAlt, FaLock } from 'react-icons/fa';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-cyber-darker pt-20">
            {/* Header Section */}
            <section className="relative overflow-hidden py-20 border-b border-cyber-blue/20">
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/5 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-cyber-blue/10 rounded-full border border-cyber-blue/30">
                                <FaLock className="text-5xl text-cyber-blue" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Privacy Policy</span>
                        </h1>
                        <div className="flex items-center justify-center space-x-3 text-gray-400">
                            <FaShieldAlt className="text-cyber-blue" />
                            <span className="text-lg">HexaSentra Security</span>
                        </div>
                        <p className="text-gray-400 mt-4">Last updated: 2026</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl p-8 md:p-12 shadow-xl">
                        <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                            HexaSentra Security ("we", "our", "us") is a cybersecurity and penetration testing company providing manual, human-led security services. We are committed to respecting privacy and protecting the confidentiality of information shared with us.
                        </p>
                        <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                            This Privacy Policy explains how we handle information when you interact with our website or engage our services.
                        </p>

                        {/* Section 1 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">1</span>
                                Information We Collect
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p className="font-semibold text-white">We collect only the information that you voluntarily provide to us.</p>
                                <p>This may include:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Full name</li>
                                    <li>Company or organization name</li>
                                    <li>Email address</li>
                                    <li>Phone number (if provided)</li>
                                    <li>Service requirements, scope details, or security-related information you choose to share</li>
                                </ul>
                                <p className="font-semibold text-white">We do not collect information automatically.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 2 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">2</span>
                                Information We Do Not Collect
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>HexaSentra Security does not:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Track IP addresses</li>
                                    <li>Collect browser or device information</li>
                                    <li>Use behavioral analytics</li>
                                    <li>Use advertising trackers</li>
                                    <li>Monitor user activity across websites</li>
                                </ul>
                                <p className="font-semibold text-white">Our website is informational and contact-driven only.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 3 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">3</span>
                                Purpose of Information Use
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>Information provided to us is used strictly to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Respond to inquiries and consultation requests</li>
                                    <li>Understand security requirements and scope engagements</li>
                                    <li>Communicate proposals, timelines, and deliverables</li>
                                    <li>Perform agreed cybersecurity and penetration testing services</li>
                                </ul>
                                <p className="font-semibold text-white">We do not use personal data for marketing, advertising, profiling, or resale.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 4 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">4</span>
                                Confidentiality & Data Protection
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p className="font-semibold text-white">Confidentiality is fundamental to our work.</p>
                                <p>We ensure that:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Information is accessed only by authorized team members</li>
                                    <li>Client data is handled strictly for agreed security purposes</li>
                                    <li>Engagement details and findings are treated as confidential</li>
                                    <li>Non-Disclosure Agreements (NDAs) are respected where applicable</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 5 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">5</span>
                                Data Retention
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>We retain information only for as long as necessary to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Communicate with clients</li>
                                    <li>Complete engagements</li>
                                    <li>Provide agreed post-engagement support</li>
                                </ul>
                                <p>Information may be securely deleted upon request unless retention is required by contractual or legal obligations.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 6 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">6</span>
                                Information Sharing
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p className="font-semibold text-white">We do not sell, rent, or share personal information.</p>
                                <p>Information may be disclosed only:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>With explicit client approval</li>
                                    <li>When required to deliver agreed services</li>
                                    <li>When required by applicable law</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 7 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">7</span>
                                International Clients
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>HexaSentra Security works with organizations globally. Information shared with us may be accessed by our team for service delivery, regardless of client location, while maintaining strict confidentiality and professional handling standards.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 8 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">8</span>
                                Your Rights
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>You may request:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Access to information you have shared</li>
                                    <li>Correction of inaccurate information</li>
                                    <li>Deletion of information, where applicable</li>
                                </ul>
                                <p>Requests can be sent to:</p>
                                <a href="mailto:security@hexasentra.com" className="text-cyber-blue hover:underline flex items-center space-x-2">
                                    <span>📧</span>
                                    <span>security@hexasentra.com</span>
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 9 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">9</span>
                                Updates to This Policy
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>We may update this Privacy Policy if our practices change. The latest version will always be published on this page.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 10 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">10</span>
                                Contact Information
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-3">
                                <div className="flex flex-col space-y-2">
                                    <a href="mailto:contact@hexasentra.com" className="text-cyber-blue hover:underline flex items-center space-x-2">
                                        <span>📧</span>
                                        <span>contact@hexasentra.com</span>
                                    </a>
                                    <a href="mailto:security@hexasentra.com" className="text-cyber-blue hover:underline flex items-center space-x-2">
                                        <span>📧</span>
                                        <span>security@hexasentra.com</span>
                                    </a>
                                    <p className="flex items-center space-x-2">
                                        <span>📍</span>
                                        <span>Pune, Maharashtra, India</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Notice */}
                    <div className="mt-8 p-6 bg-cyber-blue/10 border border-cyber-blue/30 rounded-xl">
                        <p className="text-gray-300 text-center">
                            By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
