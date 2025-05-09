import React from 'react';
import { Link } from 'react-router-dom';
import './App-dark.css';

function Dashboard() {
  const playerName = localStorage.getItem('playerName') || 'Player';

  return (
    <div className="dashboard" style={{ color: 'white', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2em' }}>🏀 Pegasus Project</h1>
        <p>Welcome back, {playerName}</p>
      </header>

      <section style={{ marginBottom: '20px', backgroundColor: '#222', padding: '15px', borderRadius: '8px' }}>
        <strong>⚠️ Reminder:</strong> Before starting, please complete your own warm-up routine.
        <p>Here are some great warm-up options:</p>
        <ul>
          <li>🎾 Tennis ball hand-eye drills</li>
          <li>⏱️ 3-minute jump rope (skipping)</li>
          <li>🔥 10 burpees to raise your heart rate</li>
          <li>🧘 2-minute breathing meditation for mental focus</li>
        </ul>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <Link to="/convo-pre" className="tile">Start Session</Link>
        <Link to="/blazepod" className="tile">Blazepod</Link>
        <Link to="/review" className="tile">Final Review</Link>
        <Link to="/feedback" className="tile">Feedback</Link>
        <Link to="/intro" className="tile">Jay</Link>
      </section>
    </div>
  );
}

export default Dashboard;