const express = require('express');
const app = express();
const mongoose= require('mongoose');
const body = require('connect-multiparty')();
const routes = require('./routes/public');
const config = require('./settings/config');
const cors = require('cors');

app.use(cors());
app.use("/",body,routes);

mongoose.connect(config.db, err=>{
	if(err){
		console.log(err);
	} else {
		console.log("ok");
	}
});

app.listen(config.SERVER.port, err => {
	if(err){
		console.log(err);
	} else {
		console.log("Server running in port", config.SERVER.port);
	}
})
