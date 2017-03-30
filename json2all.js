"use strict";

// Convert X3D JSON to various formats

process.argv.shift();
process.argv.shift();

var convertJSON = require('./convertJSON.js');

convertJSON({
	'./JavaScriptSerializer.js' : ".sail.js",
	'./JavaSerializerAppend.js' : ".java",
	'./PythonSerializer.js': ".py",
	'./DOMSerializer.js': ".x3d.new"
});
