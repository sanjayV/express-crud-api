const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const UserModel = new Schema({
	name: {
		type: String,
		require: true,
		trim: true
	},
    created_date: {
        type: Date,
        required: true,
        trim: true
    }
});

const UserM = mongoose.model('User', UserModel);
module.exports = UserM;