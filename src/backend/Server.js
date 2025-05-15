const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'submissions.json');

app.use(express.json());

// ✅ Allow CORS from Vercel
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://kavya-sri-portfolio-myp8pw4mb-kavyas-projects-33508890.vercel.app'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('🟢 Form submission API is running');
});

app.post('/submit', (req, res) => {
  const newSubmission = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let submissions = [];

    if (!err && data) {
      try {
        submissions = JSON.parse(data);
      } catch {
        return res.status(500).json({ error: 'Invalid JSON' });
      }
    }

    submissions.push(newSubmission);

    fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Failed to write' });

      res.status(200).json({ message: 'Form submitted successfully!' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
