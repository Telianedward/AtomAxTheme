import { promises as fs } from "fs"
import _gT from "./theme.js"
const l = _gT( { theme: "l", name: "AtomAx Light+" } )
const lHC = _gT( { theme: "lhc", name: "AtomAx High Contrast Light" } )
const lC = _gT( { theme: "lc", name: "AtomAx Colorblind Light" } )
const lT = _gT( { theme: "lt", name: "AtomAx Light+ Tritanopia" } )
const d = _gT( { theme: "d", name: "AtomAx Dark+" } )
const dD = _gT( { theme: "dd", name: "AtomAx Dark+ Dimmed" } )
const dHC = _gT( { theme: "dhc", name: "AtomAx High Contrast" } )
const dC = _gT( { theme: "dc", name: "AtomAx Dark+ Colorblind" } )
const dT = _gT( { theme: "dt", name: "AtomAx Dark+ Tritanopia" } )
  fs.mkdir("./themes", { recursive: true })
    .then(() => Promise.all([
      fs.writeFile("./themes/my-light.json", JSON.stringify(l, null, 2)),
      fs.writeFile("./themes/my-light_high_contrast.json", JSON.stringify(lHC, null, 2)),
      fs.writeFile("./themes/my-light_colorblind.json", JSON.stringify(lC , null, 2)),
      fs.writeFile("./themes/my-light_tritanopia.json", JSON.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stringify(lT , null, 2)),
      fs.writeFile("./themes/my-dark.json", JSON.stringify(d, null, 2)),
      fs.writeFile("./themes/my-dark_dimmed.json", JSON.stringify(dD, null, 2)),
      fs.writeFile("./themes/my-dark_high_contrast.json", JSON.stringify(dHC, null, 2)),
      fs.writeFile("./themes/my-dark_colorblind.json", JSON.stringify(dC, null, 2)),
      fs.writeFile("./themes/my-dark_tritanopia.json", JSON.stringify(dT, null, 2))
      // fs.writeFile("./themes/my-s-dark_tritanopia.json", JSON.stringify(S, null, 2)),
    ]))
    .catch(() => process.exit(1))
