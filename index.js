var fs = require('fs')
var filename = '/home/chetan/js-writer/data/HelloWorld.java';
fs.readFile(filename, 'utf8', function(err, data)
{
	console.info(data);
	var replacer = data.replace("HelloIndia","Hello Chetan");
// Logic here
	fs.writeFile(filename, replacer, 'utf8', function(err){
		console.log(err);
	});
});
