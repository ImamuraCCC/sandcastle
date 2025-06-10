<script setup lang="ts">
import { placesDict } from "./placesDict"
import { flyTo } from "../../cesium/flyTo"
import { getViewer } from "../../store/viewer"
</script>

<template>
  <v-navigation-drawer expand-on-hover rail permanent>
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
</template>