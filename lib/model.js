import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from 'three'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    const dracoloader = new DRACOLoader();
    dracoloader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoloader);

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.children[0].children[10].material.color = new THREE.Color('#ffffff')
        obj.children[0].children[15].children[5].position.y = -0.2
        obj.children[0].children[15].children[5].rotation.y = Math.PI

        obj.name = 'model'
        obj.position.y = 0
        obj.position.x = 0
        obj.scale.set(1.6, 1.6, 1.6)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}