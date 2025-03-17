import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

const AdminView = () => {
    // State for login
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    // State for requests
    const [requests, setRequests] = useState([]);
    const [status, setStatus] = useState('');

    // State for statistics
    const [stats, setStats] = useState({
        pending: 0,
        inProgress: 0,
        completed: 0
    });

    // State for search and filter
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    // State for user management
    const [users, setUsers] = useState([]);

    // State for notifications
    const [notifications, setNotifications] = useState([]);

    // State for active section
    const [activeSection, setActiveSection] = useState('dashboard');

    // Handle admin login
    const handleAdminLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/admin/login', loginData);
            if (res.data.success) {
                setIsLoggedIn(true);
                alert('Admin login successful');
                fetchRequests();
                fetchStats();
                fetchUsers();
                fetchNotifications();
            } else {
                alert('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
        }
    };

    // Fetch all requests
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

    // Fetch statistics
    const fetchStats = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/stats', {
                headers: {
                    username: 'admin',
                    password: 'admin123'
                }
            });
            setStats(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    // Fetch users
    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/users', {
                headers: {
                    username: 'admin',
                    password: 'admin123'
                }
            });
            setUsers(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    // Fetch notifications
    const fetchNotifications = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/notifications', {
                headers: {
                    username: 'admin',
                    password: 'admin123'
                }
            });
            setNotifications(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    // Handle status update
    const handleUpdateStatus = async (id) => {
        try {
            await axios.put(
                `http://localhost:5000/api/admin/update-status/${id}`,
                { status },
                {
                    headers: {
                        username: 'admin',
                        password: 'admin123'
                    }
                }
            );
            alert('Status updated successfully');
            fetchRequests();
        } catch (err) {
            console.error(err);
        }
    };

    // Handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        setLoginData({ username: '', password: '' });
        alert('Logged out successfully');
    };

    // Filter requests based on search term and status
    const filteredRequests = requests.filter(request => {
        const matchesSearchTerm = request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 request.laptop_model.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'All' || request.status === filterStatus;

        return matchesSearchTerm && matchesStatus;
    });

    return (
        <div className="admin-view-container">
            {!isLoggedIn ? (
                <form className="admin-login-form" onSubmit={handleAdminLogin}>
                    <h2>Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={loginData.username}
                        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <div className="admin-panel">
                    <h2>Admin Panel</h2>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>

                    {/* Navigation Bar */}
                    <nav className="admin-nav">
                        <button onClick={() => setActiveSection('dashboard')}>Dashboard</button>
                        <button onClick={() => setActiveSection('requests')}>Requests</button>
                        <button onClick={() => setActiveSection('users')}>User Management</button>
                        <button onClick={() => setActiveSection('notifications')}>Notifications</button>
                    </nav>

                    {/* Dashboard Overview */}
                    {activeSection === 'dashboard' && (
                        <div className="dashboard-overview">
                            <h3>Dashboard Overview</h3>
                            <div className="stats">
                                <div className="stat-item">
                                    <span>Pending Requests</span>
                                    <span>{stats.pending}</span>
                                </div>
                                <div className="stat-item">
                                    <span>In Progress</span>
                                    <span>{stats.inProgress}</span>
                                </div>
                                <div className="stat-item">
                                    <span>Completed</span>
                                    <span>{stats.completed}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Requests Table */}
                    {activeSection === 'requests' && (
                        <div className="requests-section">
                            <div className="search-filter">
                                <input
                                    type="text"
                                    placeholder="Search by name, email, or model"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <table className="requests-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Laptop Model</th>
                                        <th>Issue Description</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredRequests.map((request) => (
                                        <tr key={request.id}>
                                            <td>{request.id}</td>
                                            <td>{request.name}</td>
                                            <td>{request.email}</td>
                                            <td>{request.laptop_model}</td>
                                            <td>{request.issue_description}</td>
                                            <td>{request.status}</td>
                                            <td>
                                                <select onChange={(e) => setStatus(e.target.value)}>
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                                <button onClick={() => handleUpdateStatus(request.id)}>Update</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* User Management */}
                    {activeSection === 'users' && (
                        <div className="user-management">
                            <h3>User Management</h3>
                            <table className="users-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Notifications */}
                    {activeSection === 'notifications' && (
                        <div className="notifications">
                            <h3>Notifications</h3>
                            <ul>
                                {notifications.map((notification) => (
                                    <li key={notification.id}>{notification.message}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminView;