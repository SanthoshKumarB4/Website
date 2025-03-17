import React, { useState } from 'react';
import axios from 'axios';
import './issue.css';

const UserView = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        laptop_model: '',
        issue_description: ''
    });
    const [uniqueId, setUniqueId] = useState('');
    const [statusData, setStatusData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/submit-request', formData);
            setUniqueId(res.data.unique_id);
            alert(`Request submitted! Your unique ID: ${res.data.unique_id}`);
        } catch (err) {
            console.error(err);
        }
    };

    const handleCheckStatus = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/check-status/${uniqueId}`);
            setStatusData(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
        <div className='page'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Laptop Model"
                    value={formData.laptop_model}
                    onChange={(e) => setFormData({ ...formData, laptop_model: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Issue Description"
                    value={formData.issue_description}
                    onChange={(e) => setFormData({ ...formData, issue_description: e.target.value })}
                    required
                />
                <button type="submit">Submit Request</button>
            </form>

            <div className="status-check">
                <h2>Check Status</h2>
                <input
                    type="text"
                    placeholder="Enter Unique ID"
                    value={uniqueId}
                    onChange={(e) => setUniqueId(e.target.value)}
                />
                <button onClick={handleCheckStatus}>Check Status</button>
                {statusData && (
                    <div className="status-data">
                        <p className='p'>Status: {statusData.status}</p>
                    </div>
                )}
            </div>
            </div>
        </>
    );
};

export default UserView;