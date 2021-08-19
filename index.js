const express = require('express');
const app = express();
app.use(express.json());

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', require('./routes'));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const { client } = require('./db');

const PORT = process.env.PORT || 5000;

(async () => {
  await client.connect();

  app.listen(PORT, async () => {
    console.log(`Server is running on ${PORT}`);
  });
})();
