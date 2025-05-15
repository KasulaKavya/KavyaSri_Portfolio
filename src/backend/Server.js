const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'submissions.json');

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://kavyas-projects-33508890-kavya-sri-portfolio.vercel.app'],
  methods: ['GET', 'POST'],
  credentials: true
}));

// Health check
app.get('/', (req, res) => {
  res.send('🟢 Form submission API is running');
});

// Submit form
app.post('/submit', (req, res) => {
  const newSubmission = req.body;
  console.log('📩 New submission received:', newSubmission);

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let submissions = [];

    if (!err && data) {
      try {
        submissions = JSON.parse(data);
      } catch (parseErr) {
        console.error('❌ JSON parse error:', parseErr);
        return res.status(500).json({ error: 'Invalid data format' });
      }
    }

    submissions.push(newSubmission);

    fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), (err) => {
      if (err) {
        console.error('❌ Write error:', err);
        return res.status(500).json({ error: 'Failed to save' });
      }

      console.log('✅ Submission saved');
      res.status(200).json({ message: 'Form submitted successfully!' });
    });
  });
});

// View all submissions (for dev)
app.get('/submissions', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Could not read data' });

    try {
      const submissions = JSON.parse(data);
      res.status(200).json(submissions);
    } catch (e) {
      res.status(500).json({ error: 'Corrupt JSON file' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
