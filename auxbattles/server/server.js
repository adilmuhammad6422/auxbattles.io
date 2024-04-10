const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// Array to store votes
let votes = [154, 24, 27, 100, 28, 10, 11, 8, 203, 60];

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
