import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Analytics() {
  const [reportCount, setReportCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/api/reports')
      .then(response => {
        setReportCount(response.data.length);
      });
  }, []);

  return (
    <div>
      <h2>Analytics</h2>
      <p>Total number of reports: {reportCount}</p>
    </div>
  );
}

export default Analytics;
