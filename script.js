// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild(renderer.domElement);
// function render() {
// requestAnimationFrame(render);
// renderer.render(scene, camera);
// }
// render();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
var sphGeo= new THREE.BoxGeometry(1,1,1);
var sphMat=new THREE.MeshBasicMaterial({color: 0x6c83f4});
var sph = new THREE.Mesh(sphGeo,sphMat);
scene.add(sph);
function render() {
requestAnimationFrame(render);
renderer.render(scene, camera);
}
render();