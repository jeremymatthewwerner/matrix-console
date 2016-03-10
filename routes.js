/**
 * This file defines the routes used in your application
 * It requires the database module that we wrote previously.
 */ 

var db = require('./data/database'),
	photos = db.photos,
	users = db.users;

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('sequences', { sequences : true });
	});

	app.get("/sequences",function(req,res){
  		res.render('sequences', { sequences : true }); 
  	});

  	app.get("/pages",function(req,res){
  		res.render('pages', { pages : true }); 
  	});

  	app.get("/sounds",function(req,res){
  		res.render('sounds', { sounds : true }); 
  	});

  	app.get("/images",function(req,res){
  		res.render('images', { images : true }); 
  	});

  	app.get("/phrases",function(req,res){
  		res.render('phrases', { phrases : true }); 
  	});

  	app.get("/websources",function(req,res){
  		res.render('websources', { websources : true }); 
  	});

  	app.get("/shellcmds",function(req,res){
  		res.render('shellcmds', { shellcmds : true }); 
  	});

};

//app.use("/",router);

//app.use("*",function(req,res){
//  res.sendFile(path + "404.html");
//});