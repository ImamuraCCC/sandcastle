import type { DefineComponent } from "vue"

type PlacesDict = {
  [key: string]: Place
}

type Place = {
  placeName: string,
  icon: DefineComponent<any, any, any>, 
  position: {
    destination: number[],
    orientation: {
      direction: number[],
      up: number[],
    },
  }
}

export type { PlacesDict, Place }