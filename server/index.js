const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use(
//   express.static(
//     path.join(__dirname, '..', 'node_modules', 'font-awesome', 'css')
//   )
// );
// app.use(
//   '/fonts',
//   express.static(
//     path.join(__dirname, '..', 'node_modules', 'font-awesome', 'fonts')
//   )
// );

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./api'));

// 404 error handling. URLs that bypass express.static because the given file does not exist.
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
