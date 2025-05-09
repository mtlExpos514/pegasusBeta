import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import ConversationalPreSession from './ConversationalPreSession';
import ConversationalPostSession from './ConversationalPostSession';
import Feedback from './Feedback';
import Intro from './Intro';
import FinalReview from './FinalReview';
import Blazepod from './Blazepod';
import './App-dark.css';

const RequireAuth = ({ children }) => {
  const loggedIn = localStorage.getItem('playerName');
  return loggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <nav style={{ backgroundColor: '#111', padding: '10px' }}>
        <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
        <Link to="/convo-pre" style={{ color: 'white', marginRight: '10px' }}>Pre-Session</Link>
        <Link to="/convo-post" style={{ color: 'white', marginRight: '10px' }}>Post-Session</Link>
        <Link to="/progress" style={{ color: 'white', marginRight: '10px' }}>Progress</Link>
        <Link to="/blazepod" style={{ color: 'white', marginRight: '10px' }}>Blazepod</Link>
        <Link to="/feedback" style={{ color: 'white', marginRight: '10px' }}>Feedback</Link>
        <Link to="/review" style={{ color: 'white' }}>Review</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/intro" element={<RequireAuth><Intro /></RequireAuth>} />
        <Route path="/convo-pre" element={<RequireAuth><ConversationalPreSession /></RequireAuth>} />
        <Route path="/convo-post" element={<RequireAuth><ConversationalPostSession /></RequireAuth>} />
        <Route path="/progress" element={<RequireAuth><Blazepod /></RequireAuth>} />
        <Route path="/blazepod" element={<RequireAuth><Blazepod /></RequireAuth>} />
        <Route path="/feedback" element={<RequireAuth><Feedback /></RequireAuth>} />
        <Route path="/review" element={<RequireAuth><FinalReview /></RequireAuth>} />
      </Routes>
    </Router>
  );
}

export default App;