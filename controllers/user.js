const UserModel = require('../models/user');
const UserController = {
	/**
	 * Get all user list
	 */
    getUsers: function(req, res) {
        UserModel.find({}, function(err, user) {
            if (err) {
                res.send(err);
            }
            res.send(user);
            return;
        });
    },
    getUser: function(req, res) {
        UserModel.findById(req.params.id, function(err, user) {
            if (err) {
                res.send(err);
                return;
            }
            res.send(user);
            return;
        });
    },
    updateUser: function(req, res) {
        const id = req.params.id,
            userData = req.body;
        UserModel.findByIdAndUpdate(id, userData, function(err, data) {
            // Handle the error using the Express error middleware
            if (err) return next(err);

            // Render not found error
            if (!data) {
                return res.status(404).json({
                    message: 'User with id ' + id + ' can not be found.'
                });
            }

            res.send({
                type: true,
                data: "User: " + req.params.id + " updated successfully"
            });
        });
    },
    deleteUser: function(req, res) {
        UserModel.findByIdAndRemove(new Object(req.params.id), function(err, user) {
            if (err) {
                res.status(500);
                res.send({
                    type: false,
                    data: "Error occured: " + err
                });
                return;
            }
            res.send({
                type: true,
                data: "User: " + req.params.id + " deleted successfully"
            });
            return;
        });
    },
    saveUser: function(req, res) {
        res.header('Content-Type', 'application/json');
        const userData = {
            name: req.body.name,
            created_date: new Date()
        };
        var userSchema = new UserModel(userData);
        userSchema.save(function(err, user) {
            if (err) {
                res.send(error.message);
            }
            res.send({ 'success': user });
            return;
        });
    }
};

module.exports = UserController;