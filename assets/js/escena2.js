const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, 700 / 700, 0.1, 1000);
escena.background = new THREE.CubeTextureLoader()
    .setPath('resourses/textures/cubeMaps/')
    .load([
        'px.png',
        'nx.png',
        'py.png',
        'ny.png',
        'pz.png',
        'nz.png'
    ]);
const renderizador = new THREE.WebGLRenderer();

renderizador.setSize(900, 700);
document.body.appendChild(renderizador.domElement);
const controles = new THREE.OrbitControls(camara, renderizador.domElement);
const luzPuntual = new THREE.SpotLight(0xffffff);
luzPuntual.position.set(1000, 1000, -1000);
$(".fbx2").append(renderizador.domElement);
luzPuntual.castShadow = true;

luzPuntual.shadow.mapSize.width = 1024;
luzPuntual.shadow.mapSize.height = 1024;

luzPuntual.shadow.camera.near = 500;
luzPuntual.shadow.camera.far = 4000;
luzPuntual.shadow.camera.fov = 30;

escena.add(luzPuntual);
const cargador = new THREE.FBXLoader();
cargador.load("resourses/mesh/modelo.fbx", function (objeto) {

    objeto.traverse(function (hijo) {

        if (hijo.isMesh) {

            hijo.castShadow = true;
            hijo.receiveShadow = true;
            if (hijo.name == "Madera") {
                const texturaMadera = new THREE.TextureLoader().load("resourses/mesh/model/Wood.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaMadera,
                });

            } else if (hijo.name == "pano") {
                const texturaNormalPano = new THREE.TextureLoader().load("resourses/textures/panonormal.jpg");
                const texturaPano = new THREE.TextureLoader().load("resourses/textures/pano.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaPano,
                    normalMap: texturaNormalPano,

                });

            } else if (hijo.name == "metal") {
                const texturaMetal = new THREE.TextureLoader().load("resourses/textures/Metal.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaMetal,
                    specular: 0x222222,
                    shininess: 100,
                });

            } else if (hijo.name == "ball1") {
                const texturaBall1 = new THREE.TextureLoader().load("resourses/textures/ball1.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaBall1,

                });

            } else if (hijo.name == "ball2") {
                const texturaBall2 = new THREE.TextureLoader().load("resourses/textures/ball2.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaBall2,
                });
            } else if (hijo.name == "ball3") {
                const texturaBall3 = new THREE.TextureLoader().load("resourses/textures/ball3.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaBall3,
                });

            } else if (hijo.name == "ball4") {
                const texturaBall4 = new THREE.TextureLoader().load("resourses/textures/ball4.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaBall4,
                });

            } else if (hijo.name == "ball5") {
                const texturaBall5 = new THREE.TextureLoader().load("resourses/textures/ball5.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaBall5,
                });

            } else if (hijo.name == "ball6") {
                const texturaBall6 = new THREE.TextureLoader().load("resourses/textures/ball6.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaBall6,
                });

            } else if (hijo.name == "ball7") {
                const texturaBall7 = new THREE.TextureLoader().load("resourses/textures/ball7.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaBall7,
                });
            } else if (hijo.name == "ball8") {
                const texturaBall8 = new THREE.TextureLoader().load("resourses/textures/ball8.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaBall8,
                });
            } else if (hijo.name == "blanca") {
                hijo.material = new THREE.MeshPhongMaterial({
                    color: 0xffffff,
                });

            } else if (hijo.name == "taco") {
                const texturaMadera = new THREE.TextureLoader().load("resourses/mesh/model/Wood.jpg");
                hijo.material = new THREE.MeshPhongMaterial({
                    map: texturaMadera,
                });

            } else if (hijo.name == "negro") {
                hijo.material = new THREE.MeshPhongMaterial({
                    color: 0xdddddd,
                });

            }

        }

    });
    objeto.scale.y = 20;
    objeto.scale.x = 20;
    objeto.scale.z = 20;
    objeto.rotation.y = -1.5708;
    objeto.position.z = -15;
    objeto.position.z = 15;
    objeto.position.y = -90;
    escena.add(objeto);

});

camara.position.z = 15;

const animar = function () {
    requestAnimationFrame(animar);

    renderizador.render(escena, camara);
};

animar();
