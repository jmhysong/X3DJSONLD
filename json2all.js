"use strict";

// Convert X3D JSON to various formats

process.argv.shift();
process.argv.shift();

var convertJSON = require('./convertJSON.js');

convertJSON({
	'./JavaSerializerNew2.js' : ".java",
	'./PythonSerializer.js': ".py",
	'./DOMSerializer.js': ".x3d.new"
});
