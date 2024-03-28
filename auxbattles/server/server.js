const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get('/message', (req, res) => {
  const data = { message: 'Hello from Node.js backend!' };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});