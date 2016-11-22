'use strict';
require('dotenv').config({ silent: true });
const express    = require('express');
const logger     = require('morgan');
const path       = require('path');
const app        = express();
const PORT       = process.argv[2] || process.env.port || 3000;
const bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', require('./routes/api.js'));

app.listen(PORT, () => console.log('Server here! Listening on', PORT));
