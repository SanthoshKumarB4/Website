import React, { useState } from 'react';
import axios from 'axios';
import './issue.css';

const UserView = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        laptop_model: '',
        issue_description: '',
        warranty: 'no'
    });
    const [uniqueId, setUniqueId] = useState('');
    const [statusData, setStatusData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [activeTab, setActiveTab] = useState('submit');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await axios.post('http://localhost:5000/api/submit-request', formData);
            setUniqueId(res.data.unique_id);
            alert(`Request submitted successfully! Your unique ID: ${res.data.unique_id}`);
            setFormData({
                name: '',
                email: '',
                phone: '',
                laptop_model: '',
                issue_description: '',
                warranty: 'no'
            });
            setActiveTab('check');
        } catch (err) {
            console.error(err);
            alert(`Failed to submit request: ${err.response?.data?.message || 'Please try again.'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCheckStatus = async () => {
        if (!uniqueId.trim()) {
            alert('Please enter a valid Unique ID');
            return;
        }
        setIsChecking(true);
        try {
            const res = await axios.get(`http://localhost:5000/api/check-status/${uniqueId}`);
            setStatusData(res.data);
        } catch (err) {
            console.error(err);
            alert(`Failed to check status: ${err.response?.data?.message || 'Please verify your Unique ID.'}`);
            setStatusData(null);
        } finally {
            setIsChecking(false);
        }
    };

    return (
        <div className='page-container'>
            <header className="gradient-header">
                <h1>Laptop Repair Service</h1>
                <p>Fast, reliable, and professional laptop repair services</p>
            </header>

            <div className="tabs-container">
                <button 
                    className={`tab-button ${activeTab === 'submit' ? 'active-tab' : ''}`}
                    onClick={() => setActiveTab('submit')}
                >
                    Submit Request
                </button>
                <button 
                    className={`tab-button ${activeTab === 'check' ? 'active-tab' : ''}`}
                    onClick={() => setActiveTab('check')}
                >
                    Check Status
                </button>
            </div>

            <div className="main-contents">
                {activeTab === 'submit' && (
                    <div className="form-section-container">
                        <div className="form-container gradient-card">
                            <form onSubmit={handleSubmit} className="gradient-form">
                                <h2>Submit Repair Request</h2>
                                <p className="form-intro">
                                    Fill out the form below to submit your repair request. 
                                    Our team will review your request and get back to you within 24 hours.
                                </p>
                                
                                <div className="form-group">
                                    <label htmlFor="name">Full Name*</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address*</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="laptop_model">Laptop Model*</label>
                                    <input
                                        id="laptop_model"
                                        type="text"
                                        placeholder="e.g., Dell XPS 15, MacBook Pro 2020"
                                        value={formData.laptop_model}
                                        onChange={(e) => setFormData({ ...formData, laptop_model: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Under Warranty?</label>
                                    <div className="radio-group">
                                        <label>
                                            <input
                                                type="radio"
                                                name="warranty"
                                                value="yes"
                                                checked={formData.warranty === 'yes'}
                                                onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
                                            />
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="warranty"
                                                value="no"
                                                checked={formData.warranty === 'no'}
                                                onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="issue_description">Issue Description*</label>
                                    <textarea
                                        id="issue_description"
                                        placeholder="Describe your issue in detail. Include any error messages, when the problem started, and what you've tried to fix it."
                                        value={formData.issue_description}
                                        onChange={(e) => setFormData({ ...formData, issue_description: e.target.value })}
                                        required
                                    />
                                </div>

                                <button type="submit" disabled={isSubmitting} className="submit-button gradient-button">
                                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                                </button>

                              
                            </form>
                        </div>

                        <div className="info-section gradient-card">
                            <h3>What to Expect After Submission</h3>
                            <ol className="process-steps">
                                <li className="step-item">
                                    <strong>Confirmation Email</strong>
                                    <p>You'll receive an email with your unique ID and next steps.</p>
                                </li>
                                <li className="step-item">
                                    <strong>Diagnosis</strong>
                                    <p>Our technicians will diagnose the issue within 24 hours.</p>
                                </li>
                                <li className="step-item">
                                    <strong>Repair Estimate</strong>
                                    <p>We'll provide a cost estimate and timeline for the repair.</p>
                                </li>
                                <li className="step-item">
                                    <strong>Repair Process</strong>
                                    <p>Once approved, we'll begin the repair process.</p>
                                </li>
                            </ol>

                            <div className="contact-info">
                                <h3>Need Immediate Help?</h3>
                                <p>Call us at: <strong>1-800-REPAIR-NOW</strong></p>
                                <p>Email: <strong>support@laptoprepair.com</strong></p>
                                <p>Business Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'check' && (
                    <div className="status-container">
                        <div className="status-content">
                            <div className="status-check-area gradient-card">
                                <h2>Check Repair Status</h2>
                                <p className="status-intro">
                                    Enter your unique ID below to check the status of your repair. 
                                    You can find this ID in your confirmation email.
                                </p>

                                <div className="status-input-group">
                                    <input
                                        type="text"
                                        placeholder="Enter your Unique ID (e.g., REP-1234-ABCD)"
                                        value={uniqueId}
                                        onChange={(e) => setUniqueId(e.target.value)}
                                        className="status-input"
                                    />
                                    <button 
                                        onClick={handleCheckStatus} 
                                        disabled={isChecking}
                                        className="check-button gradient-button"
                                    >
                                        {isChecking ? 'Checking...' : 'Check Status'}
                                    </button>
                                </div>
                            </div>

                            {statusData && (
                                <div className="status-results gradient-card">
                                    <h3>Repair Status Details</h3>
                                    <div className="status-card">
                                        <div className="status-header">
                                            <span className={`status-badge ${statusData.status.toLowerCase()}`}>
                                                {statusData.status}
                                            </span>
                                            <span className="request-id">Request ID: {uniqueId}</span>
                                        </div>
                                        
                                        <div className="status-details">
                                            <div className="detail-row">
                                                <span className="detail-label">Date Submitted:</span>
                                                <span className="detail-value">{new Date(statusData.created_at).toLocaleDateString()}</span>
                                            </div>
                                            <div className="detail-row">
                                                <span className="detail-label">Laptop Model:</span>
                                                <span className="detail-value">{statusData.laptop_model}</span>
                                            </div>
                                            <div className="detail-row">
                                                <span className="detail-label">Issue Description:</span>
                                                <span className="detail-value">{statusData.issue_description}</span>
                                            </div>
                                            {statusData.estimated_completion && (
                                                <div className="detail-row">
                                                    <span className="detail-label">Estimated Completion:</span>
                                                    <span className="detail-value">{new Date(statusData.estimated_completion).toLocaleDateString()}</span>
                                                </div>
                                            )}
                                            {statusData.technician_notes && (
                                                <div className="detail-row full-width">
                                                    <span className="detail-label">Technician Notes:</span>
                                                    <div className="notes-content">{statusData.technician_notes}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="status-faq gradient-card">
                            <h3>Frequently Asked Questions</h3>
                            <div className="faq-item">
                                <h4>How long will my repair take?</h4>
                                <p>Most repairs are completed within 3-5 business days. Complex issues may take longer.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Can I track my repair progress?</h4>
                                <p>Yes, check back with your unique ID for updates. We'll also email you at major milestones.</p>
                            </div>
                            <div className="faq-item">
                                <h4>What if I lost my unique ID?</h4>
                                <p>Contact our support team with your email address or phone number used during submission.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserView;