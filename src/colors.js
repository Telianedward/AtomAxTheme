import _l from "../node_modules/@primer/primitives/dist/json/colors/light.json" assert { type: "json" };
import _lHC from "../node_modules/@primer/primitives/dist/json/colors/light_high_contrast.json" assert { type: "json" };
import _lC from "../node_modules/@primer/primitives/dist/json/colors/light_colorblind.json" assert { type: "json" };
import _lT from "../node_modules/@primer/primitives/dist/json/colors/light_tritanopia.json" assert { type: "json" };
import _d from "../node_modules/@primer/primitives/dist/json/colors/dark.json" assert { type: "json" };
import _dD from "../node_modules/@primer/primitives/dist/json/colors/dark_dimmed.json" assert { type: "json" } ;
import _dHC from "../node_modules/@primer/primitives/dist/json/colors/dark_high_contrast.json" assert { type: "json" } ;
import _dC from "../node_modules/@primer/primitives/dist/json/colors/dark_colorblind.json" assert { type: "json" };
import _dT from "../node_modules/@primer/primitives/dist/json/colors/dark_tritanopia.json" assert { type: "json" };
    const  _gC = (t) => {return t === "l"?_l:(t === "lhc"?_lHC:(t === "lc"?_lC:(t === "lt"?_lT:(t === "d"?_d:(t === "dd"?_dD:(t === "dhc"?_dHC:(t === "dc"?_dC:(t === "dt"?_dT:false))))))))}
export default  _gC;