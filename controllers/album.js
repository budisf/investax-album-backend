const path = require('path');
const _ = require('lodash');
const fs = require('fs');
const crypto = require('crypto');
const config = require(path.resolve('./config'))
const port = config.data.port()
const conn = config.data.conf()

exports.upload = async (req,res)=>{
  try{
      if (!req.files) {
        res.send({
          status  : false,
          message: 'File not upload'
        });
      }else {
        let data = [];
        //loop all files
        _.forEach(_.keysIn(req.files.documents),(key)=>{
        album = req.body.album
        let photo = req.files.documents[key];
        //move photo to uploads directory
        photo.mv('./albums/'+album+'/'+photo.name);

        //push file details
        data.push({
          album : album,
          name: photo.name,
          mimetype : photo.mimetype,
          size : photo.size,
          path : path.resolve('./albums/'+album+'/'+photo.name),
          raw : 'http://localhost:'+port+'/'+album+'/'+photo.name
          });
         let dataImage = {name:photo.name, category:album}
          let sql = "INSERT INTO images SET ?";
          let query = conn.query(sql, dataImage,(err, results) => {
            if(err) throw err;
            console.log("images uploaded")
          });
        });
         
        res.send({
              status : true,
              message : 'OK',
              data : data
            });
      }
    } catch (err){
      res.status(500).send(err);
    }
}

exports.deleteImage = async(req, res) =>{
  try {
    album = req.params.album
    fileName = req.params.fileName
    fs.unlinkSync('./albums/'+album+'/'+fileName);
    let sql = "DELETE FROM images WHERE name = '"+fileName+"' and category ='"+album+"'";
         conn.query(sql,(err, results) => {
                  if(err) throw err;
          });
    res.send({
          status : true,
          message : 'OK'
        });
    res.end
} catch (error) {
    console.log(error);
}
}

exports.deleteImages = async(req, res) =>{
  try {
      images = req.body;
      images.forEach(function(key){
      album = key.album
      fileName = key.documents
      var ar = fileName.split(',')

      ar.forEach(function(key1){
        fs.unlink('./albums/'+album+'/'+key1, (err) => {
        if (err) {
            throw err;
        }
        console.log("File is deleted.");
       });
         let sql = "DELETE FROM images WHERE name = '"+key1+"' and category ='"+album+"'";
         conn.query(sql,(err, results) => {
                  if(err) throw err;
          });
      })
    });
    res.send({
          status : true,
          message : 'OK'
        });
    res.end
} catch (error) {
    console.log(error);
}
}

exports.readFile = async(req, res) =>{
  try {
    album = req.params.album
    fileName = req.params.fileName
    res.sendFile(path.resolve('./albums/'+album+'/'+fileName), {
     message : 'OK'
     })
    res.end
} catch (error) {
    console.log(error);
}
}

exports.readFiles = (req, res) =>{
  const directoryPath = path.resolve('./albums');
   let sql = "SELECT * FROM images";
   conn.query(sql,(err, results,fields) => {

            if(err) throw err;
            let data = []
            for (i=0; i<req.body.limit;i++){
              var id = ""+results[i].id
              idMd5 = crypto.createHash('md5').update(id).digest('hex');
              data.push({
               id : idMd5,
               album : results[i].category,
               name : results[i].name,
               path : directoryPath+'/'+results[i].category+'/'+results[i].name,
               raw : 'http://localhost:'+port+'/photos/'+results[i].category+'/'+results[i].name,
              });
            }
            let count = results.length
            res.send(JSON.stringify({
              "status": 200, 
              "message": "ok", 
              "documents": data,
              "count" : count,
              "skip" : req.body.skip,
              "limit" : req.body.limit
            }));
    });
}
