import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LastSessionReview from './LastSessionReview';

function PostSession() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    selfDiscovery: '',
    challenge: '',
    proudMoment: '',
    improvement: '',
    postFeel: '',
    sessionWord: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem('trainingSessions');
    const sessions = stored ? JSON.parse(stored) : [];
    const last = sessions.length ? sessions.length - 1 : 0;
    if (sessions[last]) {
      sessions[last].proudMoment = formData.proudMoment;
    }
    localStorage.setItem('trainingSessions', JSON.stringify(sessions));
    navigate('/review');
  };

  return (
    <div>
      <h2>Post-Training Reflection</h2>
      <form onSubmit={handleSubmit}>
        <label>🧠 What did you learn about yourself today?</label>
        <textarea name="selfDiscovery" value={formData.selfDiscovery} onChange={handleChange} rows="3" placeholder="Example: I focus better with fewer distractions..." required />

        <label>⚡ What challenged you the most, and how did you handle it?</label>
        <textarea name="challenge" value={formData.challenge} onChange={handleChange} rows="3" placeholder="Example: Defensive slides were tiring but I kept pushing..." required />

        <label>🏅 What moment are you most proud of?</label>
        <input type="text" name="proudMoment" value={formData.proudMoment} onChange={handleChange} placeholder="Example: Hitting 8 free throws in a row" required />

        <label>🔄 What would you do differently next time?</label>
        <input type="text" name="improvement" value={formData.improvement} onChange={handleChange} placeholder="Example: Focus more during warm-up" required />

        <label>📈 How do you feel now compared to before the session?</label>
        <textarea name="postFeel" value={formData.postFeel} onChange={handleChange} rows="3" placeholder="Example: I feel more confident and accomplished." required />

        <label>📝 Choose one word to describe this session:</label>
        <input type="text" name="sessionWord" value={formData.sessionWord} onChange={handleChange} placeholder="Example: Growth" required />

        <button type="submit">Finish Reflection</button>
      </form>
      <LastSessionReview />
    </div>
  );
}

export default PostSession;