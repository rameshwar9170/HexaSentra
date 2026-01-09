import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUser } from 'react-icons/fa';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
            // Redirect to admin dashboard on successful login
            navigate('/admin/dashboard');
        } catch (err) {
            console.error('Login error:', err);
            setError('Invalid email or password. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-20 bg-cyber-darker flex items-center justify-center">
            <div className="max-w-md w-full mx-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-effect rounded-2xl p-8 border border-blue-500/20"
                >
                    {/* Logo and Title */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <FaShieldAlt className="text-5xl text-blue-500" />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
                        <p className="text-gray-400">HexaSentra Security Portal</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg"
                        >
                            <p className="text-red-400 text-sm">{error}</p>
                        </motion.div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white font-semibold mb-2">
                                <FaUser className="inline mr-2" />
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                placeholder="admin@hexasentra.com"
                            />
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-2">
                                <FaLock className="inline mr-2" />
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-cyber-darker border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-500/50 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <FaLock />
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Security Notice */}
                    <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <p className="text-blue-400 text-xs text-center">
                            🔒 Secure admin access only. All login attempts are logged.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminLogin;
