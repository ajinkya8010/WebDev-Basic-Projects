import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [results, setResults] = useState([]);
  const [newResult, setNewResult] = useState({
    roll_number: '',
    subject1_mse: 0,
    subject1_ese: 0,
    subject2_mse: 0,
    subject2_ese: 0,
    subject3_mse: 0,
    subject3_ese: 0,
    subject4_mse: 0,
    subject4_ese: 0,
  });
  const [recentResult, setRecentResult] = useState(null);

  useEffect(() => {
    // Fetch all student results on component mount
    axios.get('http://localhost:5000/results').then(response => setResults(response.data));
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewResult(prevResult => ({ ...prevResult, [name]: value }));
  };

  const calculateTotalMarks = (mse, ese) => {
    const totalMarks = 0.3 * mse + 0.7 * ese; // Considering weights (30% for MSE and 70% for ESE)
    return totalMarks;
  };

  const calculatePercentage = (mse, ese) => {
    const totalMarks = calculateTotalMarks(mse, ese);
    const percentage = (totalMarks / 800) * 100; // Assuming total marks are out of 800
    return percentage.toFixed(2);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Add a new student result
    axios.post('http://localhost:5000/results', newResult).then(response => {
      console.log(response.data);
      setRecentResult({
        roll_number: newResult.roll_number,
        totalMarks: calculateTotalMarks(newResult.subject1_mse, newResult.subject1_ese),
        percentage: calculatePercentage(newResult.subject1_mse, newResult.subject1_ese),
      });
      // Fetch all student results again after adding a new result
      axios.get('http://localhost:5000/results').then(response => setResults(response.data));
    });
  };

  return (
    <div>
      <h1>Student Results</h1>
      {recentResult && (
        <div>
          <h2>Recent Result</h2>
          <p>
            Roll Number: {recentResult.roll_number} - Total Marks: {recentResult.totalMarks.toFixed(2)} - Percentage:{' '}
            {recentResult.percentage}%
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Roll Number:
          <input type="text" name="roll_number" value={newResult.roll_number} onChange={handleInputChange} required />
        </label>
        {/* Add form fields for each subject's MSE and ESE marks */}
        {/* For simplicity, only include the roll number */}
        {[1, 2, 3, 4].map(subjectNumber => (
          <React.Fragment key={subjectNumber}>
            <label>
              Subject {subjectNumber} MSE:
              <input
                type="number"
                name={`subject${subjectNumber}_mse`}
                value={newResult[`subject${subjectNumber}_mse`]}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Subject {subjectNumber} ESE:
              <input
                type="number"
                name={`subject${subjectNumber}_ese`}
                value={newResult[`subject${subjectNumber}_ese`]}
                onChange={handleInputChange}
                required
              />
            </label>
          </React.Fragment>
        ))}
        <button type="submit">Add Result</button>
      </form>
    </div>
  );
}

export default App;
