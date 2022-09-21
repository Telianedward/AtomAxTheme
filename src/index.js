import { promises as fs } from "fs.js"
import _gT from "./theme.js"
const l = _gT( { theme: "l", name: "Default Light+" } )
const lHC = _gT( { theme: "lhc", name: "Default High Contrast Light" } )
const lC = _gT( { theme: "lc", name: "Default Colorblind Light" } )
const lT = _gT( { theme: "lt", name: "Default Light+ Tritanopia" } )
const d = _gT( { theme: "d", name: "Default Dark+" } )
const dD = _gT( { theme: "dd", name: "Default Dark+ Dimmed" } )
const dHC = _gT( { theme: "dhc", name: "Default High Contrast" } )
const dC = _gT( { theme: "dc", name: "Default Dark+ Colorblind" } )
const dT = _gT( { theme: "dt", name: "Default Dark+ Tritanopia" } )
  fs.mkdir("./themes", { recursive: true })
    .then(() => Promise.all([
      fs.writeFile("./themes/my-light.json", JSON.stringify(l, null, 2)),
      fs.writeFile("./themes/my-light_high_contrast.json", JSON.stringify(lHC, null, 2)),
      fs.writeFile("./themes/my-light_colorblind.json", JSON.stringify(lC , null, 2)),
      fs.writeFile("./themes/my-light_tritanopia.json", JSON.stringify(lT , null, 2)),
      fs.writeFile("./themes/my-dark.json", JSON.stringify(d, null, 2)),
      fs.writeFile("./themes/my-dark_dimmed.json", JSON.stringify(dD, null, 2)),
      fs.writeFile("./themes/my-dark_high_contrast.json", JSON.stringify(dHC, null, 2)),
      fs.writeFile("./themes/my-dark_colorblind.json", JSON.stringify(dC, null, 2)),
      fs.writeFile("./themes/my-dark_tritanopia.json", JSON.stringify(dT, null, 2))
      // fs.writeFile("./themes/my-s-dark_tritanopia.json", JSON.stringify(S, null, 2)),
    ]))
    .catch(() => process.exit(1))
