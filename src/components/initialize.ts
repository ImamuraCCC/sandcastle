import { Viewer, Cartesian3, HeadingPitchRoll, Matrix4 } from "cesium"
import { setViewer } from "../store/viewer"
import { load3DTiles } from "../cesium/load3DTIles"
import { loadTerrain } from "../cesium/loadTerrain"

export const initialize = async () => {
  const viewer = new Viewer("cesiumContainer", {
    baseLayerPicker: false,
    sceneModePicker: false,
    animation: false,
    timeline: false,
    selectionIndicator: false,
    homeButton: false,
    fullscreenButton: false,
    navigationHelpButton: false,
    geocoder: false,
  })
  setViewer(viewer)

  viewer.scene.globe.depthTestAgainstTerrain = true

  setInitView(viewer)
  await loadTerrain(viewer, 2767062)
  await load3DTiles(viewer, 2602291)
}

const setInitView = (viewer: Viewer) => {
  const initialPosition = Cartesian3.fromDegrees(
    139.76768237916647,
    35.68075612811796,
    753,
  )

  const initialOrientation = HeadingPitchRoll.fromDegrees(
    21.27879878293835,
    -21.34390550872461,
    0.0716951918898415,
  )

  viewer.scene.camera.setView({
    destination: initialPosition,
    orientation: initialOrientation,
    endTransform: Matrix4.IDENTITY,
  })
}