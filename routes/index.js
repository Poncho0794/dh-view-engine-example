var express = require('express');
var router = express.Router();
const mealController = require('../controllers/meals.controller')

// peticion -> middleware -> mealController.listMeals -> error;
/* GET home page. */
router.get('/', mealController.listMeals);

module.exports = router;
