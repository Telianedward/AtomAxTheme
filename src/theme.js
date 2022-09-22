import _ch from "../node_modules/chroma-js/chroma.js" ;
import _gC from "./colors.js";
import _toRgb from "../node_modules/hsl-to-rgb-for-reals/converter.js";


const hex = (color)=>{
      console.log(color,'color')
      console.log(_ch(color).hex(),'hex')
        return _ch(color).hex();
    }
const max = (val, n) =>  {
  return val > n ? n : val;
}

const  min = (val, n) => {
  return val < n ? n : val;
}
const cycle = (val) => {
  console.log(val,'val')
  val = max(val, 1e7);
  val = min(val, -1e7);
  while (val < 0) {
    val += 360;
  }
  while (val > 359) {
    val -= 360;
  }
  return val;
}
const hue2rgb_ = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
}
const hslToRgb_ = (h, s, l) => {
  let r,
      g,
      b,
      q,
      p
      h = h/360
      s = Number(s.replace('%', ''))/100
      l = Number(l.replace('%', ''))/100
          h == 0 && s == 0?(
                r = g = b = l 
          ):(
              q = l < 0.5 ? ( l * ( 1 + s ) ):( l + s - l * s ),
              p = 2 * l - q,
              r = hue2rgb_( p, q, h + 1/3),
              g = hue2rgb_( p, q, h ),
              b = hue2rgb_( p, q, h - 1/3 )
          )
      return [ Math.round10((r*255),0), Math.round10((g*255),0),Math.round10((b*255),0) ]
  }
