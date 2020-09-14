
const healthChecks = require('healthchecks-api');
const path = require('path');
const config = require(path.resolve('./config'))

exports.cek = async(req, res) =>{
	//create database connection

	const healthcheck = {
		message : 'ok',
	}

	config.data.conf()

	try {

	  	res.send(healthcheck)
	} catch (e) {
		healthcheck.message = e;
		res.status(503).send();
	}
    // res.json({status: 'UP'});
}

