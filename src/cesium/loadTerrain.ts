import { Viewer, CesiumTerrainProvider } from "cesium"

const loadTerrain = async (viewer: Viewer, urlOrAsssetNumber: string | number): Promise<void> => {
  try {
    const terrain = typeof urlOrAsssetNumber === "string" ?
      await CesiumTerrainProvider.fromUrl(urlOrAsssetNumber) :
      await CesiumTerrainProvider.fromIonAssetId(urlOrAsssetNumber)

    viewer.terrainProvider = terrain
  } catch (error) {
    console.log(`Error loading terrain: ${error}`)
  }
}

export { loadTerrain }