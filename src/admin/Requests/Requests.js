import React, { useState } from 'react';
import axios from 'axios';
import './Requests.css';

const Requests = ({ requests, fetchRequests }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [status, setStatus] = useState('');

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

    const filteredRequests = requests.filter(request => {
        const matchesSearchTerm = request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 request.laptop_model.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'All' || request.status === filterStatus;

        return matchesSearchTerm && matchesStatus;
    });

    return (
        <div className="requests-page">
            <section className="controls-section">
                <h2 className="section-title">Manage Requests</h2>
                <div className="controls-row">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search requests..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="search-icon">🔍</span>
                    </div>
                    <select 
                        className="status-filter"
                        value={filterStatus} 
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </section>

            <section className="requests-section">
                <div className="table-container">
                    <table className="requests-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Laptop Model</th>
                                <th>Issue</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequests.map((request) => (
                                <tr key={request.id}>
                                    <td>{request.id}</td>
                                    <td>{request.name}</td>
                                    <td>{request.email}</td>
                                    <td>{request.laptop_model}</td>
                                    <td className="issue-cell">{request.issue_description}</td>
                                    <td>
                                        <span className={`status-badge ${request.status.toLowerCase().replace(' ', '-')}`}>
                                            {request.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-group">
                                            <select 
                                                className="status-select"
                                                onChange={(e) => setStatus(e.target.value)}
                                            >
                                                <option value="">Change Status</option>
                                                <option value="Pending">Pending</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                            <button 
                                                className="update-btn"
                                                onClick={() => handleUpdateStatus(request.id)}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Requests;