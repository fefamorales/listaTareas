const mongoose = require('mongoose');
const schema = mongoose.Schema;


var tarea = new schema({
	name: String

});

module.exports = mongoose.model('Tarea', tarea);