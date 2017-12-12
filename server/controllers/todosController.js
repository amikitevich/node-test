const env = process.env.NODE_ENV || 'test';
const config = require('../../knexfile')[env];
const knex = require('knex')(config);

const index = async ctx => {
  try {
    const todos = await knex('todos').select();
    ctx.body = {
      data: todos
    };
  } catch (e) {
    console.error(e);
  }
};

const show = async ctx => {
  try {
    const todo = await knex('todos')
      .select()
      .where({ id: +ctx.params.id });
    if (todo.length === 0) {
      throw new Error('The requested resource does not exists');
    }
    ctx.body = {
      data: todo
    };
  } catch (error) {
    ctx.body = {
      error: error.message
    };
    ctx.status = 404;
  }
};

const create = async ctx => {
  try {
    const { body } = ctx.request;
    const todo = await knex('todos').insert(body);
    if (todo.length === 0) {
      throw new Error('The resource already exists');
    }
    ctx.status = 201;
    ctx.set('Location', `${ctx.request.URL}/${todo[0]}`);
    ctx.body = {
      data: todo
    };
  } catch (e) {
    ctx.status = 409;
    ctx.body = {
      error: 'The resource already exists'
    };
  }
};

module.exports = { index, show, create };
