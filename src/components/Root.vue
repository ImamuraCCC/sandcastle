<script setup lang="ts">
import { onMounted } from "vue"
import { initialize } from "./initialize"
import { placesDict } from "./placesDict"
import { flyTo } from "../cesium/flyTo"
import { getViewer } from "../store/viewer"

onMounted(async () => {
  await initialize()
})

</script>

<template>
  <div>
    <v-navigation-drawer expand-on-hover rail>
      <v-list density="compact" nav>
        <v-list-item v-for="(value, key, index) in placesDict" 
          :key="index" 
          :prepend-icon="value.icon"
          :title="value.placeName" 
          :value="key" @click="() => {
            const viewer = getViewer()
            if (viewer) flyTo(viewer, value.position)
          }">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="height: 100vh;">
      <div id="cesiumContainer"></div>
    </v-main>
  </div>
</template>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
}
</style>
