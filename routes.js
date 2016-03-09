/**
 * This file defines the routes used in your application
 * It requires the database module that we wrote previously.
 */ 

var db = require('./data/database'),
	photos = db.photos,
	users = db.users;

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('sequences', { msg : 'Hello, world!' });
	});

	app.get("/sequences",function(req,res){
  		res.render('sequences', { tab : 'sequences' }); 
  	});

  	app.get("/pages",function(req,res){
  		res.render('pages', { tab : 'pages' }); 
  	});

  	app.get("/sounds",function(req,res){
  		res.render('sounds', { tab : 'sounds' }); 
  	});

  	app.get("/images",function(req,res){
  		res.render('images', { tab : 'images' }); 
  	});

  	app.get("/phrases",function(req,res){
  		res.render('phrases', { tab : 'phrases' }); 
  	});

  	app.get("/websources",function(req,res){
  		res.render('websources', { tab : 'websources' }); 
  	});

  	app.get("/shellcmds",function(req,res){
  		res.render('shellcmds', { tab : 'shellcmds' }); 
  	});

};

//app.use("/",router);

//app.use("*",function(req,res){
//  res.sendFile(path + "404.html");
//});