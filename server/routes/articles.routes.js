const Router = require('koa-router');
const router = new Router();

const artController = require('../controllers/articlesController');
const BASE_URL = '/api/v1/articles';

router.get(`${BASE_URL}`, artController.index);
router.get(`${BASE_URL}/:id`, artController.show);
router.post(`${BASE_URL}`, artController.create);

module.exports = router;
