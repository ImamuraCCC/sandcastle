import { Viewer } from "cesium"

let viewer: Viewer | null = null

const setViewer = (newViewer: Viewer): void => {
  if (viewer) {
    throw new Error("ビューワがすでに初期化されています。")
  }
  viewer = newViewer
}

const getViewer = (): Viewer => {
  if (!viewer) {
    throw new Error("ビューアが初期化されていません。")
  }
  return viewer
}

export { getViewer, setViewer }