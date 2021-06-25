const meals = [
    {
      name: 'Carpaccio fresco',
      description: 'Entrada Carpaccio de salmón con cítricos',
      currency:'$US',
      price: 65.50
    },
    {
      name: 'Risotto de berenjena',
      description: 'Risotto de berenjena y queso de cabra',
      currency:'$US',
      price: 47.00
    },
  ]

const controller = {
  listMeals: function(req, res) { 
    console.log(req.client)
    res.render('index', { meals });
  }
}

module.exports = controller