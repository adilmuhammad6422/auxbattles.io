const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import the 'path' module
const app = express();
const PORT = process.env.PORT || 8080; // Use environment port or default to 8080

app.use(cors());

app.use(express.static('build'));

app.use(bodyParser.json());

// Array to store votes
let votes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let urls = ["https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", "https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s"];

// Routes
app.post('/addurl', (req, res) => {
  const { index, newUrl } = req.body;

  // Check if index is valid
  const parsedIndex = parseInt(index);
  if (isNaN(parsedIndex) || parsedIndex < 0 || parsedIndex > urls.length) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  // Check if new URL is provided
  if (!newUrl) {
    return res.status(400).json({ error: 'New URL is required' });
  }

  // Insert the new URL at the specified index
  urls.splice(parsedIndex, 0, newUrl);

  // Send a success response
  res.json({ message: `URL added at index ${parsedIndex}` });
});

app.get('/urls', (req, res) => {
  // Send the stored votes array back to the client
  res.json(urls);
});

// Reset votes for a specific category
app.post('/reset-category-votes', (req, res) => {
  const { category } = req.body;
  const start = (category - 1) * 2; // Calculate start index for the category
  votes[start] = 0;  // Reset the first vote count to 0
  votes[start + 1] = 0;  // Reset the second vote count to 0
  res.json({ message: `Category ${category} votes have been reset successfully` });
});

// Routes for voting
app.post('/vote', (req, res) => {
  const { option } = req.body;
  // Increment the count for the specified option
  votes[option]++;
  res.send({ message: 'Vote received successfully' });
});

app.get('/votes', (req, res) => {
  // Send the stored votes array back to the client
  res.json(votes);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

