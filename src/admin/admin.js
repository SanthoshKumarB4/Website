import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

const AdminView = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [requests, setRequests] = useState([]);
    const [status, setStatus] = useState('');

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/admin/login', loginData);
            if (res.data.success) {
                setIsLoggedIn(true);
                alert('Admin login successful');
                fetchRequests();
            } else {
                alert('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
        }
    };

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
                            {requests.map((request) => (
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
        </div>
    );
};

export default AdminView;