import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// create scene
const scene = new THREE.Scene()

// add object to the scene 
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "gray" })

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)

scene.add(cubeMesh)

// create the camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 35)
camera.position.z = 5

// create the renderer
const canvas = document.querySelector("canvas.threejs")
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

// instantiate the controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true

// render the scene
const renderLoop = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)

  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop()

