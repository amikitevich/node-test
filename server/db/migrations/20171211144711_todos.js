exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments();
    table
      .string('title')
      .notNullable()
      .unique();
    table.text('body').notNullable();
    table.string('tags').notNullable();
    table.tinyint('is_completed').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};
