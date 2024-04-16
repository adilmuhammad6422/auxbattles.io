const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import the 'path' module
const app = express();
const PORT = process.env.PORT || 8080; // Use environment port or default to 8080

app.use(express.static('build'));

app.use(cors());

app.use(bodyParser.json());

// Array to store votes
let votes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let urls = ["https://www.youtube.com/watch?v=SqcY0GlETPk&t=923s", 24, 27, 100, 28, 10, 11, 8, 203, 60];

// Routes
app.post('/addurl', (req, res) => {
  const { option } = req.body;
  // Increment the count for the specified option
  urls[option] = "";
  res.send({ message: 'Vote received successfully' });
});

app.get('/urls', (req, res) => {
  // Send the stored votes array back to the client
  res.json(urls);
});

// Assuming 'votes' is your array storing vote counts
app.post('/reset-category1-votes', (req, res) => {
  votes[0] = 0;  // Reset the first vote count to 0
  votes[1] = 0;  // Reset the second vote count to 0
  res.json({ message: 'Specific votes have been reset successfully' });
});

// Assuming 'votes' is your array storing vote counts
app.post('/reset-category2-votes', (req, res) => {
  votes[2] = 0;  // Reset the first vote count to 0
  votes[3] = 0;  // Reset the second vote count to 0
  res.json({ message: 'Specific votes have been reset successfully' });
});

// Assuming 'votes' is your array storing vote counts
app.post('/reset-category3-votes', (req, res) => {
  votes[4] = 0;  // Reset the first vote count to 0
  votes[5] = 0;  // Reset the second vote count to 0
  res.json({ message: 'Specific votes have been reset successfully' });
});

// Assuming 'votes' is your array storing vote counts
app.post('/reset-category4-votes', (req, res) => {
  votes[6] = 0;  // Reset the first vote count to 0
  votes[7] = 0;  // Reset the second vote count to 0
  res.json({ message: 'Specific votes have been reset successfully' });
});

// Assuming 'votes' is your array storing vote counts
app.post('/reset-category5-votes', (req, res) => {
  votes[8] = 0;  // Reset the first vote count to 0
  votes[9] = 0;  // Reset the second vote count to 0
  res.json({ message: 'Specific votes have been reset successfully' });
});


// Routes
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

