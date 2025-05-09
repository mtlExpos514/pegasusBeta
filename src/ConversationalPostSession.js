import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const postQuestions = [
  { name: 'highlight', prompt: 'What did you do well today?' },
  { name: 'challenge', prompt: 'What challenged you the most?' },
  { name: 'effort', prompt: 'Rate your effort today (1–10)', type: 'number' },
  { name: 'focus', prompt: 'Rate your focus today (1–10)', type: 'number' },
  { name: 'goalFollowed', prompt: 'Did you follow through on your focus/goal?', type: 'text' },
  { name: 'changeNext', prompt: 'What’s one thing you’ll do differently next session?' },
  { name: 'sessionWord', prompt: 'What word best describes this session?' }
];

function ConversationalPostSession() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [input, setInput] = useState('');

  const handleNext = () => {
    const q = postQuestions[step];
    setAnswers(prev => ({ ...prev, [q.name]: input }));
    setInput('');
    if (step + 1 < postQuestions.length) {
      setStep(step + 1);
    } else {
      const player = localStorage.getItem('playerName') || 'guest';
      const key = `trainingSessions_${player}`;
      const sessions = JSON.parse(localStorage.getItem(key) || '[]');
      if (sessions.length) {
        sessions[sessions.length - 1] = { ...sessions[sessions.length - 1], ...answers };
        localStorage.setItem(key, JSON.stringify(sessions));
      }
      navigate('/review');
    }
  };

  const current = postQuestions[step];

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h2>CoachBot: Post-Session Reflection</h2>
      <p><strong>{current.prompt}</strong></p>
      <input
        type={current.type || 'text'}
        value={input}
        onChange={e => setInput(e.target.value)}
        required
      />
      <br/><br/>
      <button onClick={handleNext} disabled={!input}>Next</button>
    </div>
  );
}

export default ConversationalPostSession;