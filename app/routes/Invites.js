// ROUTES INVITES
var Invites = require('../models/invites.js');
module.exports 	= function(app) {

	app.get('/invites', Invites.findAll);
	app.post('/invites', Invites.create);
	app.put('/invites/:id', Invites.update);
	app.delete('/invites/:id', Invites.delete);
    
}
