const env = process.env.NODE_ENV || 'test';
const config = require('../../knexfile')[env];
const knex = require('knex')(config);

const index = async ctx => {
  try {
    const articles = await knex('articles').select();
    ctx.body = {
      data: articles
    };
  } catch (e) {
    console.error(e);
  }
};

const show = async ctx => {
  try {
    const article = await knex('articles')
      .select()
      .where({ id: +ctx.params.id });
    if (article.length === 0) {
      throw new Error('The requested resource does not exists');
    }
    ctx.body = {
      data: article
    };
  } catch (error) {
    ctx.body = {
      error: error.message
    };
    ctx.status = 404;
  }
};

module.exports = { index, show };
