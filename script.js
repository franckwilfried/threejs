var chrono=new THREE.Clock();
chrono.start() ;
var temps=chrono.getElapsedTime();
var vAng=1;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,0,300)
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

var axisHelper = new THREE.AxesHelper(70);
scene.add(axisHelper);
var boxGeo= new THREE.BoxGeometry(50,50,50);
var boxMat=new THREE.MeshLambertMaterial({color: 0xff00ff});
var box = new THREE.Mesh(boxGeo,boxMat);

scene.add(box);

var pointLight = new THREE.PointLight( 0xffffff);
pointLight.position.set( 60, 60, 60 );
scene.add(pointLight);
var spotLight = new THREE.SpotLight( 0xffffff);
spotLight.position.set(-300,0,0);
scene.add(spotLight);

function render() {
requestAnimationFrame(render);
temps=temps+1/30
box.rotation.y=vAng*temps;
renderer.render(scene, camera);
}

render();