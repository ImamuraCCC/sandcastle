import { Viewer } from 'cesium'
import { Cartesian3 } from 'cesium'
import type { Position } from '../types/position'

const flyTo = (viewer: Viewer, position: Position): void => {
  if (!viewer || !position) {
    console.log("パラメータが正しくありません。")
    return
  }

  viewer.scene.camera.flyTo({
    destination: new Cartesian3(...position.destination),
    orientation: {
      direction: new Cartesian3(...position.orientation.direction),
      up: new Cartesian3(...position.orientation.up),
    },
    duration: 0, 
  })
}

export { flyTo }