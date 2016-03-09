// Require the nedb module
var Datastore = require('nedb');
fs = require('fs');

// Initialize two nedb databases. Notice the autoload parameter.
var sounds = new Datastore({ filename: __dirname + '/data/sounds', autoload: true }),
	images = new Datastore({ filename: __dirname + '/data/images', autoload: true });
	phrases = new Datastore({ filename: __dirname + '/data/phrases', autoload: true });


// Create a "unique" index for the photo name, image, and phrase names
sounds.ensureIndex({fieldName: 'name', unique: true});
images.ensureIndex({fieldName: 'name', unique: true});
phrases.ensureIndex({fieldName: 'name', unique: true});

// Load all sounds from the public/photos folder in the database
var sounds_on_disk = fs.readdirSync(__dirname + '/public/sounds');
var images_on_disk = fs.readdirSync(__dirname + '/public/images');

// Insert the sounds in the database. This is executed on every 
// start up of your application, but because there is a unique
// constraint on the name field, subsequent writes will fail 
// and you will still have only one record per image:

sounds_on_disk.forEach(function(photo){
	sounds.insert({
		name: sound
	});
});

// Insert the sounds in the database. This is executed on every 
// start up of your application, but because there is a unique
// constraint on the name field, subsequent writes will fail 
// and you will still have only one record per image:

images_on_disk.forEach(function(image){
	images.insert({
		name: image
	});
});

// Make the photos and users data sets available to the code
// that uses require() on this module:

module.exports = {
	sounds: sounds,
	images: images,
	phrases: phrases
};