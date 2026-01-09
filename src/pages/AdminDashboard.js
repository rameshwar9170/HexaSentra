import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaSignOutAlt, FaEnvelope, FaBuilding, FaClock, FaCheckCircle, FaExclamationTriangle, FaFilter } from 'react-icons/fa';
import { auth, database } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { ref, onValue, update } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // all, new, contacted, resolved
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is authenticated
        const unsubscribeAuth = auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate('/admin');
            }
        });

        // Fetch contact requests from Firebase
        const contactRequestsRef = ref(database, 'contactRequests');
        const unsubscribeData = onValue(contactRequestsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const requestsArray = Object.keys(data).map(key => ({
                    ...data[key],
                    id: key
                }));
                // Sort by timestamp (newest first)
                requestsArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                setRequests(requestsArray);
            } else {
                setRequests([]);
            }
            setLoading(false);
        });

        return () => {
            unsubscribeAuth();
            unsubscribeData();
        };
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/admin');
        } catch (err) {
            console.error('Logout error:', err);
        }
    };

    const updateRequestStatus = async (requestId, newStatus) => {
        try {
            const requestRef = ref(database, `contactRequests/${requestId}`);
            await update(requestRef, { status: newStatus });
        } catch (err) {
            console.error('Error updating status:', err);
        }
    };

    const filteredRequests = requests.filter(request => {
        if (filter === 'all') return true;
        return request.status === filter;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'new':
                return 'text-blue-400 bg-blue-500/10 border-blue-500/50';
            case 'contacted':
                return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/50';
            case 'resolved':
                return 'text-green-400 bg-green-500/10 border-green-500/50';
            default:
                return 'text-gray-400 bg-gray-500/10 border-gray-500/50';
        }
    };

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen pt-20 bg-cyber-darker">
            {/* Header */}
            <div className="bg-cyber-dark border-b border-blue-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <FaShieldAlt className="text-4xl text-blue-500" />
                            <div>
                                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                                <p className="text-gray-400">Contact Requests Management</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/20 transition-all duration-300"
                        >
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-effect rounded-xl p-6 border border-blue-500/20"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">Total Requests</p>
                                <p className="text-3xl font-bold text-white mt-1">{requests.length}</p>
                            </div>
                            <FaEnvelope className="text-4xl text-blue-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass-effect rounded-xl p-6 border border-blue-500/20"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">New</p>
                                <p className="text-3xl font-bold text-blue-400 mt-1">
                                    {requests.filter(r => r.status === 'new').length}
                                </p>
                            </div>
                            <FaExclamationTriangle className="text-4xl text-blue-400" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-effect rounded-xl p-6 border border-yellow-500/20"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">Contacted</p>
                                <p className="text-3xl font-bold text-yellow-400 mt-1">
                                    {requests.filter(r => r.status === 'contacted').length}
                                </p>
                            </div>
                            <FaClock className="text-4xl text-yellow-400" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-effect rounded-xl p-6 border border-green-500/20"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">Resolved</p>
                                <p className="text-3xl font-bold text-green-400 mt-1">
                                    {requests.filter(r => r.status === 'resolved').length}
                                </p>
                            </div>
                            <FaCheckCircle className="text-4xl text-green-400" />
                        </div>
                    </motion.div>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-4 mb-6">
                    <FaFilter className="text-gray-400" />
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-cyber-dark text-gray-400 hover:text-white'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('new')}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${filter === 'new' ? 'bg-blue-500 text-white' : 'bg-cyber-dark text-gray-400 hover:text-white'}`}
                    >
                        New
                    </button>
                    <button
                        onClick={() => setFilter('contacted')}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${filter === 'contacted' ? 'bg-yellow-500 text-white' : 'bg-cyber-dark text-gray-400 hover:text-white'}`}
                    >
                        Contacted
                    </button>
                    <button
                        onClick={() => setFilter('resolved')}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${filter === 'resolved' ? 'bg-green-500 text-white' : 'bg-cyber-dark text-gray-400 hover:text-white'}`}
                    >
                        Resolved
                    </button>
                </div>

                {/* Requests List */}
                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        <p className="text-gray-400 mt-4">Loading requests...</p>
                    </div>
                ) : filteredRequests.length === 0 ? (
                    <div className="text-center py-12 glass-effect rounded-xl border border-blue-500/20">
                        <FaEnvelope className="text-6xl text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400 text-lg">No requests found</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredRequests.map((request, index) => (
                            <motion.div
                                key={request.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-effect rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-white">{request.name}</h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(request.status)}`}>
                                                {request.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-2">
                                                <FaEnvelope />
                                                {request.email}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <FaBuilding />
                                                {request.company}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <FaClock />
                                                {formatDate(request.timestamp)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Service Needed</p>
                                        <p className="text-white font-semibold">{request.service}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Environment</p>
                                        <p className="text-white font-semibold">{request.environment}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Timeline</p>
                                        <p className="text-white font-semibold">{request.timeline || 'Not specified'}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Compliance</p>
                                        <p className="text-white font-semibold">{request.compliance || 'None'}</p>
                                    </div>
                                </div>

                                {request.phone && (
                                    <div className="mb-4">
                                        <p className="text-gray-400 text-sm mb-1">Phone</p>
                                        <p className="text-white font-semibold">{request.phone}</p>
                                    </div>
                                )}

                                {request.message && (
                                    <div className="mb-4">
                                        <p className="text-gray-400 text-sm mb-1">Message</p>
                                        <p className="text-gray-300 bg-cyber-darker p-4 rounded-lg">{request.message}</p>
                                    </div>
                                )}

                                <div className="flex gap-2 pt-4 border-t border-white/10">
                                    <button
                                        onClick={() => updateRequestStatus(request.id, 'new')}
                                        className="px-4 py-2 bg-blue-500/10 border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all duration-300 text-sm font-semibold"
                                    >
                                        Mark as New
                                    </button>
                                    <button
                                        onClick={() => updateRequestStatus(request.id, 'contacted')}
                                        className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/50 text-yellow-400 rounded-lg hover:bg-yellow-500/20 transition-all duration-300 text-sm font-semibold"
                                    >
                                        Mark as Contacted
                                    </button>
                                    <button
                                        onClick={() => updateRequestStatus(request.id, 'resolved')}
                                        className="px-4 py-2 bg-green-500/10 border border-green-500/50 text-green-400 rounded-lg hover:bg-green-500/20 transition-all duration-300 text-sm font-semibold"
                                    >
                                        Mark as Resolved
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
