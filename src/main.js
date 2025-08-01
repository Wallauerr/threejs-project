import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// create scene
const scene = new THREE.Scene()

// add object to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'gray' })
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

cubeMesh.position.y = 1
cubeMesh.position.z = 1
cubeMesh.position.x = 1

cubeMesh.scale.set(2, 2, 1)

const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// create the camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 35)
camera.position.z = 5

// create the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// instantiate the controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = false

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

// render the scene
const renderLoop = () => {
	controls.update()
	renderer.render(scene, camera)
	window.requestAnimationFrame(renderLoop)
}

renderLoop()