const hsl_ = (h, s, l)=> {
  let k = hslToRgb_(h, s, l)
  return _cl.g(k[0],k[1],k[2])
}
const _cl = {
    c: ( c ) => {
        let h = c.toString( 16 );
        return h.length == 1 ? "0" + h : h;
    },
    r: ( r, g, b ) => {
        return "#" + ( ( 1 << 24 ) + ( r << 16 ) + ( g << 8 ) + b ).toString( 16 ).slice( 1 );
    },
    h: ( h ) => {
        //#hex To Rgb
        h.replace( /^#?([a-f\d])([a-f\d])([a-f\d])$/i
            , ( m, r, g, b ) => '#' + r + r + g + g + b + b )
            .substring( 1 ).match( /.{2}/g )
            .map( x => parseInt( x, 16 ) )
    },
    j: ( h ) => {
        var c;
        if ( /^#([A-Fa-f0-9]{3}){1,2}$/.test( h ) ) {
            c = h.substring( 1 ).split( '' );
            if ( c.length == 3 ) {
                c = [ c[ 0 ], c[ 0 ], c[ 1 ], c[ 1 ], c[ 2 ], c[ 2 ] ];
            }
            c = '0x' + c.join( '' );
            return [ ( c >> 16 ) & 255, ( c >> 8 ) & 255, c & 255 ].join( ',' );
        }
        throw new Error( 'Bad Hex' );
    },
    h : (c) =>  {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    },
    g : (r, g, b) =>  {
      return "#" + _cl.h(r) + _cl.h(g) + _cl.h(b);
    }
}
const decimalAdjust = ( t, v, exp ) => {
        /**
         * examples:
         *  Math.round10(5.25, 0);  // 5
            Math.round10(5.25, -1); // 5.3
            Math.round10(5.25, -2); // 5.25
            Math.round10(5, 0);     // 5
            Math.round10(5, -1);    // 5
            Math.round10(5, -2);    // 5
      * Decimal adjustment of a number.
      *
      * @param {String}  type  The type of adjustment.
      * @param {Number}  value The number.
      * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
      * @returns {Number} The adjusted value.
      */
          if ( typeof exp === 'undefined' || +exp === 0 ) {
              return Math[ t ]( v );
          }
          v = +v;
          exp = +exp;
          if ( isNaN( v ) || !( typeof exp === 'number' && exp % 1 === 0 ) ) {
              return NaN;
          }
          v = v.toString().split( 'e' );
          v = Math[ t ]( +( v[ 0 ] + 'e' + ( v[ 1 ] ? ( +v[ 1 ] - exp ) : -exp ) ) );
          v = v.toString().split( 'e' );
      return +( v[ 0 ] + 'e' + ( v[ 1 ] ? ( +v[ 1 ] + exp ) : exp ) );
    }
    Math.round10 = ( v, exp ) => { return decimalAdjust( 'round', v, exp ) },
    Math.floor10 = ( v, exp ) => { return decimalAdjust( 'floor', v, exp ) },
    Math.ceil10 = ( v, exp ) => { return decimalAdjust( 'ceil', v, exp ) }




    const obj = [["100","FF"],
                ["99","FC"],
                ["98","FA"],
                ["97","F7"],
                ["96","F5"],
                ["95","F2"],
                ["94","F0"],
                ["93","ED"],
                ["92","EB"],
                ["91","E8"],
                ["90","E6"],
                ["89","E3"],
                ["88","E0"],
                ["87","DE"],
                ["86","DB"],
                ["85","D9"],
                ["84","D6"],
                ["83","D4"],
                ["82","D1"],
                ["81","CF"],
                ["80","CC"],
                ["79","C9"],
                ["78","C7"],
                ["77","C4"],
                ["76","C2"],
                ["75","BF"],
                ["74","BD"],
                ["73","BA"],
                ["72","B8"],
                ["71","B5"],
                ["70","B3"],
                ["69","B0"],
                ["68","AD"],
                ["67","AB"],
                ["66","A8"],
                ["65","A6"],
                ["64","A3"],
                ["63","A1"],
                ["62","9E"],
                ["61","9C"],
                ["60","99"],
                ["59","96"],
                ["58","94"],
                ["57","91"],
                ["56","8F"],
                ["55","8C"],
                ["54","8A"],
                ["53","87"],
                ["52","85"],
                ["51","82"],
                ["50","80"],
                ["49","7D"],
                ["48","7A"],
                ["47","78"],
                ["46","75"],
                ["45","73"],
                ["44","70"],
                ["43","6E"],
                ["42","6B"],
                ["41","69"],
                ["40","66"],
                ["39","63"],
                ["38","61"],
                ["37","5E"],
                ["36","5C"],
                ["35","59"],
                ["34","57"],
                ["33","54"],
                ["32","52"],
                ["31","4F"],
                ["30","4D"],
                ["29","4A"],
                ["28","47"],
                ["27","45"],
                ["26","42"],
                ["25","40"],
                ["24","3D"],
                ["23","3B"],
                ["22","38"],
                ["21","36"],
                ["20","33"],
                ["19","30"],
                ["18","2E"],
                ["17","2B"],
                ["16","29"],
                ["15","26"],
                ["14","24"],
                ["13","21"],
                ["12","1F"],
                ["11","1C"],
                ["10","1A"],
                ["9","17"],
                ["8","14"],
                ["7","12"],
                ["6","0F"],
                ["5","0D"],
                ["4","0A"],
                ["3","08"],
                ["2","05"],
                ["1","03"],
                ["0","00"]
              ];
    const _cO = ( x , obj ) => {
        let a,
            b,
            c,
            d,
            f,
            g,
            j,
            k,
            l,
            m,
            h,
            i,
            o,
            p,
            v,
            z,
            t,
            s
            j = /\(([^)]+)\)/gm;
            h = [];
            console.log(x ,' <------------------------ x |')
            if( /(rgb)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)/gm.test(x) ){
                if( /^(rgb)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test(x) ){
                        while ( (m=j.exec(x)) !== null ) {
                          h.push(m[1]);
                        }
                        k =  h[0].split(',')
                        console.log( _cl.g(k[0],k[1],k[2]) ,' ----color 23333333')
                    return _cl.g(k[0],k[1],k[2])
                } else if ( /^(rgba)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test(x) ){
                        while ((m=j.exec(x)) !== null) {
                          h.push(m[1]);
                        }
                        console.log(h,'h')
                          k =  h[0].split(',')
                          v = _cl.g(k[0],k[1],k[2])
                          if( k[3].length==0 ){
                            return v 
                          }
                


                          i = k[3]
                          p = i*100
                          o = Math.round10(p,0)
                          z = `${v}${obj[o][1]}`
                                     console.log(z, ` z  --> ${z.length}  -<--`)
                          if( z.length == 11 ){
                                obj.forEach( (ej, i) => {  
                                  t = `${z[9]}${z[10]}`
                                 
                                  ej[1].toLowerCase() == t.toLowerCase()?(
                                        console.log(`ej 1 ${ej[1].toLowerCase()}   <->  ${t.toLowerCase()}  ` ),
                                      a = ej[0] , 
                                      b = i,
                                      obj.forEach( (el , i) => {  
                                        s = `${z[7]}${z[8]}`
                                        console.log(s,`sssssssss` )
                                        if( el[1].toLowerCase() == s.toLowerCase() ){
                                              console.log(`el 1 ${el[1].toLowerCase()}   <->  ${s.toLowerCase()}  ` ),
                                              c = el[0] ,
                                              d = i,
                                              f =(100 - a) + (100 - c),
                                              g = (100  - f);
                                              if( g <= 0 ) {
                                                console.log(`#${z[1]}${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}1a`,' ----color 2')
                                                return `#${z[1]}${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}1a`
                                              } else {
                                                obj.forEach( (et , i) => {  
                                                  if( et[0] == g ){
                                                    console.log(`#${z[1]}${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}${et.b}`,'----color')
                                                      return `#${z[1]}${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}${et.b}`
                                                  }
                                                })
                                              }
                                        }
                                      })
                                    ):false
                                });
                            }
                            console.log(z,'  -- 1111 rgba ---')
                    return z
                  }
            } else if (/(hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)/gm.test(x)){
                if( /^(hsl)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test(x) ){
                        while ( (m=j.exec(x)) !== null ) {
                          h.push(m[1]);
                        }
                        k =  h[0].split(',')
                  console.log(k,'k');
                    return hsl_(k[0],k[1],k[2])
                }else if( /^(hsla)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test(x) ){
                      while ( (m=j.exec(x)) !== null ) {
                        h.push(m[1]);
                      }
                      k =  h[0].split(',')
                      console.log(k,'k');
                      v = hsl_(k[0],k[1],k[2])
                      if( k[3].length==0 ){
                        console.log(v,' ----color 123123')
                        return v
                      
                      }
                      i = k[3]
                      p = i*100
                      o = Math.round10(p,0)
                       z = `${v}${obj[o][1]}`
                      if( z.length == 11 ){
                            obj.forEach( (ej, i) => {  
                              ej[1].toLowerCase() == `${z[9]}${z[10]}`.toLowerCase()?(
                                  a = ej[0] , 
                                  b = i,
                                  obj.forEach( (el , i) => {  
                                    if( el[1].toLowerCase() == `${z[7]}${z[8]}`.toLowerCase() ){
                                        c = el[0] ,
                                        d = i,
                                          f =(100 - a) + (100 - c),
                                        g = (100  - f);
                                          if( g <= 0 ) {
                                            console.log(`#${z[1]}${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}1a`,' ----color 2')
                                            return `#${z[1]}${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}1a`
                                          } else {
                                            obj.forEach( (et , i) => {  
                                              if( et[0] == g ){
                                                console.log(`#${z[1]}${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}${et.b}`,'----color')
                                                  return `#${z[1]}${z[2]}${z[3]}${z[4]}${z[5]}${z[6]}${et.b}`
                                              }
                                            })
                                          }
                                    }
                                  })
                                ):false
                            });
                        }
                        console.log(z,' ----color 11 --hsl ---')
                        return z
                }
            } else {
              if (x.length <= 9){
                console.log( x,' ----color 66666666');
                return x
              }
              if( x.length == 11 ){
                  obj.forEach( (ej, i) => {  
                    ej[1].toLowerCase() == `${x[9]}${x[10]}`.toLowerCase()?(
                        a = ej[0] , 
                        b = i,
                        obj.forEach( (el , i) => {  
                          if( el[1].toLowerCase() == `${x[7]}${x[8]}`.toLowerCase() ){
                              c = el[0] ,
                              d = i,
                                f =(100 - a) + (100 - c),
                              g = (100  - f);
                                if( g <= 0 ) {
                                  console.log(`#${x[1]}${x[2]}${x[3]}${x[4]}${x[5]}${x[6]}1a`,' ----color 2')
                                  return `#${x[1]}${x[2]}${x[3]}${x[4]}${x[5]}${x[6]}1a`
                                } else {
                                  obj.forEach( (et , i) => {  
                                    if( et[0] == g ){
                                      console.log(`#${x[1]}${x[2]}${x[3]}${x[4]}${x[5]}${x[6]}${et.b}`,'----color')
                                        return `#${x[1]}${x[2]}${x[3]}${x[4]}${x[5]}${x[6]}${et.b}`
                                    }
                                  })
                                }
                          }
                        })
                      ):false
                  });
              }
            } 
      }
