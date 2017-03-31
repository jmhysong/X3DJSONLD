var java = require("java");
java.options.push("-Djava.awt.headless=true");
java.options.push("-Xmx1000m");
//java.options.push('-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=5005');
java.classpath.push("saxon9he.jar");
java.classpath.push(".");

function translate(infiles) {
	java.callStaticMethodSync("RunSaxon", "main", infiles);
}

if (typeof module === 'object')  {
	module.exports = translate;
}
