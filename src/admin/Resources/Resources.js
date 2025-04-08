import React, { useState } from 'react';
import './.css';

const Technicians = () => {
    const [technicians, setTechnicians] = useState([
        {
            id: 1,
            name: "Alex Johnson",
            specialization: "Hardware",
            status: "Active",
            workload: 3,
            rating: 4.8,
            contact: "alex@repair.com"
        },
        // ... more technicians
    ]);

    const [newTech, setNewTech] = useState({
        name: '',
        specialization: 'Hardware',
        contact: ''
    });

    const addTechnician = () => {
        setTechnicians([...technicians, {
            ...newTech,
            id: technicians.length + 1,
            status: "Active",
            workload: 0,
            rating: 0
        }]);
        setNewTech({ name: '', specialization: 'Hardware', contact: '' });
    };

    return (
        <div className="technicians-page">
            <h2>Technician Management</h2>
            
            <div className="technician-controls">
                <h3>Add New Technician</h3>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={newTech.name}
                    onChange={(e) => setNewTech({...newTech, name: e.target.value})}
                />
                <select
                    value={newTech.specialization}
                    onChange={(e) => setNewTech({...newTech, specialization: e.target.value})}
                >
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Data Recovery">Data Recovery</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Contact" 
                    value={newTech.contact}
                    onChange={(e) => setNewTech({...newTech, contact: e.target.value})}
                />
                <button onClick={addTechnician}>Add Technician</button>
            </div>

            <div className="technician-grid">
                {technicians.map(tech => (
                    <div key={tech.id} className="technician-card">
                        <h3>{tech.name}</h3>
                        <div className="tech-specialization">{tech.specialization}</div>
                        <div className="tech-status">
                            Status: <span className={`status-${tech.status.toLowerCase()}`}>
                                {tech.status}
                            </span>
                        </div>
                        <div className="tech-workload">
                            Current Jobs: {tech.workload}
                        </div>
                        <div className="tech-rating">
                            Rating: {tech.rating}/5
                        </div>
                        <div className="tech-contact">{tech.contact}</div>
                        <div className="tech-actions">
                            <button>Assign Job</button>
                            <button>View Details</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="performance-metrics">
                <h3>Team Performance</h3>
                {/* Add charts/metrics components here */}
            </div>
        </div>
    );
};

export default Technicians;