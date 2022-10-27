const express = require('express');
const path = require('path');
const app = express('path');

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/portfolio-pedro-martini-await'));

app.get ('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/portfolio-pedro-martini-await/index.html')
});

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta ' + PORT);
})

