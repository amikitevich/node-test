const Router = require('koa-router');
const router = new Router();

const todoController = require('../controllers/todosController');
const BASE_URL = '/api/v1/todos';

router.get(`${BASE_URL}`, todoController.index);
router.get(`${BASE_URL}/:id`, todoController.show);
router.post(`${BASE_URL}`, todoController.create);

module.exports = router;
