import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import "./style.css";

// Creating a scene
const scene = new THREE.Scene();

// Defining the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube

// Cube shape
const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.CircleGeometry();
// const geometry = new THREE.ConeGeometry();
// const geometry = new THREE.CylinderGeometry();

// Cube Material
const material = new THREE.MeshBasicMaterial({
  color: "tomato",
});

// Defining the cube using shape and material
const cube = new THREE.Mesh(geometry, material);

// adding cube to the scene
scene.add(cube);

// changing the position of the camera
camera.position.z = 3;

const controls = new OrbitControls(
  camera,
  renderer.domElement
);

// defining the animate function to rotate cube
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// animate the cube
animate();
