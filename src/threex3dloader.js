var THREE = require('three');
var loader = require('./index.js');
loader.x3dLoader(THREE);

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 3;
camera.position.x = 3;
camera.position.y = 3;
camera.lookAt(new THREE.Vector3(0, 0, 0));

const httpRequest = new XMLHttpRequest();

var file = "ArchHalf.json";





if (file.endsWith(".xml")) {
	httpRequest.overrideMimeType('text/xml');
} else {
	httpRequest.overrideMimeType('text/json');
}

httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var text = httpRequest.responseText;

            var loader = new THREE.X3DLoader();
            const scene = loader.parse(text);
            var light = new THREE.AmbientLight( 0x404040 ); // soft white light
            scene.add( light );
            renderer.render(scene, camera);
        } else {
            alert('There was a problem with the request.');
        }
    }
};

httpRequest.open("GET", file);
httpRequest.send(null);
