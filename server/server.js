const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '96522e8b569c45ffb9dbada27a420d70',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.use(express.static(path.join(__dirname, "../public")));

const port = process.env.PORT || 4005;

app.listen(port, () => console.log(`We vibin on port ${port}`));