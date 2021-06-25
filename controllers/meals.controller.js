/**
 * Los IDs pueden ser: UUID, Hashes, valores numericos, strings
 */
const meals = [
    {
      id: 132,
      name: 'Carpaccio fresco',
      description: 'Entrada Carpaccio de salmón con cítricos',
      currency:'$US',
      price: 65.50,
      img: '/images/Carpaccio-de-salmon.jpg'
    },
    {
      id: 22,
      name: 'Risotto de berenjena',
      description: 'Risotto de berenjena y queso de cabra',
      currency:'$US',
      price: 47.00,
      img: '/images/Risotto-berenjena-queso-cabra.jpg'
    },
    {
      id: 33,
      name: 'Esparragos',
      description: '',
      currency:'$US',
      price: 47.00,
      img: '/images/Risotto-berenjena-queso-cabra.jpg'
    },
  ]

const controller = {
  listMeals: function(req, res) { 
    console.log(req.client)
    res.render('index', { meals });
  },
  getProduct: function(req, res, next) {
    
    const mealId = parseInt(req.params.id);
    if(isNaN(mealId)) throw Error('Product Not Found')
    const meal = meals.find(meal => meal.id === mealId)
    res.render('detalleMenu', { meal })
  }
}

module.exports = controller