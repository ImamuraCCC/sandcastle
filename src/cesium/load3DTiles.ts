import { Viewer, Cesium3DTileset } from 'cesium'

const load3DTiles = async (viewer: Viewer, urlOrAsssetNumber: string | number): Promise<void> => {
  try {
    const tileset = typeof urlOrAsssetNumber === "string" ?
      await Cesium3DTileset.fromUrl(urlOrAsssetNumber) :
      await Cesium3DTileset.fromIonAssetId(urlOrAsssetNumber)

    viewer.scene.primitives.add(tileset)
  } catch (error) {
    console.log(`Error loading tileset: ${error}`)
  }
}

export { load3DTiles }