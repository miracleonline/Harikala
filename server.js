const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the 'assets' and 'forms' directories
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/forms', express.static(path.join(__dirname, 'forms')));
app.use('/js', express.static(path.join(__dirname, 'assets/js')));
app.use('/css', express.static(path.join(__dirname, 'assets/css')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
