const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'WebContent' directory
app.use(express.static(path.join(__dirname)));

// Enable parsing JSON bodies for POST requests
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

// Handle POST requests to /raire
app.post('/raire', (req, res) => {
  // Here you should implement the logic to process the request and return a response
  res.json({ message: 'This is a placeholder response for /raire POST request' });
});

// Start the server
const port = 8081;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
