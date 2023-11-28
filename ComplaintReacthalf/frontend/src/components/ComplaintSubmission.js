import React, { useState } from 'react';
import axios from 'axios';

const ComplaintSubmission = () => {
  const [studentId, setStudentId] = useState(1); // Assuming student ID 1 for simplicity
  const [complaintText, setComplaintText] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmission = () => {
    axios.post('http://localhost:3001/complaint', { student_id: studentId, complaint_text: complaintText })
      .then((response) => {
        console.log(response.data);
        // Handle successful complaint submission
        setSubmissionStatus('success');
        // Add additional logic here if needed
      })
      .catch((error) => {
        console.error('Error during complaint submission:', error.response.data);
        // Handle complaint submission failure
        setSubmissionStatus('failure');
        // Add additional logic here if needed
      });
  };

  return (
    <div>
      <h2>Submit Complaint</h2>
      <label>Complaint Text:</label>
      <textarea value={complaintText} onChange={(e) => setComplaintText(e.target.value)} />
      <br />
      <button onClick={handleSubmission}>Submit Complaint</button>

      {submissionStatus === 'success' && (
        <div style={{ color: 'green' }}>Complaint submitted successfully!</div>
      )}

      {submissionStatus === 'failure' && (
        <div style={{ color: 'red' }}>Error submitting complaint. Please try again.</div>
      )}
    </div>
  );
};

export default ComplaintSubmission;
