import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const preQuestions = [
  { name: 'focus', prompt: 'What is your main focus for today’s session?' },
  { name: 'improvementGoal', prompt: 'What skill do you want to improve today?' },
  { name: 'importance', prompt: 'Why is today important for your progress?' },
  { name: 'motivation', prompt: 'On a scale of 1 to 10, how motivated are you right now?', type: 'number' },
  { name: 'physicalReadiness', prompt: 'How do you feel physically? (1–10)', type: 'number' },
  { name: 'mentalFocus', prompt: 'How focused are you mentally right now? (1–10)', type: 'number' },
  { name: 'powerWord', prompt: 'Choose a power word to guide your session (e.g., Hustle, Lock-In)' }
];

function ConversationalPreSession() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [input, setInput] = useState('');

  useEffect(() => {
    const player = localStorage.getItem('playerName');
    if (!player) {
      navigate('/login');
    }
  }, [navigate]);

  const handleNext = () => {
    const q = preQuestions[step];
    setAnswers(prev => ({ ...prev, [q.name]: input }));
    setInput('');
    if (step + 1 < preQuestions.length) {
      setStep(step + 1);
    } else {
      const player = localStorage.getItem('playerName') || 'guest';
      const key = `trainingSessions_${player}`;
      const history = JSON.parse(localStorage.getItem(key) || '[]');
      localStorage.setItem(key, JSON.stringify([...history, answers]));
      navigate('/convo-post');
    }
  };

  const current = preQuestions[step];

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h2>CoachBot: Pre-Session Check-In</h2>
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

export default ConversationalPreSession;