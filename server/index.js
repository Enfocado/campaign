const express = require('express');

const app = express();
const port = process.env.PORT || 3002;


app.use(express.static('client/dist'));

app.get('/test', (req, res) => {
  res.send('hello GET');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`listening to ${port}`));
}


module.exports = app;
