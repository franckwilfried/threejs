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


// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
// camera.position.z=5;
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth,window.innerHeight);
// document.body.appendChild(renderer.domElement);
// var sphGeo= new THREE.BoxGeometry(1,1,1);
// var sphMat=new THREE.MeshBasicMaterial({color: 0x6c83f4});
// var sph = new THREE.Mesh(sphGeo,sphMat);
// scene.add(sph);
// function render() {
// requestAnimationFrame(render);
// renderer.render(scene, camera);
// }
// render();

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);
camera.position.set(5 , 5 , 5);
camera.lookAt(scene.position); //Exécutin du positionnement avant la rotation camera
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

var lightAmb = new THREE.AmbientLight (0xffffff) ;
var lightSpot = new THREE.SpotLight (0xffffff, 1, 100, Math.PI/4) ;
var lightpoi = new THREE.PointLight(0xffffff , 1 , 1000)
lightpoi.position.set(0 , 5 , 0)
lightSpot.position.set(0 , 1 , 5)


const geometry = new THREE.SphereGeometry( 2 , 32 , 32 );
const material = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry, material );

lightSpot.target = sphere
var axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper , sphere , lightAmb , lightpoi , lightSpot);

function render() {
requestAnimationFrame(render);
renderer.render(scene, camera);
}
render();