const _gT = ({ theme, name }) => {
          const themes = (options) => {options[theme]};
          const color = _gC(theme);
          const _x_ = ["00", "a1", "33", "4d", "66", "80", "99", "b3", "cd", "e6", ""];
          const _bc_  = themes({l :_cO(`${hex(color.canvas.subtle)}`,obj),
                                          lHC :_cO(`${hex(color.canvas.subtle)}`,obj),
                                          lC :_cO(`${hex(color.canvas.subtle)}`,obj),
                                          lT :_cO(`${hex(color.canvas.subtle)}`,obj),
                                          d :_cO(`${hex(color.canvas.overlay)}`,obj),
                                          dd :_cO(`${hex(color.canvas.overlay)}`,obj),
                                          dhc :_cO(`${hex(color.canvas.overlay)}`,obj),
                                          dc :_cO(`${hex(color.canvas.overlay)}`,obj),
                                          dt :_cO(`${hex(color.canvas.overlay)}`,obj)
                                        });

        const   _boc_ = themes({ l :_cO(`${hex(color.neutral.muted)}`,obj),
                            lHC :_cO(`${hex(color.neutral.muted)}`,obj),
                            lC :_cO(`${hex(color.neutral.muted)}`,obj),
                            lT :_cO(`${hex(color.neutral.muted)}`,obj),
                            d :_cO(`${hex(color.border.muted)}`,obj),
                            dd :_cO(`${hex(color.border.muted)}`,obj),
                            dhc :_cO(`${hex(color.border.muted)}`,obj),
                            dc :_cO(`${hex(color.border.muted)}`,obj),
                            dt :_cO(`${hex(color.border.muted)}`,obj)
                          });


      const _fc_ = themes({ l :_cO(`${hex(color.fg.default)}`,obj),
                            lHC :_cO(`${hex(color.fg.default)}`,obj),
                            lC :_cO(`${hex(color.fg.default)}`,obj),
                            lT :_cO(`${hex(color.fg.default)}`,obj),
                            d :_cO(`${hex(color.fg.default)}`,obj),
                            dd :_cO(`${hex(color.fg.default)}`,obj),
                            dhc :_cO(`${hex(color.fg.default)}`,obj),
                            dc :_cO(`${hex(color.fg.default)}`,obj),
                            dt :_cO(`${hex(color.fg.default)}`,obj)
                          });

      const _fuc_  = themes({ l :_cO(`${hex(color.fg.muted)}`,obj),
                            lHC :_cO(`${hex(color.fg.muted)}`,obj),
                            lC :_cO(`${hex(color.fg.muted)}`,obj),
                            lT :_cO(`${hex(color.fg.muted)}`,obj),
                            d :_cO(`${hex(color.fg.muted)}`,obj),
                            dd :_cO(`${hex(color.fg.muted)}`,obj),
                            dhc :_cO(`${hex(color.fg.muted)}`,obj),
                            dc :_cO(`${hex(color.fg.muted)}`,obj),
                            dt :_cO(`${hex(color.fg.muted)}`,obj)
                          });
                      
        console.log(themes({l : "_ --l---",
                                              lHC : "_ --lHC---",
                                              lC : "_ --lC---",
                                              lT : "_ --lT---",
                                              d : "_ --d---",
                                              dd : "_ --dd---",
                                              dhc : "_ --dhc---",
                                              dc : "_ --dc---",
                                              dt : "_ --dt---"
                                      }))
        console.log(color,"color")
        console.log(color.canvas.subtle, 'color.canvas.subtle')
        console.log(color.neutral.muted, 'color.neutral.muted')
        console.log(color.border.muted, 'color.border.muted')
        console.log(color.fg.default, 'color.fg.default')
        console.log(color.fg.muted, 'color.fg.muted')
        console.log(_bc_, '_bc_')
        console.log(color.canvas.subtle, 'color.canvas.subtle')
        console.log(_boc_, '_boc_')
        console.log(color.neutral.muted, 'color.neutral.muted')
        console.log(color.fg.default, 'color.fg.default')
        console.log(color.fg.default, '_color.fg.default')
        console.log(color.fg.muted, 'color.fg.muted')
        console.log(color.fg.muted, '_color.fg.muted')
  return {
    name : name,
    colors : {
        "activityBar.activeBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
        "activityBar.activeBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "activityBar.activeFocusBorder" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
        "activityBar.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
        "activityBar.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "activityBar.dropBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "activityBar.foreground" : _cO(`${color.success.emphasis}${_x_[8]}`,obj),
        "activityBar.inactiveForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "activityBarBadge.background" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
        "activityBarBadge.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        
        "badge.background" : _cO(`${color.accent.muted}${_x_[7]}`,obj),
        "badge.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
        "banner.background" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "banner.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "banner.iconForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
  
        "breadcrumb.activeSelectionforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "breadcrumb.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
        "breadcrumb.focusforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "breadcrumb.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "breadcrumbPicker.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
  
        "button.background" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "button.border" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
        "button.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "button.hoverBackground" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
        "button.secondaryBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "button.secondaryforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "button.secondaryHoverBackground" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
        "button.separator" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
  
        "charts.blue" : _cO(`${color.accent.muted}${_x_[10]}`,obj),
        "charts.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "charts.green" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
        "charts.lines" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
        "charts.orange" : _cO(`${color.severe.muted}${_x_[10]}`,obj),
        "charts.purple" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
        "charts.red" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
        "charts.yellow" : _cO(`${color.attention.fg}${_x_[10]}`,obj),

  
        "checkbox.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
        "checkbox.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "checkbox.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
        "commandCenter.activeBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "commandCenter.activeforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "commandCenter.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
        "commandCenter.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "commandCenter.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
        "contrastActiveborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "contrastBorder" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
  
        "debugExceptionWidget.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
        "debugExceptionWidget.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
        "debugTokenExpression.boolean" : _cO(`${color.attention.fg}${_x_[5]}`,obj),
        "debugTokenExpression.error" : _cO(`${color.danger.fg}${_x_[5]}`,obj),
        "debugTokenExpression.name" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
        "debugTokenExpression.number" : _cO(`${color.severe.fg}${_x_[5]}`,obj),
        "debugTokenExpression.string" : _cO(`${color.fg.muted}${_x_[5]}`,obj),
        "debugTokenExpression.value" :_cO(`${color.sponsors.fg}${_x_[5]}`,obj),
        
        "debugToolBar.background" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
        "debugToolBar.border" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
  
        "debugView.exceptionLabelBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "debugView.exceptionLabelforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "debugView.stateLabelBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "debugView.stateLabelforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "debugView.valueChangedHighlight" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
  
        "descriptionForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
        "diffEditor.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "diffEditor.diagonalFill" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "diffEditor.insertedLineBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "diffEditor.insertedTextBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "diffEditor.insertedTextBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "diffEditor.removedLineBackground" : _cO(`${color.danger.muted}${_x_[9]}`,obj),
        "diffEditor.removedTextBackground" : _cO(`${color.danger.muted}${_x_[7]}`,obj),
        "diffEditor.removedTextBorder" : _cO(`${color.danger.muted}${_x_[7]}`,obj),
        "diffEditorGutter.insertedLineBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "diffEditorGutter.removedLineBackground" : _cO(`${color.danger.muted}${_x_[9]}`,obj),
        "diffEditorOverview.insertedForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "diffEditorOverview.removedForeground" : _cO(`${color.danger.muted}${_x_[9]}`,obj),
  
      "disabledForeground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
  
      "dropdown.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "dropdown.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "dropdown.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "dropdown.listBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      
      "editor.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editor.findMatchBackground" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
      "editor.findMatchBorder" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
      "editor.findMatchHighlightBackground" : _cO(`${color.attention.emphasis}${_x_[2]}`,obj),
      "editor.findMatchHighlightBorder" :_cO(`${color.attention.emphasis}${_x_[2]}`,obj),
      "editor.findRangeHighlightBackground" : _cO(`${color.success.emphasis}${_x_[7]}`,obj),
      "editor.findRangeHighlightBorder" : _cO(`${color.success.emphasis}${_x_[7]}`,obj),
      "editor.focusedStackFrameHighlightBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editor.foldBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editor.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editor.hoverHighlightBackground" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
      "editor.inactiveSelectionBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editor.inlineValuesBackground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "editor.inlineValuesforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editor.lineHighlightBackground" : _cO(`${color.success.emphasis}${_x_[2]}`,obj),
      "editor.lineHighlightBorder" : _cO(`${color.success.emphasis}${_x_[2]}`,obj),
      "editor.linkedEditingBackground" : _cO(`${color.attention.fg}${_x_[8]}`,obj),
      "editor.rangeHighlightBackground" : _cO(`${color.success.emphasis}${_x_[7]}`,obj),
      "editor.rangeHighlightBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editor.selectionBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editor.selectionForeground" : _cO(`${color.accent.muted}}${_x_[5]}`,obj),
      "editor.selectionHighlightBackground" : _cO(`${color.success.emphasis}${_x_[7]}`,obj),
      "editor.selectionHighlightborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editor.snippetFinalTabstopHighlightBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editor.snippetFinalTabstopHighlightborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editor.snippetTabstopHighlightBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editor.snippetTabstopHighlightborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editor.stackFrameHighlightbackground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editor.symbolHighlightBackground" : _cO(`${color.done.emphasis}${_x_[5]}`,obj),
      "editor.symbolHighlightBorder" : _cO(`${color.done.emphasis}${_x_[4]}`,obj),
      "editor.wordHighlightBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editor.wordHighlightBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editor.wordHighlightStrongBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editor.wordHighlightStrongBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground1" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground2" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground3" : _cO(`${color.done.fg}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground4" : _cO(`${color.closed.fg}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground5" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground6" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
      "editorBracketHighlight.unexpectedBracket.foreground" : _cO(`${color.sponsors.muted}${_x_[10]}`,obj),
      "editorBracketMatch.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorBracketMatch.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorBracketPairGuide.activeBackground1" : _cO(`${color.sponsors.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.activeBackground2" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorBracketPairGuide.activeBackground3" : _cO(`${color.done.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.activeBackground4" : _cO(`${color.closed.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.activeBackground5" : _cO(`${color.attention.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.activeBackground6" : _cO(`${color.severe.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.background1" : _cO(`${color.sponsors.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.background2" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorBracketPairGuide.background3" : _cO(`${color.done.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.background4" : _cO(`${color.closed.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.background5" : _cO(`${color.attention.fg}${_x_[7]}`,obj),
      "editorBracketPairGuide.background6" : _cO(`${color.severe.fg}${_x_[7]}`,obj),
      "editorCodeLens.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorCommentsWidget.rangeActiveBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorCommentsWidget.rangeActiveborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorCommentsWidget.rangeBackground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "editorCommentsWidget.rangeborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorCommentsWidget.resolvedBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorCommentsWidget.unresolvedBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorCursor.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorCursor.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorError.background" : _cO(`${color.danger.muted}${_x_[7]}`,obj),
      "editorError.border" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "editorError.foreground" : _cO(`${color.danger.muted}${_x_[7]}`,obj),
      "editorGhostText.background" : _cO(`${color.success.emphasis}${_x_[7]}`,obj),
      "editorGhostText.border" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorGhostText.foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "editorGroup.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorGroup.dropBackground" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
      "editorGroup.dropIntoPromptBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorGroup.dropIntoPromptborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorGroup.dropIntoPromptforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorGroup.emptyBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorGroup.focusedEmptyBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorGroupHeader.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorGroupHeader.noTabsBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorGroupHeader.tabsBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorGutter.addedBackground" : _cO(`${color.success.fg}${_x_[10]}`,obj),
      "editorGutter.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorGutter.commentRangeforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorGutter.deletedBackground" : _cO(`${color.danger.fg}${_x_[10]}`,obj),
      "editorGutter.foldingControlforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorGutter.modifiedBackground" : _cO(`${color.success.fg}${_x_[10]}`,obj),
      "editorHint.border" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "editorHint.foreground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "editorHoverWidget.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorHoverWidget.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorHoverWidget.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorHoverWidget.highlightForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "editorHoverWidget.statusBarBackground" : _cO(`${color.danger.muted}${_x_[9]}`,obj),
      "editorIndentGuide.activeBackground" : _cO(`${color.danger.muted}${_x_[9]}`,obj),
      "editorIndentGuide.background" : _cO(`${color.fg.default}${_x_[0]}`,obj),
      "editorInfo.background" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorInfo.border" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "editorInfo.foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "editorInlayHint.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorInlayHint.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorInlayHint.parameterBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorInlayHint.parameterForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "editorInlayHint.typeBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorInlayHint.typeForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "editorLightBulb.foreground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
      "editorLightBulbAutoFix.foreground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorLineNumber.activeForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "editorLineNumber.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorLink.activeForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "editorMarkerNavigation.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorMarkerNavigationError.background" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "editorMarkerNavigationError.headerBackground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "editorMarkerNavigationInfo.background" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "editorMarkerNavigationInfo.headerBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorMarkerNavigationWarning.background" : _cO(`${color.severe.muted}${_x_[5]}`,obj),
      "editorMarkerNavigationWarning.headerBackground" : _cO(`${color.severe.muted}${_x_[5]}`,obj),
      "editorOverviewRuler.addedForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "editorOverviewRuler.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorOverviewRuler.border" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "editorOverviewRuler.bracketMatchForeground" : _cO(`${color.done.muted}${_x_[5]}`,obj),
      "editorOverviewRuler.commonContentforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorOverviewRuler.currentContentForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorOverviewRuler.deletedForeground" : _cO(`${color.attention.fg}${_x_[5]}`,obj),
      "editorOverviewRuler.errorForeground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "editorOverviewRuler.findMatchForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "editorOverviewRuler.incomingContentforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorOverviewRuler.infoForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "editorOverviewRuler.modifiedForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorOverviewRuler.rangeHighlightForeground" : _cO(`${color.success.emphasis}${_x_[8]}`,obj),
      "editorOverviewRuler.selectionHighlightForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorOverviewRuler.warningForeground" : _cO(`${color.severe.muted}${_x_[5]}`,obj),
      "editorOverviewRuler.wordHighlightForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorOverviewRuler.wordHighlightStrongForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorPane.background" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorRuler.foreground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorStickyScroll.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorStickyScrollHover.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorSuggestWidget.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorSuggestWidget.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorSuggestWidget.focusHighlightforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorSuggestWidget.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorSuggestWidget.highlightforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorSuggestWidget.selectedBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorSuggestWidget.selectedforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorSuggestWidget.selectedIconforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorSuggestWidgetStatus.foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "editorUnicodeHighlight.background" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorUnicodeHighlight.border" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "editorUnnecessaryCode.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorUnnecessaryCode._x_" : _cO(`${color.danger.muted}${_x_[3]}`,obj),
      "editorWarning.background" : _cO(`${color.severe.muted}${_x_[0]}`,obj),
                                 
      "editorWarning.border" : _cO(`${color.severe.muted}${_x_[8]}`,obj),
      "editorWarning.foreground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "editorWhitespace.foreground" : _cO(`${color.sponsors.muted}${_x_[10]}`,obj),
      "editorWidget.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "editorWidget.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "editorWidget.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "editorWidget.resizeBorder" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
  
  
      "errorForeground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
  
      "extensionBadge.remoteBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "extensionBadge.remoteforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "extensionButton.prominentBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "extensionButton.prominentforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "extensionButton.prominentHoverBackground" : _cO(`${color.success.emphasis}${_x_[6]}`,obj),
  
      "extensionIcon.preReleaseForeground" : _cO(`${color.severe.muted}${_x_[10]}`,obj),
      "extensionIcon.sponsorForeground" : _cO(`${color.done.muted}${_x_[10]}`,obj),
      "extensionIcon.starForeground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
      "extensionIcon.verifiedForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
  
      "focusBorder" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "gitDecoration.addedResourceForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "gitDecoration.conflictingResourceForeground" : _cO(`${color.severe.muted}${_x_[10]}`,obj),
      "gitDecoration.deletedResourceForeground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "gitDecoration.ignoredResourceForeground" : _cO(`${color.severe.muted}${_x_[5]}`,obj),
      "gitDecoration.modifiedResourceForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "gitDecoration.renamedResourceforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "gitDecoration.stageDeletedResourceForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "gitDecoration.stageModifiedResourceForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "gitDecoration.submoduleResourceForeground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
      "gitDecoration.untrackedResourceforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "icon.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "input.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "input.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "input.foreground": _cO(`${color.fg.default}${_x_[10]}`,obj),
      "input.placeholderForeground": _cO(`${color.fg.default}${_x_[10]}`,obj),
      "inputOption.activeBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "inputOption.activeBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "inputOption.activeForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "inputOption.hoverBackground": _cO(`${color.fg.default}${_x_[10]}`,obj),
      "inputValidation.errorBackground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "inputValidation.errorBorder" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "inputValidation.errorForeground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "inputValidation.infoBackground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "inputValidation.infoBorder" : _cO(`${color.accent.fg}${_x_[5]}`,obj), 
      "inputValidation.infoForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj), 
      "inputValidation.warningBackground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "inputValidation.warningBorder" : _cO(`${color.danger.fg}${_x_[5]}`,obj),
      "inputValidation.warningForeground" : _cO(`${color.danger.fg}${_x_[5]}`,obj),
  
      "keybindingLabel.border" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "keybindingLabel.bottomBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "keybindingLabel.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "keybindingLabel.foreground": _cO(`${color.fg.default}${_x_[10]}`,obj),
     
      "keybindingTable.headerBackground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "keybindingTable.rowsBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "list.activeSelectionBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "list.activeSelectionforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "list.activeSelectionIconForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "list.deemphasizedForeground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
      "list.dropBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "list.errorForeground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "list.filterMatchBackground" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
      "list.filterMatchBorder" : _cO(`${color.success.emphasis}${_x_[6]}`,obj),
      "list.focusAndSelectionOutline" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "list.focusBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "list.focusforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "list.focusHighlightForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "list.focusOutline" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "list.highlightforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "list.hoverBackground" : _cO(`${color.success.emphasis}${_x_[8]}`,obj),
      "list.hoverforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "list.inactiveFocusBackground" : _cO(`${color.success.emphasis}${_x_[9]}`,obj),
      "list.inactiveFocusOutline" : _cO(`${color.success.emphasis}${_x_[9]}`,obj),
      "list.inactiveSelectionBackground" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
      "list.inactiveSelectionforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "list.inactiveSelectionIconForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "list.invalidItemForeground" : _cO(`${color.danger.muted}${_x_[4]}`,obj),
      "list.warningForeground" : _cO(`${color.severe.muted}${_x_[10]}`,obj),
      "listFilterWidget.background" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "listFilterWidget.noMatchesOutline" : _cO(`${color.neutral.emphasis}${_x_[5]}`,obj),     
      "listFilterWidget.outline" : _cO(`${color.accent.fg}${_x_[4]}`,obj),
      "listFilterWidget.shadow" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "menu.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "menu.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "menu.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "menu.selectionBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "menu.selectionBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "menu.selectionforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "menu.separatorBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      
      "menubar.selectionBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "menubar.selectionBorder" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "menubar.selectionForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "merge.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "merge.commonContentBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "merge.commonHeaderBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "merge.currentContentBackground" : _cO(`${color.danger.muted}${_x_[6]}`,obj),
      "merge.currentHeaderBackground" : _cO(`${color.danger.muted}${_x_[8]}`,obj),
      "merge.incomingContentBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "merge.incomingHeaderBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "mergeEditor.change.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "mergeEditor.change.word.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "mergeEditor.conflict.handled.minimapOverViewRuler" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "mergeEditor.conflict.handledFocused.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "mergeEditor.conflict.handledUnfocused.border" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "mergeEditor.conflict.unhandled.minimapOverViewRuler" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "mergeEditor.conflict.unhandledFocused.border" : _cO(`${color.attention.fg}${_x_[5]}`,obj),
      "mergeEditor.conflict.unhandledUnfocused.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "mergeEditor.conflictingLines.background" : _cO(`${color.danger.muted}${_x_[3]}`,obj),
      
      "minimap.background" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "minimap.errorHighlight" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "minimap.findMatchHighlight" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "minimap.foregroundOpacity" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "minimap.selectionHighlight" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "minimap.selectionOccurrenceHighlight" : _cO(`${color.success.emphasis}${_x_[8]}`,obj),
      "minimap.warningHighlight" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "minimapGutter.addedBackground" : _cO(`${color.accent.fg}${_x_[7]}`,obj),
      "minimapGutter.deletedBackground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "minimapGutter.modifiedBackground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "minimapSlider.activeBackground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "minimapSlider.background" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
      "minimapSlider.hoverBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
  
      "notificationCenter.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "notificationCenterHeader.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "notificationCenterHeader.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "notificationLink.foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
  
      "notificationToast.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "notifications.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "notifications.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "notifications.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "notificationsErrorIcon.foreground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "notificationsInfoIcon.foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "notificationsWarningIcon.foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
  
      "panel.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "panel.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "panel.dropBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "panelInput.border" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "panelSection.border" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "panelSection.dropBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "panelSectionHeader.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "panelSectionHeader.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "panelSectionHeader.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "panelTitle.activeBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "panelTitle.activeforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "panelTitle.inactiveforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "peekView.border" : _cO(`${color.attention.fg}${_x_[7]}`,obj),
      "peekViewEditor.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "peekViewEditor.matchHighlightBackground" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
      "peekViewEditor.matchHighlightBorder" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
      "peekViewEditorGutter.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "peekViewResult.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "peekViewResult.fileforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "peekViewResult.lineforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "peekViewResult.matchHighlightBackground" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
      "peekViewResult.selectionBackground" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
      "peekViewResult.selectionForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "peekViewTitle.background" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "peekViewTitleDescription.foreground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "peekViewTitleLabel.foreground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
  
      "pickerGroup.border" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "pickerGroup.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "ports.iconRunningProcessForeground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
  
      "problemsErrorIcon.foreground" : _cO(`${color.success.emphasis}${_x_[4]}`,obj),
  
      "problemsInfoIcon.foreground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
  
      "problemsWarningIcon.foreground" : _cO(`${color.severe.muted}${_x_[5]}`,obj),
  
      "progressBar.background" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
  
      "quickInput.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "quickInput.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "quickInputList.focusBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "quickInputList.focusforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "quickInputList.focusIconForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "quickInputTitle.background" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "sash.hoverBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
  
      "scm.providerborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "scrollbar.shadow" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "scrollbarSlider.activeBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "scrollbarSlider.background" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "scrollbarSlider.hoverbackground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "searchEditor.findMatchBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "searchEditor.findMatchBorder" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "searchEditor.textInputborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "selection.background" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
  
      "sideBar.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "sideBar.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "sideBar.dropBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "sideBar.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "sideBarSectionHeader.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "sideBarSectionHeader.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "sideBarSectionHeader.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "sideBarTitle.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "sideBySideEditor.horizontalBorder" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "sideBySideEditor.verticalBorder" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
  
      "statusBar.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "statusBar.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "statusBar.debuggingBackground" : _cO(`${color.danger.muted}${_x_[6]}`,obj),
      "statusBar.debuggingBorder" : _cO(`${color.done.muted}${_x_[10]}`,obj),
      "statusBar.debuggingforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "statusBar.focusborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "statusBar.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "statusBar.noFolderBackground" : _cO(`${color.severe.muted}${_x_[5]}`,obj),
      "statusBar.noFolderBorder" : _cO(`${color.severe.muted}${_x_[5]}`,obj),
      "statusBar.noFolderforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "statusBarItem.activeBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "statusBarItem.compactHoverBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "statusBarItem.errorBackground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "statusBarItem.errorForeground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "statusBarItem.focusborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "statusBarItem.hoverBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "statusBarItem.prominentBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "statusBarItem.prominentForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "statusBarItem.remoteBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "statusBarItem.remoteforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "statusBarItem.settingsProfilesBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "statusBarItem.settingsProfilesforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "statusBarItem.warningBackground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "statusBarItem.warningForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
  
      "symbolIcon.arrayForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "symbolIcon.booleanForeground":_cO(`${color.done.muted}${_x_[10]}`,obj),
      "symbolIcon.classForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "symbolIcon.colorForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "symbolIcon.constantForeground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
      "symbolIcon.constructorForeground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
      "symbolIcon.enumeratorForeground" : _cO(`${color.open.fg}${_x_[10]}`,obj),
      "symbolIcon.enumeratorMemberForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "symbolIcon.eventForeground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
      "symbolIcon.fieldForeground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "symbolIcon.fileForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "symbolIcon.folderForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "symbolIcon.functionForeground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
      "symbolIcon.interfaceForeground" : _cO(`${color.danger.fg}${_x_[10]}`,obj),
      "symbolIcon.keyForeground" : _cO(`${color.open.fg}${_x_[10]}`,obj),
      "symbolIcon.keywordForeground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
      "symbolIcon.methodForeground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
      "symbolIcon.moduleForeground" : _cO(`${color.open.fg}${_x_[10]}`,obj),
      "symbolIcon.namespaceForeground" :_cO(`${color.attention.emphasis}${_x_[10]}`,obj),
      "symbolIcon.nullForeground" : _cO(`${color.neutral.emphasisPlus}${_x_[10]}`,obj),
      "symbolIcon.numberForeground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
      "symbolIcon.objectForeground" : _cO(`${color.open.emphasis}${_x_[10]}`,obj),
      "symbolIcon.operatorForeground" : _cO(`${color.done.emphasis}${_x_[10]}`,obj),
      "symbolIcon.packageForeground" : _cO(`${color.attention.emphasis}${_x_[10]}`,obj),
      "symbolIcon.propertyforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "symbolIcon.referenceForeground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
      "symbolIcon.snippetForeground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "symbolIcon.stringForeground" : _cO(`${color.neutral.muted}${_x_[10]}`,obj),
      "symbolIcon.structForeground" : _cO(`${color.accent.muted}${_x_[10]}`,obj),
      "symbolIcon.textForeground" : _cO(`${color.success.muted}${_x_[10]}`,obj),
      "symbolIcon.typeParameterForeground" :_cO(`${color.danger.emphasis}${_x_[10]}`,obj),
      "symbolIcon.unitForeground" : _cO(`${color.done.muted}${_x_[10]}`,obj),
      "symbolIcon.variableForeground" : _cO(`${color.sponsors.muted}${_x_[10]}`,obj),
  
      "tab.activeBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "tab.activeBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.activeBorderTop" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.activeForeground" :_cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.activeModifiedBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "tab.hoverBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "tab.hoverBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.hoverforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "tab.inactiveBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "tab.inactiveForeground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
      "tab.inactiveModifiedBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.lastPinnedborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "tab.unfocusedActiveBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "tab.unfocusedActiveBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.unfocusedActiveBorderTop" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.unfocusedActiveForeground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.unfocusedActiveModifiedBorder" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "tab.unfocusedHoverBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "tab.unfocusedHoverBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tab.unfocusedHoverforeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "tab.unfocusedInactiveBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "tab.unfocusedInactiveForeground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
      "tab.unfocusedInactiveModifiedBorder" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
  
      "terminal.foreground" :_cO(`${color.fg.muted}${_x_[7]}`,obj),
      'terminal.ansiBlack' : _cO(`${color.ansi.black}${_x_[10]}`,obj),
      'terminal.ansiRed' : _cO(`${color.ansi.red}${_x_[10]}`,obj),
      'terminal.ansiGreen' : _cO(`${color.ansi.green}${_x_[10]}`,obj),
      'terminal.ansiYellow' : _cO(`${color.ansi.yellow}${_x_[10]}`,obj),
      'terminal.ansiBlue' : _cO(`${color.ansi.blue}${_x_[10]}`,obj), 
      'terminal.ansiMagenta' : _cO(`${color.ansi.magenta}${_x_[10]}`,obj),
      'terminal.ansiCyan' : _cO(`${color.ansi.cyan}${_x_[10]}`,obj),
      'terminal.ansiWhite' : _cO(`${color.ansi.white}${_x_[10]}`,obj),
      'terminal.ansiBrightBlack' : _cO(`${color.ansi.blackBright}${_x_[10]}`,obj),
      'terminal.ansiBrightRed' : _cO(`${color.ansi.redBright}${_x_[10]}`,obj),
      'terminal.ansiBrightGreen' : _cO(`${color.ansi.greenBright}${_x_[10]}`,obj),
      'terminal.ansiBrightYellow' : _cO(`${color.ansi.yellowBright}${_x_[10]}`,obj),
      'terminal.ansiBrightBlue' : _cO(`${color.ansi.blueBright}${_x_[10]}`,obj),
      'terminal.ansiBrightMagenta' : _cO(`${color.ansi.magentaBright}${_x_[10]}`,obj),
      'terminal.ansiBrightCyan' : _cO(`${color.ansi.cyanBright}${_x_[10]}`,obj),
      'terminal.ansiBrightWhite' : _cO(`${color.ansi.whiteBright}${_x_[10]}`,obj),


      "terminal.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "terminal.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "terminal.dropBackground" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
      "terminal.findMatchBackground" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
      "terminal.findMatchBorder" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
      "terminal.findMatchHighlightBackground" : _cO(`${color.accent.fg}${_x_[2]}`,obj),
      "terminal.findMatchHighlightBorder" : _cO(`${color.attention.fg}${_x_[2]}`,obj),
      "terminal.inactiveSelectionBackground" : _cO(`${color.attention.fg}${_x_[3]}`,obj),
      "terminal.selectionBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "terminal.selectionForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "terminal.tab.activeBorder" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "terminalCommandDecoration.defaultBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "terminalCommandDecoration.errorBackground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "terminalCommandDecoration.successBackground" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "terminalCursor.background" : _cO(`${color.success.fg}${_x_[2]}`,obj),
      "terminalCursor.foreground" : _cO(`${color.success.fg}${_x_[10]}`,obj),
      "terminalOverviewRuler.cursorForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "terminalOverviewRuler.findMatchForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
  
      "testing.iconErrored" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "testing.iconFailed" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "testing.iconPassed" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "testing.iconQueued" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
      "testing.iconSkipped":_cO(`${color.severe.muted}${_x_[10]}`,obj),
      "testing.iconUnset" : _cO(`${color.severe.muted}${_x_[10]}`,obj),
      "testing.message.error.decorationForeground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "testing.message.error.lineBackground" : _cO(`${color.danger.muted}${_x_[5]}`,obj),
      "testing.message.info.decorationForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "testing.message.info.lineBackground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "testing.peekBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "testing.peekHeaderBackground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "testing.runAction" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
  
      "textBlockQuote.background" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "textBlockQuote.border" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "textCodeBlock.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
  
      "textLink.activeForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "textLink.foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
  
      "textPreformat.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "textSeparator.foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "titleBar.activeBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "titleBar.activeForeground": _cO(`${color.fg.default}${_x_[10]}`,obj),
      "titleBar.border" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "titleBar.inactiveBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "titleBar.inactiveForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
  
      "toolbar.activeBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "toolbar.hoverBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "toolbar.hoverOutline" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
  
      "tree.indentGuidesStroke" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "tree.tableColumnsborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "tree.tableOddRowsBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "walkThrough.embeddedEditorBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
  
      "welcomePage.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "welcomePage.progress.background" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "welcomePage.progress.foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "welcomePage.tileBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "welcomePage.tileHoverBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "welcomePage.tileShadow" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
      
      "widget.shadow" : _cO(`${color.border.muted}${_x_[10]}`,obj), 
      "window.activeBorder" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "window.inactiveBorder" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "debugConsole.errorForeground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
      "debugConsole.infoForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "debugConsole.sourceForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "debugConsole.warningForeground" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
      "debugConsoleInputIcon.foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "debugIcon.breakpointCurrentStackframeForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "debugIcon.breakpointDisabledForeground" : _cO(`${color.fg.subtle}${_x_[10]}`,obj),
      "debugIcon.breakpointForeground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
      "debugIcon.breakpointStackframeForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "debugIcon.breakpointUnverifiedForeground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
      "debugIcon.continueForeground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "debugIcon.disconnectForeground" : _cO(`${color.danger.fg}${_x_[10]}`,obj),
      "debugIcon.pauseForeground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "debugIcon.restartForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "debugIcon.startForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "debugIcon.stepBackForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "debugIcon.stepIntoForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "debugIcon.stepOutForeground" : _cO(`${color.accent.fg}${_x_[5]}`,obj),
      "debugIcon.stopForeground" : _cO(`${color.danger.fg}${_x_[10]}`,obj),



        "interactive.activeCodeBorder" : _cO(`${color.attention.fg}${_x_[7]}`,obj),
        "interactive.inactiveCodeBorder" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
      "issues.closed" : _cO(`${color.danger.fg}${_x_[5]}`,obj),
        "issues.newIssueDecoration" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "issues.open" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),

    

      
        "notebook.cellBorderColor" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "notebook.cellEditorBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "notebook.cellInsertionIndicator" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
        "notebook.cellToolbarSeparator" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "notebook.editorBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
        "notebook.focusedCellBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "notebook.focusedEditorborder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "notebook.inactiveFocusedCellBorder" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
        "notebook.selectedCellBackground" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
        "notebook.selectedCellBorder" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
        "notebook.symbolHighlightBackground" : _cO(`${color.success.emphasis}${_x_[3]}`,obj),
        "notebookScrollbarSlider.activeBackground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
      "notebookScrollbarSlider.background" : _cO(`${color.success.emphasis}${_x_[5]}`,obj),
      "notebookScrollbarSlider.hoverBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "notebookStatusErrorIcon.foreground" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
        "notebookStatusRunningIcon.foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        "notebookStatusSuccessIcon.foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
      "pullRequests.notification" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
      "settings.checkboxBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "settings.checkboxBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "settings.checkboxForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "settings.dropdownBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "settings.dropdownBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "settings.dropdownForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "settings.dropdownListBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "settings.focusedRowBackground" : _cO(`${color.success.emphasis}${_x_[9]}`,obj),
        "settings.focusedRowBorder" : _cO(`${color.success.emphasis}${_x_[6]}`,obj),
        "settings.headerBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "settings.headerForeground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        "settings.modifiedItemIndicator" : _cO(`${color.danger.muted}${_x_[10]}`,obj),
        "settings.numberInputBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
     "settings.numberInputBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "settings.numberInputForeground": _cO(`${color.fg.default}${_x_[10]}`,obj),
      "settings.rowHoverBackground" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "settings.sashBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "settings.textInputBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj),
        "settings.textInputBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
      "settings.textInputForeground": _cO(`${color.fg.default}${_x_[10]}`,obj),
        "statusBarItem.prominentHoverBackground" : _cO(`${color.border.muted}${_x_[3]}`,obj),
        "notebook.cellHoverBackground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
      "notebook.focusedCellBackground" : _cO(`${color.danger.muted}${_x_[3]}`,obj),
      "notebook.inactiveSelectedCellBorder" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "notebook.outputContainerBackgroundColor" :_cO(`${color.canvas.overlay}${_x_[10]}`,obj),
      "notebook.outputContainerBorderColor" : _cO(`${color.border.muted}${_x_[10]}`,obj),
        "quickInput.list.focusBackground" : _cO(`${color.canvas.overlay}${_x_[10]}`,obj)


    },
    semanticHighlighting : true,
    "tokenColors" : [
      {
        "scope" : [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "entity.name.function",
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.name.tag",
          "support.class.component"
        ],
        "settings" : {
          "foreground" : _cO(`${color.open.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "keyword",
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "storage",
          "storage.type"
        ],
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "string",
          "string punctuation.section.embedded source"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "support",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "meta.property-name",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "variable",
        "settings" : {
          "foreground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "variable.other",
        "settings" : {
          "foreground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "invalid.broken",
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.deprecated",
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.illegal",
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.unimplemented",
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "carriage-return",
        "settings" : {
          "foreground" : _cO(`${color.closed.fg}${_x_[10]}`,obj),
          "background" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "italic underline"
        }
      },
      {
        "scope" : "message.error",
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "string variable",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "source.regexp",
          "string.regexp"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "string.regexp constant.character.escape",
        "settings" : {
          "foreground" : _cO(`${color.open.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "support.constant",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "support.variable",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "support.type.property-name.json",
        "settings" : {
          "foreground" : _cO(`${color.open.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "meta.module-reference",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "punctuation.definition.list.begin.markdown",
        "settings" : {
          "foreground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "markup.quote",
        "settings" : {
          "foreground" : _cO(`${color.open.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "markup.italic",
        "settings" : {
          "foreground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "markup.bold",
        "settings" : {
          "foreground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : [
          "markup.underline"
        ],
        "settings" : {
          "fontStyle" : "underline"
        }
      },
      {
        "scope" : [
          "markup.strikethrough"
        ],
        "settings" : {
          "fontStyle" : "strikethrough"
        }
      },
      {
        "scope" : "markup.inline.raw",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
          "background" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "punctuation.section.embedded"
        ],
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        "settings" : {
          "foreground" : _cO(`${color.open.emphasis}${_x_[10]}`,obj),
          "background" : _cO(`${color.open.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.changed",
          "punctuation.definition.changed"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.emphasis}${_x_[10]}`,obj),
          "background" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.ignored",
          "markup.untracked"
        ],
        "settings" : {
          "foreground" : _cO(`${color.neutral.emphasis}${_x_[10]}`,obj),
          "background" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "meta.diff.range",
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "meta.diff.header",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "meta.separator",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "meta.output",
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote"
        ],
        "settings" : {
          "foreground" : _cO(`${color.neutral.emphasisPlus}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "brackethighlighter.unmatched",
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "constant.other.reference.link",
          "string.other.link"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
          "fontStyle" : "underline"
        }
      },
      {
        "scope" : [
          "constant.language",
          "constant.numeric"
        ],
        "settings" : {
          "foreground" : _cO(`${color.closed.emphasis}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "support.type.property-name"
        ],
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string"
        ],
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string.regexp",
          "constant.character.escape"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "string"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "keyword"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.type.property-name"
        ],
        "settings" : {
          "foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "entity.name.function"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php",
          "punctuation.definition.parameters.end"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "entity.name.type"
        ],
        "settings" : {
          "foreground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "meta.embedded"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.function"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "storage.type"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "storage.modifier"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable"
        ],
        "settings" : {
          "foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.other.readwrite.js"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable",
          "keyword.control"
        ],
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.language"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "keyword.operator"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "keyword.operator"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.class"
        ],
        "settings" : {
          "foreground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "keyword"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "comment"
        ],
        "settings" : {
          "foreground" : _cO(`${color.neutral.emphasis}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.separator.key-value.html"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.tag"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.end.json.comments",
          "punctuation.definition.string.begin.json.comments",
          "punctuation.definition.string.end.js",
          "punctuation.definition.string.begin.js"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.support.type.property-name.begin.json.comments",
          "punctuation.support.type.property-name.end.json.comments"
        ],
        "settings" : {
          "foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.html",
          "punctuation.definition.string.end.html"
        ],
        "settings" : {
          "foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "source.sql.embedded.php"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.sql",
          "punctuation.definition.string.end.sql",
          "punctuation.separator.dictionary.key-value.json.comments"
        ],
        "settings" : {
          "foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "keyword.other.DML.sql",
          "source.sql.embedded.php",
          "string.quoted.single.sql.php",
          "string.quoted.single.php"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string.quoted.other.backtick.sql"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "variable.other.property.js",
          "entity.name.function.member"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.template.begin.js",
          "punctuation.definition.string.template.end.js"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string.quoted.double.html",
          "string.quoted.single.js",
          "string.quoted.double.js",
          "string.template.js"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "text.html.php"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "variable.other.constant",
          "variable.other.constant.object.js",
          "punctuation.definition.template-expression.begin.js"
        ],
        "settings" : {
          "foreground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.separator.comma.js",
          "punctuation.separator.dictionary.pair.json.comments"
        ],
        "settings" : {
          "foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.php",
          "punctuation.definition.string.end.php"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.accessor.js"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "punctuation.accessor.js"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.default}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.type.property-name.json"
        ],
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.argument.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "constant.other.color.rgb-value",
          "support.constant.property-value"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "punctuation.separator.list.comma.css",
          "punctuation.separator.key-value.css",
          "punctuation.terminator.rule.css",
          "meta.function.calc.css",
          "keyword.operator.arithmetic.css",
          "punctuation.definition.entity.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.css",
          "punctuation.definition.string.end.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "string.quoted.single.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.fg.muted}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "constant.numeric.css",
          "keyword.other.unit.px.css",
          "keyword.other.unit.rem.css",
          "keyword.other.unit.em.css",
          "keyword.other.unit.deg.css",
          "keyword.other.unit.ms.css",
          "keyword.other.unit.vw.css",
          "keyword.other.unit.vh.css",
          "keyword.other.unit",
          "keyword.other.unit.s.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "constant.numeric.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.severe.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.name.tag.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.type.property-name.css",
          "entity.other.keyframe-offset.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.constant.vendored.property-value.css",
          "support.constant.font-name.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.pseudo-element.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.type.property-name.media.css",
          "support.constant.media.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "keyword.operator.logical.only.media.css",
          "keyword.operator.logical.and.media.css",
          "string.quoted.double.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.success.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.id.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.function.transform.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.other.keyframe-offset.percentage.css"
        ],
        "settings" : {
          "foreground" : _cO(`${color.sponsors.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "token.info-token",
        "settings" : {
          "foreground" : _cO(`${color.accent.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "token.warn-token",
        "settings" : {
          "foreground" : _cO(`${color.attention.fg}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "token.error-token",
        "settings" : {
          "foreground" : _cO(`${color.danger.emphasis}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "token.debug-token",
        "settings" : {
          "foreground" : _cO(`${color.done.fg}${_x_[10]}`,obj),
        }
      }
    ]
  };
}

export default _gT;
