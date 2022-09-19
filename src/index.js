const fs = require("fs").promises,
      _gT = require("./theme"),
      l = _gT({ theme: "l", name: "Default Light+"}),
      lHC = _gT({ theme: "lhc",name: "Default High Contrast Light"}),
      lC = _gT({theme: "lc", name: "Default Colorblind Light"}),
      lT = _gT({theme: "lt", name: "Default Light+ Tritanopia"}),
      d = _gT({ theme: "d", name: "Default Dark+"}),
      dD = _gT({ theme: "dd", name: "Default Dark+ Dimmed"}),
      dHC = _gT({theme: "dhc", name: "Default High Contrast"}),
      dC = _gT({theme: "dc", name: "Default Dark+ Colorblind"}),
      dT = _gT({theme: "dt", name: "Default Dark+ Tritanopia"})
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
