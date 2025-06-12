import { Viewer, CesiumTerrainProvider } from "cesium"

const loadTerrain = async (viewer: Viewer, urlOrAssetNumber: string | number): Promise<void> => {
  try {
    const terrain = typeof urlOrAssetNumber === "string" ?
      await CesiumTerrainProvider.fromUrl(urlOrAssetNumber) :
      await CesiumTerrainProvider.fromIonAssetId(urlOrAssetNumber)

    viewer.terrainProvider = terrain
  } catch (error) {
    console.log(`Error loading terrain: ${error}`)
  }
}

export { loadTerrain }