import KyotoIcon from "./Icons/KyotoIcon.vue"
import HiroshimaIcon from "./Icons/HiroshimaIcon.vue"
import TokyoTower from "./Icons/TokyoTower.vue"
import HakoneIcon from "./Icons/HakoneIcon.vue"
import FujiIcon from "./Icons/FujiIcon.vue"
import SapporoIcon from "./Icons/SapporoIcon.vue"
import KagaIcon from "./Icons/KagaIcon.vue"

import type { PlacesDict } from "../../types/place"

export const placesDict: PlacesDict = {
  hiroshima: {
    placeName: "広島",
    icon: HiroshimaIcon,
    position: {
      destination: [-3558117.165209301, 3887175.058311886, 3582090.381367681
      ],
      orientation: {
        direction: [0.915045649098936, -0.16130516440787898, 0.3696919041586574],
        up: [-0.20924973638933655, 0.5937271886242537, 0.7769829942214522],
      },
    }
  },
  tokyoTower: {
    placeName: "東京タワー",
    icon: TokyoTower,
    position: {
      destination: [-3959788.9678092706, 3353283.9088315447, 3697270.0292328526],
      orientation: {
        direction: [0.1473261076519599, -0.9210400676146971, 0.3605276852787276],
        up: [-0.6082716434343354, 0.20305763470537083, 0.7673155835649066],
      },
    }
  },
  kyoto: {
    placeName: "京都",
    icon: KyotoIcon,
    position: {
      destination: [-3746418.0787567603, 3649244.7209161296, 3638967.47570257],
      orientation: {
        direction: [0.9417381486076588, -0.026110036454204615, 0.335331963065526],
        up: [-0.2518896785254185, 0.6059364940549604, 0.7545810460280222],
      },
    }
  },
  fuji: {
    placeName: "富士山",
    icon: FujiIcon,
    position: {
      destination: [-3930814.3315207073, 3422614.91809806, 3665138.546010887],
      orientation: {
        direction: [0.8178889459747928, 0.5717362258573416, 0.06461702635254533],
        up: [-0.49123560987022913, 0.6353948538216464, 0.595785997932473],
      },
    }
  },
  hakone: {
    placeName: "箱根",
    icon: HakoneIcon,
    position: {
      destination: [-3938455.040928949, 3417079.906560689, 3662889.160230748],
      orientation: {
        direction: [0.09245366141098484, 0.5115481128951291, -0.854266263342487],
        up: [-0.6151172847807794, 0.703996434356258, 0.35499260045470854],
      },
    }
  },
  sapporo: {
    placeName: "札幌",
    icon: SapporoIcon,
    position: {
      destination: [-3644464.457824361, 2916376.559037763, 4333280.277694175],
      orientation: {
        direction: [-0.3679337542668949, -0.8827113216318188, -0.2923105799215557],
        up: [-0.7773373481004832, 0.11948179734604299, 0.6176331818734058],
      },
    }
  },
  kaga: {
    placeName: "加賀",
    icon: KagaIcon,
    position: {
      destination: [-3720805.8497414757, 3554280.4145123693, 3756470.8341226312],
      orientation: {
        direction: [-0.29857010298659575, 0.04749330012764362, -0.9532052664801844],
        up: [-0.7423221317622432, 0.6161776077834791, 0.2632166566959398],
      },
    }
  },
}



