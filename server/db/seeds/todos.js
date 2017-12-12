exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('todos').insert([
        {
          body: 'An Introduction to Building Test Driven RESTful APIs with Koa ...',
          title: 'An Introduction to Building Test Driven RESTful APIs with Koa',
          tags: 'koa, tdd, nodejs'
        },
        {
          body: 'Going real time with Socket.IO, Node.Js and React',
          title: 'Going real time with Socket.IO, Node.Js and React',
          tags: 'socket.io, nodejs, react'
        }
      ]);
    });
};
