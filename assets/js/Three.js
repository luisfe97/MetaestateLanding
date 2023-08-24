const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 700 / 700, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(900, 700);
document.body.appendChild(renderer.domElement);
const spotLight = new THREE.SpotLight(0xffffff); // Color de la luz (blanco en este caso)
scene.add(spotLight); // Agregar la luz a la escena

spotLight.position.set(-500, 500, 0); // Posición de la luz (x, y, z)
spotLight.target.position.set(0, 0, 0); // Punto hacia el cual se dirige la luz

// Configuración adicional para definir la dirección de la luz
spotLight.target.updateMatrixWorld(); // Actualizar la matriz del objetivo
spotLight.target.updateMatrixWorld(true); // Forzar la actualización de la matriz
spotLight.lookAt(spotLight.target.position); // Apuntar la luz hacia el objetivo
spotLight.angle = Math.PI / 4; // Ángulo del cono de luz (en radianes)
spotLight.intensity = 1.5; // Intensidad de la luz




const spotLight2 = new THREE.SpotLight(0xffffff); // Color de la luz (blanco en este caso)
scene.add(spotLight2); // Agregar la luz a la escena

spotLight2.position.set(500, 500, 0); // Posición de la luz (x, y, z)
spotLight2.target.position.set(0, 0, 0); // Punto hacia el cual se dirige la luz

// Configuración adicional para definir la dirección de la luz
spotLight2.target.updateMatrixWorld(); // Actualizar la matriz del objetivo
spotLight2.target.updateMatrixWorld(true); // Forzar la actualización de la matriz
spotLight2.lookAt(spotLight.target.position); // Apuntar la luz hacia el objetivo
spotLight2.angle = Math.PI / 4; // Ángulo del cono de luz (en radianes)
spotLight2.intensity = 1.5; // Intensidad de la luz

$(".fbx1").append(renderer.domElement);
const ambient = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( ambient );

const lightP1 = new THREE.PointLight(0xf3f1c0, 2, 100);
lightP1.position.set(8, 5, -8);
scene.add(lightP1);
lightP1.rotation.z = 50;
lightP1.castShadow = true;
const sphereSize1 = 1;
const pointLightHelper1 = new THREE.PointLightHelper(lightP1, sphereSize1);
scene.add(pointLightHelper1);
const light = new THREE.PointLight(0xffffff, 0.3, 150);
light.position.set(20, 20, -10);
scene.add(light);
const loader = new THREE.FBXLoader();
loader.load("../resourses/mesh/int.fbx", function (object) {
  object.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      
    }
  });

  scene.add(object);
});

camera.position.z = 100;
camera.position.y = 170;
camera.position.x = 400;

// ... (tu código actual) ...

// Controlador de primera persona
const controls = new THREE.PointerLockControls(camera, document.body);
scene.add(controls.getObject());

const onKeyDown = function (event) {
  switch (event.code) {
    case 'ArrowUp':
    case 'KeyW':
      controls.moveForward(10);
      break;

    case 'ArrowLeft':
    case 'KeyA':
      controls.moveRight(-10);
      break;

    case 'ArrowDown':
    case 'KeyS':
      controls.moveForward(-10);
      break;

    case 'ArrowRight':
    case 'KeyD':
      controls.moveRight(10);
      break;
  }
};

document.addEventListener('keydown', onKeyDown);

// Cuando se hace clic en la pantalla, se activa el controlador
document.body.addEventListener('click', function () {
  controls.lock();
});

// Evento de cambio de estado del controlador
controls.addEventListener('lock', function () {
  // El controlador está activado
});

controls.addEventListener('unlock', function () {
  // El controlador está desactivado
});

// Render loop
const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();


