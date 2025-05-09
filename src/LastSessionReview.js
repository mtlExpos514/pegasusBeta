import React, { useEffect, useState } from 'react';

function LastSessionReview() {
  const [lastSession, setLastSession] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('trainingSessions');
    if (stored) {
      const sessions = JSON.parse(stored);
      if (sessions.length > 0) {
        setLastSession(sessions[sessions.length - 1]);
      }
    }
  }, []);

  if (!lastSession) return null;

  return (
    <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#222', borderRadius: '10px', color: 'white' }}>
      <h4>🔁 Last Session Review</h4>
      <p><strong>Focus:</strong> {lastSession.skill || 'N/A'}</p>
      <p><strong>Highlight:</strong> {lastSession.proudMoment || 'Not recorded'}</p>
    </div>
  );
}

export default LastSessionReview;