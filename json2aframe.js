"use strict";

// Convert X3D JSON to JAVA

process.argv.shift();
process.argv.shift();

var convertJSON = require('./convertJSON.js');

convertJSON({'./AframeSerializer.js': ".aframe"});
