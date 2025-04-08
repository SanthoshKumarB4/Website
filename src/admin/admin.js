import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Requests from './Requests/Requests';

const AdminView = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [requests, setRequests] = useState([]);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const fetchRequests = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/requests', {
                headers: {
                    username: 'admin',
                    password: 'admin123'
                }
            });
            setRequests(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        alert('Logged out successfully');
    };

    return (
        <div className="admin-app">
            {!isLoggedIn ? (
                <Login setIsLoggedIn={setIsLoggedIn} fetchRequests={fetchRequests} />
            ) : (
                <div className="admin-layout">
                    <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                        <div className="sidebar-header">
                            <h3>Admin Panel</h3>
                            <button 
                                className="mobile-close-btn"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <nav className="sidebar-nav">
                            <button 
                                className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('dashboard');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <span className="nav-icon">📊</span>
                                <span className="nav-text">Dashboard</span>
                            </button>
                            <button 
                                className={`nav-item ${activeTab === 'requests' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('requests');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                <span className="nav-icon">📋</span>
                                <span className="nav-text">Requests</span>
                            </button>
                        </nav>
                        <div className="sidebar-footer">
                            <button className="logout-button" onClick={handleLogout}>
                                <span className="nav-icon">🚪</span>
                                <span className="nav-text">Logout</span>
                            </button>
                        </div>
                    </aside>

                    <main className="main-content">
                        <header className="main-header">
                            <button 
                                className="mobile-menu-btn"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                ☰
                            </button>
                            <h1 className="page-title">
                                {activeTab === 'dashboard' ? 'Dashboard Overview' : 'Service Requests'}
                            </h1>
                        </header>

                        <div className="content-container">
                            {activeTab === 'dashboard' ? (
                                <Dashboard requests={requests} />
                            ) : (
                                <Requests requests={requests} fetchRequests={fetchRequests} />
                            )}
                        </div>
                    </main>
                </div>
            )}
        </div>
    );
};

export default AdminView;