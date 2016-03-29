// ROUTES PLATS
var Soirees = require('../models/soirees.js');
module.exports 	= function(app) {

	app.get('/soirees', Soirees.findAll);
	app.post('/soirees', Soirees.create);
	app.put('/soirees/:id', Soirees.update);
	app.delete('/soirees/:id', Soirees.delete);
    
}
