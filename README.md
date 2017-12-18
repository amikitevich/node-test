## Node test rest api.


Install Seed Data
---
node_modules/knex/bin/cli.js migrate:latest --env test
node_modules/knex/bin/cli.js seed:run --env test

Run Server
---
npm start

Remove Mirgations & fixtures:
---
node_modules/knex/bin/cli.js mirgate:rollback  
or just revert changes in the file `test.sqlite3`

Run test
---
npm run test