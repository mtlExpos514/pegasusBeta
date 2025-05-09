import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function ProgressChart() {
  const [motivationData, setMotivationData] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('trainingSessions');
    if (stored) {
      const sessions = JSON.parse(stored);
      const motivations = sessions.map((s, i) => ({
        label: `Session ${i + 1}`,
        value: parseInt(s.motivation || 0)
      }));
      setMotivationData(motivations);
    }
  }, []);

  const chartData = {
    labels: motivationData.map((d) => d.label),
    datasets: [
      {
        label: 'Motivation Level',
        data: motivationData.map((d) => d.value),
        fill: false,
        borderColor: '#ff4d4d',
        tension: 0.2
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 10
      }
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#111', borderRadius: '10px', color: 'white' }}>
      <h3>Motivation Progress</h3>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default ProgressChart;