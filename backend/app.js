const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const https = require('https');
const fs = require('fs');


const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/indianintelligencetest.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/indianintelligencetest.com/fullchain.pem')
};


mongoose.connect('mongodb+srv://iitnext:rSccZOk7tg5DTvYk@cluster0.agf0uee.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB', error));

app.use(require('./Router/routes'));


const httpsServer = https.createServer(options, app);
const port = process.env.PORT || 5000;
httpsServer.listen(port, () => console.log(`Server running on port ${port}`));
