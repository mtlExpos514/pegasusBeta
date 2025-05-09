import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Feedback submitted to trainer: " + feedback);
    setFeedback('');
  };

  return (
    <div>
      <h2>Feedback to Trainer</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="5"
          cols="40"
          placeholder="Write your feedback here..."
          required
        />
        <br />
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;