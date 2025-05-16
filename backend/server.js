const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'submissions.json');

app.use(express.json());
app.use(cors());

// Handle contact form submissions
app.post('/api/contact', (req, res) => {
  const newSubmission = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let submissions = [];

    if (!err && data) {
      try {
        submissions = JSON.parse(data);
      } catch (parseErr) {
        return res.status(500).json({ error: 'Failed to parse existing data' });
      }
    }

    submissions.push({ ...newSubmission, timestamp: new Date().toISOString() });

    fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Failed to save message' });
      return res.status(200).json({ message: '✅ Message saved successfully!' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
