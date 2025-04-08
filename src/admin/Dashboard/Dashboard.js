import React from 'react';
import './Dashboard.css';

const CircularProgress = ({ percentage, color, label, count }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="circular-progress-container">
            <svg className="circular-progress" width="120" height="120">
                <circle
                    className="progress-bg"
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeWidth="10"
                />
                <circle
                    className="progress-bar"
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeWidth="10"
                    stroke={color}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 60 60)"
                />
                <text x="60" y="60" textAnchor="middle" dy=".3em" className="progress-text">
                    {percentage}%
                </text>
            </svg>
            <div className="progress-label">{label}</div>
            <div className="progress-count">{count}</div>
        </div>
    );
};

const Dashboard = ({ requests }) => {
    const totalRequests = requests.length;
    const pendingRequests = requests.filter(req => req.status === 'Pending').length;
    const inProgressRequests = requests.filter(req => req.status === 'In Progress').length;
    const completedRequests = requests.filter(req => req.status === 'Completed').length;

    const pendingPercentage = totalRequests > 0 ? Math.round((pendingRequests / totalRequests) * 100) : 0;
    const inProgressPercentage = totalRequests > 0 ? Math.round((inProgressRequests / totalRequests) * 100) : 0;
    const completedPercentage = totalRequests > 0 ? Math.round((completedRequests / totalRequests) * 100) : 0;

    return (
        <div className="dashboard">
            <section className="stats-section">
                <h2 className="section-title">Request Statistics</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">{totalRequests}</div>
                        <div className="stat-label">Total Requests</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{pendingRequests}</div>
                        <div className="stat-label">Pending</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{inProgressRequests}</div>
                        <div className="stat-label">In Progress</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{completedRequests}</div>
                        <div className="stat-label">Completed</div>
                    </div>
                </div>
            </section>

            <section className="progress-section">
                <h2 className="section-title">Request Distribution</h2>
                <div className="progress-grid">
                    <CircularProgress 
                        percentage={pendingPercentage} 
                        color="#FF6384" 
                        label="Pending"
                        count={pendingRequests}
                    />
                    <CircularProgress 
                        percentage={inProgressPercentage} 
                        color="#36A2EB" 
                        label="In Progress"
                        count={inProgressRequests}
                    />
                    <CircularProgress 
                        percentage={completedPercentage} 
                        color="#4BC0C0" 
                        label="Completed"
                        count={completedRequests}
                    />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;