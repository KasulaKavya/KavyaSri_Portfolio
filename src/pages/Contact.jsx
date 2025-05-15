const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'submissions.json');

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-vercel-url.vercel.app'  // use your actual Vercel frontend domain
  ]
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
        return res.status(500).json({ error: 'Invalid data format' });
      }
    }

    submissions.push(newSubmission);

    fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Failed to save submission' });
      res.status(200).json({ message: 'Form submitted successfully!' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
