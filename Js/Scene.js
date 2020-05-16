// Scene.js
parser: "babel-eslint";

import * as THREE from 'three'

export default class Scene {
	constructor() {
		this.container = document.getElementById('stage')

		this.scene = new THREE.Scene()
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.container,
			alpha: true,
	  })

		this.renderer.setSize(window.innerWidth, window.innerHeight)
		this.renderer.setPixelRatio(window.devicePixelRatio)

		this.initLights()
	}

	initLights() {
		const ambientlight = new THREE.AmbientLight(0xffffff, 2)
		this.scene.add(ambientlight)
	}
}

const perspective = 800

constructor() {
	// ...
	this.initCamera()
}

initCamera() {
	const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI

	this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000)
	this.camera.position.set(0, 0, perspective)
}

constructor() {
	// ...
	this.update()
}

update() {
	requestAnimationFrame(this.update.bind(this))
	
	this.renderer.render(this.scene, this.camera)
}


import Figure from './Figure'

constructor() {
	// ...
	this.figure = new Figure(this.scene)
}

export default class Figure {
	constructor(scene) {
		this.$image = document.querySelector('.tile__image')
		this.scene = scene

		this.loader = new THREE.TextureLoader()

		this.image = this.loader.load(this.$image.dataset.src)
		this.hoverImage = this.loader.load(this.$image.dataset.hover)
		this.sizes = new THREE.Vector2(0, 0)
		this.offset = new THREE.Vector2(0, 0)

		this.getSizes()

		this.createMesh()
	}
}