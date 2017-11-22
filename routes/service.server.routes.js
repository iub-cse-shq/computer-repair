module.exports = function(app){

 var services = require('./../controllers/services.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

app.route('/service')
    .get(services.service)

app.route('/services/new')
	.get(services.new);
	
app.route('/services/all')
	.get(services.all);
	
app.route('/services/edit/:serviceId')
	.get(services.edit);
	
app.route('/services/:serviceId')
	.get(services.view);
	
 app.route('/api/services')
	.get(services.list)
	.post(users.requiresLogin, services.create);

  app.route('/api/services/:serviceId')
	.get(services.read)
  .delete(users.requiresLogin, services.delete);

	app.route('/api/services/edit/:productId')
	.get(services.read)
	.put(users.requiresLogin, services.update);


app.param('serviceId', services.serviceByID);


}

