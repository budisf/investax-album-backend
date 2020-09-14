const multer = require('multer')
const express = require('express');
const path = require('path');
const album = require('./controllers/album');
const health = require('./controllers/health');
 


module.exports = app =>{ 

	app.delete('/photos/:album/:fileName',album.deleteImage);
	app.delete('/photos',album.deleteImages);
	app.get('/photos/:album/:fileName', album.readFile);
	app.post('/photos/list', album.readFiles);
	app.post('/', album.readFiles);
	app.put('/photos',album.upload);
	app.get('/health',health.cek);

}
