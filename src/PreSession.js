import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import PreSession from './PreSession';
import PostSession from './PostSession';
import Progress from './Progress';
import Feedback from './Feedback';
import Intro from './Intro';
import './App-dark.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link>{" | "}
        <Link to="/pre-session">Pre</Link>{" | "}
        <Link to="/post-session">Post</Link>{" | "}
        <Link to="/progress">Progress</Link>{" | "}
        <Link to="/feedback">Feedback</Link>{" | "}
        <Link to="/intro">Intro</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/pre-session" element={<PreSession />} />
        <Route path="/post-session" element={<PostSession />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
