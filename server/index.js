const Koa = require('koa');
const articlesRoutes = require('./routes/articles.routes');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(articlesRoutes.routes());

const server = app.listen(PORT).on('error', err => {
  console.error(err, 'error');
});

module.exports = server;
