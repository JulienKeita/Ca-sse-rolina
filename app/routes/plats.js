// ROUTES PLATS
var Plats = require('../models/plats.js');
module.exports 	= function(app) {

	app.get('/plats', Plats.findAll);
	app.post('/plats', Plats.create);
	app.put('/plats/:id', Plats.update);
	app.delete('/plats/:id', Plats.delete);
    
}
