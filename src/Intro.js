import React from 'react';

function Intro() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'white' }}>
      <img
        src="/pegasus-logo.png"
        alt="Pegasus Project Logo"
        style={{ width: '300px', marginBottom: '30px' }}
      />
      <h1>Welcome to The Pegasus Project</h1>
      <p>Track your growth, sharpen your focus, and elevate your game.</p>
    </div>
  );
}

export default Intro;