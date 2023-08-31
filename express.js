const express = require('express');
const path = require('path');
require('dotenv').config()
//create an instance
const app = express();

const PORT = 4000;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

  res.sendFile('index.html', err => {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
  });
});

// const token = process.env.personal_token

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
