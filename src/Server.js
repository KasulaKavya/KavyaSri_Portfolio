// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'submissions.json');

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
  const newSubmission = req.body;

  // Read existing submissions
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let submissions = [];

    if (!err && data) {
      try {
        submissions = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
        return res.status(500).send('Server error: failed to parse JSON');
      }
    }

    // Append new submission
    submissions.push(newSubmission);

    // Write updated array back to file
    fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).send('Server error: failed to save submission');
      }

      res.send('Form submitted successfully!');
    });
  });
});

// Health check route
app.get('/', (req, res) => {
  res.send('🟢 Form submission API is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
