'use strict';

module.exports = function(app) {
	const userController = require('../controllers/user');
	
	app.route('/users')
	.get(userController.getUsers)
	.post(userController.saveUser);

	app.route('/user/:id')
	.get(userController.getUser)
	.put(userController.updateUser)
	.delete(userController.deleteUser);

	app.route('/')
	.get(function(req, res) {
		res.send('Api server working');
	})
};