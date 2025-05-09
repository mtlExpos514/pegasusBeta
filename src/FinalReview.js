import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FinalReview() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [sessionIndex, setSessionIndex] = useState(null);

  useEffect(() => {
    const player = localStorage.getItem('playerName') || 'guest';
    const key = `trainingSessions_${player}`;
    const history = JSON.parse(localStorage.getItem(key) || '[]');
    if (history.length) {
      setSessionIndex(history.length - 1);
      setForm(history[history.length - 1]);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const player = localStorage.getItem('playerName') || 'guest';
    const key = `trainingSessions_${player}`;
    const history = JSON.parse(localStorage.getItem(key) || '[]');
    if (sessionIndex !== null) {
      history[sessionIndex] = form;
      localStorage.setItem(key, JSON.stringify(history));
    }
    alert('Session updated and saved!');
    navigate('/dashboard');
  };

  if (!Object.keys(form).length) return <p style={{ color: 'white' }}>No session found to review.</p>;

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2>Final Review</h2>
      <p>Edit your responses before saving:</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {Object.keys(form).map(key => (
          <div key={key}>
            <label>{key}:</label>
            <input
              type="text"
              name={key}
              value={form[key]}
              onChange={handleChange}
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </div>
        ))}
        <button type="button" onClick={handleSave}>Save & Finish</button>
      </form>
    </div>
  );
}

export default FinalReview;