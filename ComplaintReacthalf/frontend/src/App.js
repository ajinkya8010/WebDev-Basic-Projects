import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminComplaintsView from './components/AdminComplaintsView';
import ComplaintSubmission from './components/ComplaintSubmission';
import StudentRegistration from './components/StudentRegistration';
import StudentLogin from './components/StudentLogin';


const Home = () => {
  return (
    <div>
      <h2>Welcome to the Complaint System</h2>
      <Link to="/admin/login">
        <button>Admin Login</button>
      </Link>
      <Link to="/student/login">
        <button>Student Login</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/complaints" element={<AdminComplaintsView />} />
        <Route path="/submit-complaint" element={<ComplaintSubmission />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegistration />} />
      </Routes>
    </Router>
  );
};


export default App;
