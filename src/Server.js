const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'submissions.json');

app.use(express.json());
app.use(cors({
  origin: 'https://kavyas-projects-33508890-kavya-sri-portfolio.vercel.app',
  methods: ['POST', 'GET'],
  credentials: true
}));

app.post('/submit', (req, res) => {
  const newSubmission = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let submissions = [];

    if (!err && data) {
      try {
        submissions = JSON.parse(data);
      } catch (parseErr) {
        return res.status(500).json({ error: 'Failed to parse existing JSON' });
      }
    }

    submissions.push(newSubmission);

    fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Failed to save submission' });
      res.status(200).json({ message: 'Form submitted successfully!' });
    });
  });
});

app.get('/', (req, res) => {
  res.send('🟢 Form submission API is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
