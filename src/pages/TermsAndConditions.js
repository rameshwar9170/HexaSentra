import React, { useEffect } from 'react';
import { FaShieldAlt, FaScroll } from 'react-icons/fa';

const TermsAndConditions = () => {
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
                                <FaScroll className="text-5xl text-cyber-blue" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Terms of Service</span>
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
                            These Terms of Service govern the use of the HexaSentra Security website and services.
                        </p>

                        {/* Section 1 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">1</span>
                                Scope of Services
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>HexaSentra Security provides professional cybersecurity services, including but not limited to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Penetration testing</li>
                                    <li>Security assessments</li>
                                    <li>Red team engagements</li>
                                    <li>Secure code reviews</li>
                                    <li>On-call security consulting</li>
                                    <li>Mobile application security testing</li>
                                </ul>
                                <p className="font-semibold text-white">All services are manual, human-led, and scope-based.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 2 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">2</span>
                                Authorization & Legal Use
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>We perform security testing only on systems that:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Are owned by the client, or</li>
                                    <li>The client is explicitly authorized to test</li>
                                </ul>
                                <p className="font-semibold text-white">Written scope and authorization approval is mandatory before any testing begins.</p>
                                <p className="text-red-400 font-semibold">Unauthorized testing is strictly prohibited.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 3 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">3</span>
                                Client Responsibilities
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>Clients agree to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide accurate scope and authorization details</li>
                                    <li>Obtain internal approvals before testing</li>
                                    <li>Inform us of sensitive or critical systems</li>
                                    <li>Cooperate during the engagement lifecycle</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 4 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">4</span>
                                Professional Nature of Services
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>Security testing:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Identifies risks present at the time of assessment</li>
                                    <li>Does not guarantee identification of all vulnerabilities</li>
                                    <li>Does not guarantee prevention of future security incidents</li>
                                </ul>
                                <p className="font-semibold text-white">Security is a continuous process.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 5 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">5</span>
                                Reports & Deliverables
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Reports are provided for internal security improvement</li>
                                    <li>Findings reflect conditions observed within the approved scope</li>
                                    <li>Reports must not be altered, misrepresented, or redistributed without written permission</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 6 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">6</span>
                                Confidentiality
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>Both parties agree to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Maintain confidentiality of engagement information</li>
                                    <li>Protect sensitive technical and business data</li>
                                    <li>Use shared information only for security purposes</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 7 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">7</span>
                                Limitation of Liability
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>To the maximum extent permitted by law:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>HexaSentra Security is not liable for indirect or consequential damages</li>
                                    <li>Clients are responsible for remediation decisions</li>
                                    <li>Services are provided in good faith and professional manner</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 8 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">8</span>
                                Engagement & Payment
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Pricing is engagement-specific and custom-scoped</li>
                                    <li>Scope, timeline, and terms are agreed before work begins</li>
                                    <li>Payment terms are defined per engagement</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 9 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">9</span>
                                Termination
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>Either party may terminate an engagement if:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Authorization is withdrawn</li>
                                    <li>Scope violations occur</li>
                                    <li>Legal or ethical concerns arise</li>
                                </ul>
                                <p className="font-semibold text-white">Completed work remains payable.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 10 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">10</span>
                                Governing Law
                            </h2>
                            <div className="ml-13 text-gray-300 space-y-4">
                                <p>These terms are governed by the laws of India.</p>
                                <p><span className="font-semibold text-white">Jurisdiction:</span> Pune, Maharashtra.</p>
                            </div>
                        </div>

                        <div className="border-t border-cyber-blue/20 my-8"></div>

                        {/* Section 11 */}
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                                <span className="w-10 h-10 bg-cyber-blue/20 rounded-lg flex items-center justify-center mr-3 text-cyber-blue">11</span>
                                Contact
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
                            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
