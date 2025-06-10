import type { DefineComponent } from "vue"
import type { Position } from "./position"

type PlacesDict = {
  [key: string]: Place
}

type Place = {
  placeName: string,
  icon: DefineComponent<any, any, any>, 
  position: Position,
}

export type { PlacesDict, Place }