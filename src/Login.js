import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    localStorage.clear(); // Force logout on load
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) {
      localStorage.setItem('playerName', name);
      localStorage.setItem('sessionDate', date);
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h2>Welcome to The Pegasus Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Example: Jordan"
          required
        />
        <br /><br />
        <label>Select Today's Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Start Session</button>
      </form>
    </div>
  );
}

export default Login;