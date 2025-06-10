<script setup lang="ts">
import { onMounted } from "vue"
import { initialize } from "./initialize"
import Navigation from "./Navigation/Navigation.vue"

onMounted(async () => {
  await initialize()
})
</script>

<template>
  <div>
    <Navigation />

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
