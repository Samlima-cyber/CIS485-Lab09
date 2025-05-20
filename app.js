const express = require('express');
const app = express();
app.use(express.json());

const fortunes = [
  "You will have a great day!",
  "If you don't have time to do it right the first time...",
  "A surprise is waiting for you around the corner.",
  "You cannot act on what you haven't imagined.",
  "Good fortune is coming your way.",
  "Perfect practice makes perfect.",
  "Your hard work will soon pay off.",
  "Don't comment bad code, rewrite it.",
  "You can have anything you want, but not everything you want.",
  "The best time to plant a tree is 20 years ago...",
  "When life gives you lemons, you better hope for sugar too.",
  "An exciting opportunity lies ahead.",
  "Your life flashback will include ads.",
  "The wish is the father of the thought.",
  "Loneliness isn't the absence of people but the absence of meaning."
];

// NEW: Home route for browser access
app.get('/', (req, res) => {
  res.send(`
    <h2>Welcome to the Fortune API</h2>
    <ul>
      <li><a href="/fortunes">GET /fortunes</a> - Random fortune</li>
      <li>GET /fortunes?count=3 - Multiple random fortunes</li>
      <li>GET /fortunes?id=2 - Fortune by ID</li>
      <li>POST /submit - Send a message (use curl or Postman)</li>
      <li>POST /fortunes - Add a new fortune</li>
    </ul>
  `);
});

// GET /fortunes
app.get('/fortunes', (req, res) => {
  const { count, id } = req.query;

  if (id !== undefined) {
    const idx = parseInt(id);
    if (isNaN(idx) || idx < 0 || idx >= fortunes.length) {
      return res.status(400).json({ error: 'Invalid fortune ID' });
    }
    return res.json({ fortune: fortunes[idx] });
  }

  const amount = parseInt(count) || 1;
  const selected = [];
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    selected.push(fortunes[randomIndex]);
  }
  res.json({ fortunes: selected });
});

// POST /submit
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }
  res.json({ success: true, response: `Thanks, ${name}! Your message was: "${message}"` });
});

// POST /fortunes
app.post('/fortunes', (req, res) => {
  const { newFortune } = req.body;
  if (!newFortune || typeof newFortune !== 'string') {
    return res.status(400).json({ error: 'New fortune must be a non-empty string.' });
  }
  fortunes.push(newFortune);
  res.status(201).json({ success: true, message: 'Fortune added!', id: fortunes.length - 1 });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});