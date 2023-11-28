import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminComplaintsView = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch complaints when the component mounts
    axios.get('http://localhost:3001/complaints')
      .then((response) => {
        setComplaints(response.data);
      })
      .catch((error) => {
        console.error('Error fetching complaints:', error.response.data);
      });
  }, []);

  return (
    <div>
      <h2>Admin Complaints View</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id}>
            <strong>Student Name:</strong> {complaint.student_name}
            <br />
            <strong>Complaint Text:</strong> {complaint.complaint_text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminComplaintsView;
