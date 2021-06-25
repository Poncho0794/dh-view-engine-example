var express = require('express');
var router = express.Router();
const mealController = require('../controllers/meals.controller')

// peticion -> middleware -> mealController.listMeals -> error;
/* GET home page. */
router.get('/detail/:id', mealController.getProduct);

module.exports = router;
