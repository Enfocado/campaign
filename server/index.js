const express = require('express');
const Log = require('log');

const app = express();
const port = process.env.PORT || 3002;

const log = new Log('info');

app.use(express.static('client/dist'));

app.get('/test', (req, res) => {
  res.send('hello GET');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => log.info(`listening to ${port}`));
}

module.exports = app;
