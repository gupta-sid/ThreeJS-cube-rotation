
$(function rerender() {
  var scene = new THREE.Scene();

  // 2nd param: aspect ratio, clicking: last 2
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // takes ASCII values & assigns them physical characters
  var renderer = new THREE.WebGLRenderer();

  // Set background color (black)
  renderer.setClearColor(0x000000);

  // Set renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Length of each of the legs of the axis
  var axis = new THREE.AxisHelper(500);

  // The scene, you can think about it, as the container that holds all of these objects.
  scene.add(axis);

  var cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xdddddd,
    wireframe: true
  });

  // Create the cube using defined geometry and material
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;

  scene.add(cube);

  camera.position.x = 0;
  camera.position.y = 40;
  camera.position.z = 40;

  camera.lookAt(scene.position);

  $("#webGL-container").append(renderer.domElement);

  $("#page").keydown(function(event) {
    if ( event.which == 37 ) {
       event.preventDefault();
       var newCamXPos = parseInt($("#page").attr('data-cameraposx')) + 5;
       $("#page").attr('data-cameraposx', newCamXPos);
       camera.position.x = newCamXPos;
       camera.lookAt(scene.position);
       renderer.render(scene, camera);
    }
    if ( event.which == 39 ) {
       event.preventDefault();
       var newCamXPos = parseInt($("#page").attr('data-cameraposx')) - 5;
       $("#page").attr('data-cameraposx', newCamXPos);
       camera.position.x = newCamXPos;
       camera.lookAt(scene.position);
       renderer.render(scene, camera);
    }
  });

});
