const site = require('../inc/site')(io);

async function renderQuartos(req, res, _next) {
  console.log('renderQuartos')
  console.log(req)
  console.log("dados de login")
  console.log(req.isAuthenticated())
  console.log(req.passport)
  console.log(req.user)
    site.quartos().then(results => {
  
    res.render('site/quartos', Object.assign({}, {
        title: 'Quartos - Hotel Ventura',
        header: {
          background: 'images/img_bg_5.jpg',
          title: 'Contemple nossas acomodações!'
        },
      quartos: results,
        isAuthenticated: req.isAuthenticated(),
      headerIndex: false,
        user:req.user
      }))
  });
}
  
module.exports = {renderQuartos}