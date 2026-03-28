const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ENV  = process.env.APP_ENV || 'local';

app.get('/', (req, res) => {
  res.json({
    message: `Hello from ${ENV}!`,
    version: process.env.APP_VERSION || 'dev',
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT} [${ENV}]`));

module.exports = app;