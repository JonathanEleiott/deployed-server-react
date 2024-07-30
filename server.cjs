/* eslint-disable no-undef */
const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('dist'));

app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/products', (req, res, next) => {
  res.send([
    {
      id: 1,
      name: "punkin",
      price: 1.75
    },
    {
      id: 2,
      name: "pasghetti",
      price: .50
    }
  ])
});

app.post('/products', (req, res, next) => {
  req.body.id = 3;
  res.send(req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});