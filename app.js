const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const route = require('./routes/router');
const middlewares = require('./middlewares');

const app = express(); 
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(rescue(route));

app.use(middlewares.errorMiddleware);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;