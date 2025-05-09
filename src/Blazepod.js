import React, { useState, useEffect } from 'react';

function Blazepod() {
  const [results, setResults] = useState([]);
  const [form, setForm] = useState({
    drill1Name: '', drill1Desc: '', drill1Data: '',
    drill2Name: '', drill2Desc: '', drill2Data: '',
    drill3Name: '', drill3Desc: '', drill3Data: '',
    drill4Name: '', drill4Desc: '', drill4Data: '',
    drill5Name: '', drill5Desc: '', drill5Data: ''
  });

  useEffect(() => {
    const player = localStorage.getItem('playerName') || 'guest';
    const stored = localStorage.getItem(`blazepodResults_${player}`);
    if (stored) setResults(JSON.parse(stored));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (!form.reactionTime) form.reactionTime = "N/A";
    e.preventDefault();
    const player = localStorage.getItem('playerName') || 'guest';
    const updated = [...results, form];
    setResults(updated);
    localStorage.setItem(`blazepodResults_${player}`, JSON.stringify(updated));
    alert("Results saved!");
    setForm({
      drill1Name: '', drill1Desc: '', drill1Data: '',
      drill2Name: '', drill2Desc: '', drill2Data: '',
      drill3Name: '', drill3Desc: '', drill3Data: '',
      drill4Name: '', drill4Desc: '', drill4Data: '',
      drill5Name: '', drill5Desc: '', drill5Data: ''
    });
  };

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2>Blazepod Custom Drills</h2>
      <form onSubmit={handleSubmit}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i}>
            <input
              name={`drill${i}Name`}
              placeholder={`Drill ${i} Name (optional)`}
              value={form[`drill${i}Name`]}
              onChange={handleChange}
            />
            <input
              name={`drill${i}Desc`}
              placeholder={`Drill ${i} Description (optional)`}
              value={form[`drill${i}Desc`]}
              onChange={handleChange}
            />
            <input
              name={`drill${i}Data`}
              placeholder={`Drill ${i} Result (optional)`}
              value={form[`drill${i}Data`]}
              onChange={handleChange}
            />
          </div>
        ))}
        <br />
        <button type="submit">Save Drill Data</button>
      <label>Overall Reaction Time (ms):</label>
        <input name="reactionTime" value={form.reactionTime} onChange={handleChange} />
      </form>

      <hr />
      <h3>Past Sessions</h3>
      <p><strong>Overall Reaction Time:</strong> {form.reactionTime || "N/A"}</p>
      <ul>
        {results.map((entry, idx) => (
          <li key={idx}>
            <strong>Session {idx + 1}:</strong>{" "}
            {[1, 2, 3, 4, 5].map(i =>
              entry[`drill${i}Name`] && entry[`drill${i}Data`] ? (
                <div key={i}>
                  <strong>{entry[`drill${i}Name`]}</strong>{" "}
                  ({entry[`drill${i}Desc`] || "No description"}):{" "}
                  {entry[`drill${i}Data`]}
                </div>
              ) : null
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blazepod;