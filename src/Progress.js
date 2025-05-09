import React, { useState, useEffect } from 'react';

function Progress() {
  const [sessions, setSessions] = useState(() => {
    const stored = localStorage.getItem('trainingSessions');
    return stored ? JSON.parse(stored) : [];
  });

  const [blazepodResults, setBlazepodResults] = useState([]);
  const [form, setForm] = useState({
    redHits: '', redReaction: '',
    blueHits: '', blueReaction: '',
    greenTime: '', greenAccuracy: '',
    generalReaction: '',
    hecoCatches: '', hecoDrops: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem('blazepodResults');
    if (stored) setBlazepodResults(JSON.parse(stored));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlazepodSubmit = (e) => {
    e.preventDefault();
    const updated = [...blazepodResults, form];
    setBlazepodResults(updated);
    localStorage.setItem('blazepodResults', JSON.stringify(updated));
    alert("Blazepod Results Saved");
    setForm({
      redHits: '', redReaction: '',
      blueHits: '', blueReaction: '',
      greenTime: '', greenAccuracy: '',
      generalReaction: '',
      hecoCatches: '', hecoDrops: ''
    });
  };

  const renderGraph = (sessionCount) => {
    const slice = sessions.slice(-sessionCount);
    return (
      <div>
        <h4>Last {sessionCount} Sessions</h4>
        <ul>
          {slice.map((s, idx) => (
            <li key={idx}>
              Session {sessions.length - slice.length + idx + 1}: {s.skill || 'N/A'} — Motivation: {s.motivation || 'N/A'}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2>Training Progress</h2>
      {sessions.length > 0 ? (
        <>
          {renderGraph(3)}
          {sessions.length >= 6 && renderGraph(6)}
          {sessions.length >= 10 && renderGraph(10)}
        </>
      ) : (
        <p>No training sessions logged yet.</p>
      )}
      <hr />
      <h3>Blazepod Results</h3>
      <form onSubmit={handleBlazepodSubmit}>
        <h4>Red Drill</h4>
        <input type="text" name="redHits" value={form.redHits} placeholder="Total Hits" onChange={handleChange} required />
        <input type="text" name="redReaction" value={form.redReaction} placeholder="Reaction Time (ms)" onChange={handleChange} required />

        <h4>Blue Drill</h4>
        <input type="text" name="blueHits" value={form.blueHits} placeholder="Total Hits" onChange={handleChange} required />
        <input type="text" name="blueReaction" value={form.blueReaction} placeholder="Reaction Time (ms)" onChange={handleChange} required />

        <h4>Green Drill (Clap)</h4>
        <input type="text" name="greenTime" value={form.greenTime} placeholder="Time to Complete (s)" onChange={handleChange} required />
        <input type="text" name="greenAccuracy" value={form.greenAccuracy} placeholder="Accuracy (%)" onChange={handleChange} required />

        <h4>General Reaction</h4>
        <input type="text" name="generalReaction" value={form.generalReaction} placeholder="Avg. Reaction Time (ms)" onChange={handleChange} required />

        <h4>Heco Stick</h4>
        <input type="text" name="hecoCatches" value={form.hecoCatches} placeholder="Catches" onChange={handleChange} required />
        <input type="text" name="hecoDrops" value={form.hecoDrops} placeholder="Drops" onChange={handleChange} required />

        <br /><br />
        <button type="submit">Save Results</button>
      </form>

      <hr />
      <h3>Previous Blazepod Results</h3>
      <ul>
        {blazepodResults.map((res, idx) => (
          <li key={idx}>
            <strong>Session {idx + 1}:</strong> Red Hits: {res.redHits}, Blue Hits: {res.blueHits}, Green Accuracy: {res.greenAccuracy}%, General Reaction: {res.generalReaction}ms, Heco Catches: {res.hecoCatches}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Progress;