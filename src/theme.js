import _ch from "../node_modules/chroma-js/chroma.js";
import _gC from "./colors.js";
import _toRgb from "../node_modules/hsl-to-rgb-for-reals/converter.js";

Math.round10 = ( v, exp ) => { return decimalAdjust( 'round', v, exp ) }
Math.floor10 = ( v, exp ) => { return decimalAdjust( 'floor', v, exp ) }
Math.ceil10 = ( v, exp ) => { return decimalAdjust( 'ceil', v, exp ) }
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
function
 componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
class colorPlaylistGenerated {
  constructor() {

  }
  hex = ( c ) => {
    // console.log( c, 'color' )
    // console.log( _ch( c ).hex(), 'this.hex' )
    return _ch( c ).hex;
  }
  hue2rgb_ = ( p, q, t ) => {
    if ( t < 0 ) t += 1;
    if ( t > 1 ) t -= 1;
    if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
    if ( t < 1 / 2 ) return q;
    if ( t < 2 / 3 ) return p + ( q - p ) * ( 2 / 3 - t ) * 6;
    return p;
  }
  hslToRgb_ = ( h, s, l ) => {
    let r,
      g,
      b,
      q,
      p
    h = h / 360
    s = Number( s.replace( '%', '' ) ) / 100
    l = Number( l.replace( '%', '' ) ) / 100
    h == 0 && s == 0 ? (
      r = g = b = l
    ) : (
      q = l < 0.5 ? ( l * ( 1 + s ) ) : ( l + s - l * s ),
      p = 2 * l - q,
      r = this.hue2rgb_( p, q, h + 1 / 3 ),
      g = this.hue2rgb_( p, q, h ),
      b = this.hue2rgb_( p, q, h - 1 / 3 )
    )
    return [ Math.round10( ( r * 255 ), 0 ), Math.round10( ( g * 255 ), 0 ), Math.round10( ( b * 255 ), 0 ) ]
  }
  hsl_ = ( h, s, l ) => {
    let k = this.hslToRgb_( h, s, l )
    return this._cl.u( k[ 0 ], k[ 1 ], k[ 2 ] )
  }
  _cl = {
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
      let c;
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
    h: ( c ) => {
      let hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    },
    g: ( r, g, b ) => {
      return "#" + this._cl.h( r ) + this._cl.h( g ) + this._cl.h( b );
    },
    k: ( r, g, b ) => {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    m :   (r, g, b)   => {
     
        //RGB Code validation/ conversion
        const _rgb2Hex = function(arg) {
          let x = arg;
          x = x < 0?'0':(x > 255)?255:'0'
          let hex = Number(x).toString(16);
          hex.length < 2?`0${hex}`:'ff'
          return hex;
        };
    
        return [`#${ _rgb2Hex(r)}${_rgb2Hex(g)}${_rgb2Hex(b)}`];

    },
    u: (r, g, b) =>{
  //RGB Code validation/ conversion
          const _rgb2Hex = function(arg) {
            let x = arg;

            if (x < 0) {
              x = 0;
            }else if(x > 255) {
              x = 255;
            }
            let hex = Number(x).toString(16);
            if (hex.length < 2) {
              hex = "0" + hex;
            }
            return hex;
          }
          return `#${_rgb2Hex(r)}${_rgb2Hex(g)}${_rgb2Hex(b)}`;
    }
  }
  percent2hex = ( p ) => {
    // для ввода % ( процентов  от  0 - 100) в таблице прозрачности 
    return ( Math.round( p / 100 * 255 ) + 0x10000 ).toString( 16 ).substr( -2 )
  }
  hex2percent = ( p ) => {
    // для ввода окончания прозрачности (узнать на сколько  процентов цвет становиться прозрачным)
    return Math.round( parseInt( `0x${ p }` / 255 * 100 ) )
  }
  _cO = ( x ) => {
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
    console.log( x, ' <------------------------ x |' )
    if ( /(rgb)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)/gm.test( x ) ) {
      if ( /^(rgb)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test( x ) ) {
        while ( ( m = j.exec( x ) ) !== null ) {
          h.push( m[ 1 ] );
        }
        k = h[ 0 ].split( ',' )
        console.log( this._cl.u( k[ 0 ], k[ 1 ], k[ 2 ] ), ' ----color 23333333' )
        return this._cl.u( k[ 0 ], k[ 1 ], k[ 2 ] )
      } else if ( /^(rgba)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test( x ) ) {
        while ( ( m = j.exec( x ) ) !== null ) {
          h.push( m[ 1 ] );
        }
        console.log( h, 'h' )
        k = h[ 0 ].split( ',' )
        v = this._cl.u( k[ 0 ], k[ 1 ], k[ 2 ] )
        console.log( v, ` v  --> ${ v.length }  -<--` )
        if ( k[ 3 ].length == 0 ) {
          return v
        }
        i = k[ 3 ]
        p = i * 100
        o = Math.round10( p, 0 )
        z = `${ v }${ this.percent2hex( o ) }`
        console.log( z, ` z  --> ${ z.length }  -<--` )
        if ( z.length == 11 ) {
            t = `${ z[ 9 ] }${ z[ 10 ] }`,
            s = `${ z[ 7 ] }${ z[ 8 ] }`,
            a = this.hex2percent( t ),
            c = this.hex2percent( a ),

            d = i,
            f = ( 100 - a ) + ( 100 - c ),
            g = ( 100 - f );
          if ( g <= 0 ) {
            console.log( `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`, ' ----color 2' )
            return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`
          } else {
            console.log( `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ this.percent2hex( g ) }`, '----color' )
            return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ this.percent2hex( g ) }`
          }
        }
        console.log( z, '  -- 1111 rgba ---' )
        return z
      }
    } else if ( /(hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)/gm.test( x ) ) {
      if ( /^(hsl)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test( x ) ) {
        while ( ( m = j.exec( x ) ) !== null ) {
          h.push( m[ 1 ] );
        }
        k = h[ 0 ].split( ',' )
        console.log( k, 'k' );
        return this.hsl_( k[ 0 ], k[ 1 ], k[ 2 ] )
      } else if ( /^(hsla)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test( x ) ) {
        while ( ( m = j.exec( x ) ) !== null ) {
          h.push( m[ 1 ] );
        }
        k = h[ 0 ].split( ',' )
        console.log( k, 'k' );
        v = this.hsl_( k[ 0 ], k[ 1 ], k[ 2 ] )
        if ( k[ 3 ].length == 0 ) {
          console.log( v, ' ----color 123123' )
          return v

        }
        i = k[ 3 ]
        p = i * 100
        o = Math.round10( p, 0 )
        z = `${ v }${ this.percent2hex( o ) }`
        if ( z.length == 11 ) {
          t = `${ z[ 9 ] }${ z[ 10 ] }`,
            s = `${ z[ 7 ] }${ z[ 8 ] }`,
            a = this.hex2percent( t ),
            c = this.hex2percent( a ),

            d = i,
            f = ( 100 - a ) + ( 100 - c ),
            g = ( 100 - f );
          if ( g <= 0 ) {
            console.log( `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`, ' ----color 2' )
            return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`
          } else {
            console.log( `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ this.percent2hex( g ) }`, '----color' )
            return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ this.percent2hex( g ) }`
          }
        }
        console.log( z, ' ----color 11 --hsl ---' )
        return z
      }
    } else {
      if ( x.length <= 9 ) {
        console.log( x, ' ----color 66666666' );
        return x
      } else if ( x.length == 11 ) {
        t = `${ z[ 9 ] }${ z[ 10 ] }`,
          s = `${ z[ 7 ] }${ z[ 8 ] }`,
          a = this.hex2percent( t ),
          c = this.hex2percent( a ),

          d = i,
          f = ( 100 - a ) + ( 100 - c ),
          g = ( 100 - f );
        if ( g <= 0 ) {
          console.log( `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`, ' ----color 2' )
          return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`
        } else {
          console.log( `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ this.percent2hex( g ) }`, '----color' )
          return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ this.percent2hex( g ) }`
        }
      }
    }
  }
  _gg = () => {

  }
  _gT = ( { theme, name } ) => {
    const themes = ( options ) => { options[ theme ] },
      _c = _gC( theme ),
      _x_ = [ "00", "a1", "33", "4d", "66", "80", "99", "b3", "cd", "e6", "" ],
      _bc_ = themes( {
        l: this._cO( `${ this.hex( _c.canvas.subtle ) }` ),
        lHC: this._cO( `${ this.hex( _c.canvas.subtle ) }` ),
        lC: this._cO( `${ this.hex( _c.canvas.subtle ) }` ),
        lT: this._cO( `${ this.hex( _c.canvas.subtle ) }` ),
        d: this._cO( `${ this.hex( _c.canvas.overlay ) }` ),
        dd: this._cO( `${ this.hex( _c.canvas.overlay ) }` ),
        dhc: this._cO( `${ this.hex( _c.canvas.overlay ) }` ),
        dc: this._cO( `${ this.hex( _c.canvas.overlay ) }` ),
        dt: this._cO( `${ this.hex( _c.canvas.overlay ) }`, )
      } ),
      _boc_ = themes( {
        l: this._cO( `${ this.hex( _c.neutral.muted ) }` ),
        lHC: this._cO( `${ this.hex( _c.neutral.muted ) }` ),
        lC: this._cO( `${ this.hex( _c.neutral.muted ) }` ),
        lT: this._cO( `${ this.hex( _c.neutral.muted ) }` ),
        d: this._cO( `${ this.hex( _c.border.muted ) }` ),
        dd: this._cO( `${ this.hex( _c.border.muted ) }` ),
        dhc: this._cO( `${ this.hex( _c.border.muted ) }` ),
        dc: this._cO( `${ this.hex( _c.border.muted ) }` ),
        dt: this._cO( `${ this.hex( _c.border.muted ) }`, )
      } ),
      _fc_ = themes( {
        l: this._cO( `${ this.hex( _c.fg.default ) }` ),
        lHC: this._cO( `${ this.hex( _c.fg.default ) }` ),
        lC: this._cO( `${ this.hex( _c.fg.default ) }` ),
        lT: this._cO( `${ this.hex( _c.fg.default ) }` ),
        d: this._cO( `${ this.hex( _c.fg.default ) }` ),
        dd: this._cO( `${ this.hex( _c.fg.default ) }` ),
        dhc: this._cO( `${ this.hex( _c.fg.default ) }` ),
        dc: this._cO( `${ this.hex( _c.fg.default ) }` ),
        dt: this._cO( `${ this.hex( _c.fg.default ) }`, )
      } ),
      _fuc_ = themes( {
        l: this._cO( `${ this.hex( _c.fg.muted ) }` ),
        lHC: this._cO( `${ this.hex( _c.fg.muted ) }` ),
        lC: this._cO( `${ this.hex( _c.fg.muted ) }` ),
        lT: this._cO( `${ this.hex( _c.fg.muted ) }` ),
        d: this._cO( `${ this.hex( _c.fg.muted ) }` ),
        dd: this._cO( `${ this.hex( _c.fg.muted ) }` ),
        dhc: this._cO( `${ this.hex( _c.fg.muted ) }` ),
        dc: this._cO( `${ this.hex( _c.fg.muted ) }` ),
        dt: this._cO( `${ this.hex( _c.fg.muted ) }`, )
      } )

    console.log( themes( {
      l: "_ --l---",
      lHC: "_ --lHC---",
      lC: "_ --lC---",
      lT: "_ --lT---",
      d: "_ --d---",
      dd: "_ --dd---",
      dhc: "_ --dhc---",
      dc: "_ --dc---",
      dt: "_ --dt---"
    } ) )
    console.log( _c, "_c" )
    console.log( _c.canvas.subtle, '_c.canvas.subtle' )
    console.log( _c.neutral.muted, '_c.neutral.muted' )
    console.log( _c.border.muted, '_c.border.muted' )
    console.log( _c.fg.default, '_c.fg.default' )
    console.log( _c.fg.muted, '_c.fg.muted' )
    console.log( _bc_, '_bc_' )
    console.log( _c.canvas.subtle, '_c.canvas.subtle' )
    console.log( _boc_, '_boc_' )
    console.log( _c.neutral.muted, '_c.neutral.muted' )
    console.log( _c.fg.default, '_c.fg.default' )
    console.log( _c.fg.default, 'this.__c.fg.default' )
    console.log( _c.fg.muted, '_c.fg.muted' )
    console.log( _c.fg.muted, 'this.__c.fg.muted' )
    return {
      name: name,
      _cs: {
        "activityBar.activeBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "activityBar.activeBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "activityBar.activeFocusBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "activityBar.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "activityBar.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "activityBar.dropBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "activityBar.foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 8 ] }` ),
        "activityBar.inactiveForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "activityBarBadge.background": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "activityBarBadge.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "badge.background": this._cO( `${ _c.accent.muted }${ _x_[ 7 ] }` ),
        "badge.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "banner.background": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "banner.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "banner.iconForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "breadcrumb.activeSelectionforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "breadcrumb.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "breadcrumb.focusforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "breadcrumb.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "breadcrumbPicker.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),

        "button.background": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "button.border": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "button.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "button.hoverBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "button.secondaryBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "button.secondaryforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "button.secondaryHoverBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "button.separator": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),

        "charts.blue": this._cO( `${ _c.accent.muted }${ _x_[ 10 ] }` ),
        "charts.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "charts.green": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "charts.lines": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "charts.orange": this._cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "charts.purple": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "charts.red": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "charts.yellow": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),


        "checkbox.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "checkbox.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "checkbox.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "commandCenter.activeBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "commandCenter.activeforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "commandCenter.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "commandCenter.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "commandCenter.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "contrastActiveborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "contrastBorder": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),

        "debugExceptionWidget.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "debugExceptionWidget.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "debugTokenExpression.boolean": this._cO( `${ _c.attention.fg }${ _x_[ 5 ] }` ),
        "debugTokenExpression.error": this._cO( `${ _c.danger.fg }${ _x_[ 5 ] }` ),
        "debugTokenExpression.name": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugTokenExpression.number": this._cO( `${ _c.severe.fg }${ _x_[ 5 ] }` ),
        "debugTokenExpression.string": this._cO( `${ _c.fg.muted }${ _x_[ 5 ] }` ),
        "debugTokenExpression.value": this._cO( `${ _c.sponsors.fg }${ _x_[ 5 ] }` ),

        "debugToolBar.background": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "debugToolBar.border": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),

        "debugView.exceptionLabelBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "debugView.exceptionLabelforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugView.stateLabelBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "debugView.stateLabelforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugView.valueChangedHighlight": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "descriptionForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "diffEditor.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "diffEditor.diagonalFill": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "diffEditor.insertedLineBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditor.insertedTextBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditor.insertedTextBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditor.removedLineBackground": this._cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),
        "diffEditor.removedTextBackground": this._cO( `${ _c.danger.muted }${ _x_[ 7 ] }` ),
        "diffEditor.removedTextBorder": this._cO( `${ _c.danger.muted }${ _x_[ 7 ] }` ),
        "diffEditorGutter.insertedLineBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditorGutter.removedLineBackground": this._cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),
        "diffEditorOverview.insertedForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditorOverview.removedForeground": this._cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),

        "disabledForeground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),

        "dropdown.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "dropdown.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "dropdown.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "dropdown.listBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "editor.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editor.findMatchBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "editor.findMatchBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "editor.findMatchHighlightBackground": this._cO( `${ _c.attention.emphasis }${ _x_[ 2 ] }` ),
        "editor.findMatchHighlightBorder": this._cO( `${ _c.attention.emphasis }${ _x_[ 2 ] }` ),
        "editor.findRangeHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editor.findRangeHighlightBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editor.focusedStackFrameHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editor.foldBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editor.hoverHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "editor.inactiveSelectionBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.inlineValuesBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editor.inlineValuesforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editor.lineHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 2 ] }` ),
        "editor.lineHighlightBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 2 ] }` ),
        "editor.linkedEditingBackground": this._cO( `${ _c.attention.fg }${ _x_[ 8 ] }` ),
        "editor.rangeHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editor.rangeHighlightBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editor.selectionBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.selectionForeground": this._cO( `${ _c.accent.muted }}${ _x_[ 5 ] }` ),
        "editor.selectionHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editor.selectionHighlightborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.snippetFinalTabstopHighlightBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editor.snippetFinalTabstopHighlightborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.snippetTabstopHighlightBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.snippetTabstopHighlightborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.stackFrameHighlightbackground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editor.symbolHighlightBackground": this._cO( `${ _c.done.emphasis }${ _x_[ 5 ] }` ),
        "editor.symbolHighlightBorder": this._cO( `${ _c.done.emphasis }${ _x_[ 4 ] }` ),
        "editor.wordHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editor.wordHighlightBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.wordHighlightStrongBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editor.wordHighlightStrongBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground1": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground2": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground3": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground4": this._cO( `${ _c.closed.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground5": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground6": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.unexpectedBracket.foreground": this._cO( `${ _c.sponsors.muted }${ _x_[ 10 ] }` ),
        "editorBracketMatch.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorBracketMatch.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorBracketPairGuide.activeBackground1": this._cO( `${ _c.sponsors.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.activeBackground2": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorBracketPairGuide.activeBackground3": this._cO( `${ _c.done.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.activeBackground4": this._cO( `${ _c.closed.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.activeBackground5": this._cO( `${ _c.attention.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.activeBackground6": this._cO( `${ _c.severe.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background1": this._cO( `${ _c.sponsors.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background2": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorBracketPairGuide.background3": this._cO( `${ _c.done.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background4": this._cO( `${ _c.closed.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background5": this._cO( `${ _c.attention.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background6": this._cO( `${ _c.severe.fg }${ _x_[ 7 ] }` ),
        "editorCodeLens.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.rangeActiveBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.rangeActiveborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.rangeBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.rangeborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.resolvedBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.unresolvedBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCursor.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorCursor.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorError.background": this._cO( `${ _c.danger.muted }${ _x_[ 7 ] }` ),
        "editorError.border": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "editorError.foreground": this._cO( `${ _c.danger.muted }${ _x_[ 7 ] }` ),
        "editorGhostText.background": this._cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editorGhostText.border": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorGhostText.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorGroup.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorGroup.dropBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "editorGroup.dropIntoPromptBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorGroup.dropIntoPromptborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorGroup.dropIntoPromptforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorGroup.emptyBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorGroup.focusedEmptyBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorGroupHeader.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorGroupHeader.noTabsBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorGroupHeader.tabsBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorGutter.addedBackground": this._cO( `${ _c.success.fg }${ _x_[ 10 ] }` ),
        "editorGutter.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorGutter.commentRangeforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorGutter.deletedBackground": this._cO( `${ _c.danger.fg }${ _x_[ 10 ] }` ),
        "editorGutter.foldingControlforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorGutter.modifiedBackground": this._cO( `${ _c.success.fg }${ _x_[ 10 ] }` ),
        "editorHint.border": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorHint.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "editorHoverWidget.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorHoverWidget.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorHoverWidget.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorHoverWidget.highlightForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorHoverWidget.statusBarBackground": this._cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),
        "editorIndentGuide.activeBackground": this._cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),
        "editorIndentGuide.background": this._cO( `${ _c.fg.default }${ _x_[ 0 ] }` ),
        "editorInfo.background": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorInfo.border": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "editorInfo.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorInlayHint.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorInlayHint.foreground": this._cO( `${ _c.fg.default }${ _x_[ 4 ] }` ),
        "editorInlayHint.parameterBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorInlayHint.parameterForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorInlayHint.typeBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorInlayHint.typeForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorLightBulb.foreground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "editorLightBulbAutoFix.foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorLineNumber.activeForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorLineNumber.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorLink.activeForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorMarkerNavigation.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorMarkerNavigationError.background": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "editorMarkerNavigationError.headerBackground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "editorMarkerNavigationInfo.background": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorMarkerNavigationInfo.headerBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorMarkerNavigationWarning.background": this._cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "editorMarkerNavigationWarning.headerBackground": this._cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.addedForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.border": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.bracketMatchForeground": this._cO( `${ _c.done.muted }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.commonContentforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.currentContentForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.deletedForeground": this._cO( `${ _c.attention.fg }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.errorForeground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.findMatchForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.incomingContentforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.infoForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.modifiedForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.rangeHighlightForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 8 ] }` ),
        "editorOverviewRuler.selectionHighlightForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.warningForeground": this._cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.wordHighlightForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.wordHighlightStrongForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorPane.background": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorRuler.foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorStickyScroll.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorStickyScrollHover.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.focusHighlightforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.highlightforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.selectedBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.selectedforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.selectedIconforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidgetStatus.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorUnicodeHighlight.background": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorUnicodeHighlight.border": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorUnnecessaryCode.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorUnnecessaryCode._x_": this._cO( `${ _c.danger.muted }${ _x_[ 3 ] }` ),
        "editorWarning.background": this._cO( `${ _c.severe.muted }${ _x_[ 0 ] }` ),

        "editorWarning.border": this._cO( `${ _c.severe.muted }${ _x_[ 8 ] }` ),
        "editorWarning.foreground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "editorWhitespace.foreground": this._cO( `${ _c.sponsors.muted }${ _x_[ 10 ] }` ),
        "editorWidget.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "editorWidget.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorWidget.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorWidget.resizeBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),


        "errorForeground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),

        "extensionBadge.remoteBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "extensionBadge.remoteforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "extensionButton.prominentBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "extensionButton.prominentforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "extensionButton.prominentHoverBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 6 ] }` ),

        "extensionIcon.preReleaseForeground": this._cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "extensionIcon.sponsorForeground": this._cO( `${ _c.done.muted }${ _x_[ 10 ] }` ),
        "extensionIcon.starForeground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "extensionIcon.verifiedForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "focusBorder": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "gitDecoration.addedResourceForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "gitDecoration.conflictingResourceForeground": this._cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "gitDecoration.deletedResourceForeground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "gitDecoration.ignoredResourceForeground": this._cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "gitDecoration.modifiedResourceForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "gitDecoration.renamedResourceforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "gitDecoration.stageDeletedResourceForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "gitDecoration.stageModifiedResourceForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "gitDecoration.submoduleResourceForeground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "gitDecoration.untrackedResourceforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "icon.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "input.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "input.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "input.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "input.placeholderForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "inputOption.activeBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "inputOption.activeBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "inputOption.activeForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "inputOption.hoverBackground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "inputValidation.errorBackground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "inputValidation.errorBorder": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "inputValidation.errorForeground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "inputValidation.infoBackground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "inputValidation.infoBorder": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "inputValidation.infoForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "inputValidation.warningBackground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "inputValidation.warningBorder": this._cO( `${ _c.danger.fg }${ _x_[ 5 ] }` ),
        "inputValidation.warningForeground": this._cO( `${ _c.danger.fg }${ _x_[ 5 ] }` ),

        "keybindingLabel.border": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "keybindingLabel.bottomBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "keybindingLabel.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "keybindingLabel.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "keybindingTable.headerBackground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "keybindingTable.rowsBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "list.activeSelectionBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "list.activeSelectionforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.activeSelectionIconForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "list.deemphasizedForeground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "list.dropBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.errorForeground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "list.filterMatchBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "list.filterMatchBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 6 ] }` ),
        "list.focusAndSelectionOutline": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.focusBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.focusforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.focusHighlightForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.focusOutline": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.highlightforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.hoverBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 8 ] }` ),
        "list.hoverforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.inactiveFocusBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 9 ] }` ),
        "list.inactiveFocusOutline": this._cO( `${ _c.success.emphasis }${ _x_[ 9 ] }` ),
        "list.inactiveSelectionBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "list.inactiveSelectionforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.inactiveSelectionIconForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "list.invalidItemForeground": this._cO( `${ _c.danger.muted }${ _x_[ 4 ] }` ),
        "list.warningForeground": this._cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "listFilterWidget.background": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "listFilterWidget.noMatchesOutline": this._cO( `${ _c.neutral.emphasis }${ _x_[ 5 ] }` ),
        "listFilterWidget.outline": this._cO( `${ _c.accent.fg }${ _x_[ 4 ] }` ),
        "listFilterWidget.shadow": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "menu.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "menu.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "menu.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "menu.selectionBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "menu.selectionBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "menu.selectionforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "menu.separatorBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "menubar.selectionBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "menubar.selectionBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "menubar.selectionForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "merge.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "merge.commonContentBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "merge.commonHeaderBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "merge.currentContentBackground": this._cO( `${ _c.danger.muted }${ _x_[ 6 ] }` ),
        "merge.currentHeaderBackground": this._cO( `${ _c.danger.muted }${ _x_[ 8 ] }` ),
        "merge.incomingContentBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "merge.incomingHeaderBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "mergeEditor.change.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "mergeEditor.change.word.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "mergeEditor.conflict.handled.minimapOverViewRuler": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "mergeEditor.conflict.handledFocused.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "mergeEditor.conflict.handledUnfocused.border": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "mergeEditor.conflict.unhandledFocused.border": this._cO( `${ _c.attention.fg }${ _x_[ 5 ] }` ),
        "mergeEditor.conflict.unhandledUnfocused.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "mergeEditor.conflictingLines.background": this._cO( `${ _c.danger.muted }${ _x_[ 3 ] }` ),

        "minimap.background": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "minimap.errorHighlight": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "minimap.findMatchHighlight": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "minimap.foregroundOpacity": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "minimap.selectionHighlight": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "minimap.selectionOccurrenceHighlight": this._cO( `${ _c.success.emphasis }${ _x_[ 8 ] }` ),
        "minimap.warningHighlight": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "minimapGutter.addedBackground": this._cO( `${ _c.accent.fg }${ _x_[ 7 ] }` ),
        "minimapGutter.deletedBackground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "minimapGutter.modifiedBackground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "minimapSlider.activeBackground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "minimapSlider.background": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "minimapSlider.hoverBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "notificationCenter.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notificationCenterHeader.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "notificationCenterHeader.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "notificationLink.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "notificationToast.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "notifications.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "notifications.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notifications.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "notificationsErrorIcon.foreground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "notificationsInfoIcon.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "notificationsWarningIcon.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "panel.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "panel.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "panel.dropBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "panelInput.border": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "panelSection.border": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "panelSection.dropBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "panelSectionHeader.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "panelSectionHeader.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "panelSectionHeader.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "panelTitle.activeBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "panelTitle.activeforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "panelTitle.inactiveforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "peekView.border": this._cO( `${ _c.attention.fg }${ _x_[ 7 ] }` ),
        "peekViewEditor.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "peekViewEditor.matchHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "peekViewEditor.matchHighlightBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "peekViewEditorGutter.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "peekViewResult.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "peekViewResult.fileforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "peekViewResult.lineforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "peekViewResult.matchHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "peekViewResult.selectionBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "peekViewResult.selectionForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "peekViewTitle.background": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "peekViewTitleDescription.foreground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "peekViewTitleLabel.foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "pickerGroup.border": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "pickerGroup.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "ports.iconRunningProcessForeground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),

        "problemsErrorIcon.foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),

        "problemsInfoIcon.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),

        "problemsWarningIcon.foreground": this._cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),

        "progressBar.background": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),

        "quickInput.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "quickInput.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "quickInputList.focusBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "quickInputList.focusforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "quickInputList.focusIconForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "quickInputTitle.background": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "sash.hoverBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "scm.providerborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "scrollbar.shadow": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "scrollbarSlider.activeBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "scrollbarSlider.background": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "scrollbarSlider.hoverbackground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "searchEditor.findMatchBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "searchEditor.findMatchBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "searchEditor.textInputborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "selection.background": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "sideBar.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "sideBar.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "sideBar.dropBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "sideBar.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "sideBarSectionHeader.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "sideBarSectionHeader.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "sideBarSectionHeader.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "sideBarTitle.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "sideBySideEditor.horizontalBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "sideBySideEditor.verticalBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),

        "statusBar.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "statusBar.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "statusBar.debuggingBackground": this._cO( `${ _c.danger.muted }${ _x_[ 6 ] }` ),
        "statusBar.debuggingBorder": this._cO( `${ _c.done.muted }${ _x_[ 10 ] }` ),
        "statusBar.debuggingforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBar.focusborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "statusBar.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBar.noFolderBackground": this._cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "statusBar.noFolderBorder": this._cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "statusBar.noFolderforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBarItem.activeBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "statusBarItem.compactHoverBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "statusBarItem.errorBackground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "statusBarItem.errorForeground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "statusBarItem.focusborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "statusBarItem.hoverBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "statusBarItem.prominentBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "statusBarItem.prominentForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "statusBarItem.remoteBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "statusBarItem.remoteforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBarItem.settingsProfilesBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "statusBarItem.settingsProfilesforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBarItem.warningBackground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "statusBarItem.warningForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),

        "symbolIcon.arrayForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.booleanForeground": this._cO( `${ _c.done.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.classForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.colorForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.constantForeground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.constructorForeground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.enumeratorForeground": this._cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.enumeratorMemberForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.eventForeground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.fieldForeground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.fileForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.folderForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "symbolIcon.functionForeground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.interfaceForeground": this._cO( `${ _c.danger.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.keyForeground": this._cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.keywordForeground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.methodForeground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.moduleForeground": this._cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.namespaceForeground": this._cO( `${ _c.attention.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.nullForeground": this._cO( `${ _c.neutral.emphasisPlus }${ _x_[ 10 ] }` ),
        "symbolIcon.numberForeground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.objectForeground": this._cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.operatorForeground": this._cO( `${ _c.done.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.packageForeground": this._cO( `${ _c.attention.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.propertyforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "symbolIcon.referenceForeground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.snippetForeground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.stringForeground": this._cO( `${ _c.neutral.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.structForeground": this._cO( `${ _c.accent.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.textForeground": this._cO( `${ _c.success.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.typeParameterForeground": this._cO( `${ _c.danger.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.unitForeground": this._cO( `${ _c.done.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.variableForeground": this._cO( `${ _c.sponsors.muted }${ _x_[ 10 ] }` ),

        "tab.activeBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.activeBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.activeBorderTop": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.activeForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.activeModifiedBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.hoverBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.hoverBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.hoverforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "tab.inactiveBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "tab.inactiveForeground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "tab.inactiveModifiedBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.lastPinnedborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedActiveBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedActiveBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.unfocusedActiveBorderTop": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.unfocusedActiveForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.unfocusedActiveModifiedBorder": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedHoverBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedHoverBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.unfocusedHoverforeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "tab.unfocusedInactiveBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "tab.unfocusedInactiveForeground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedInactiveModifiedBorder": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),

        "terminal.foreground": this._cO( `${ _c.fg.muted }${ _x_[ 7 ] }` ),
        'terminal.ansiBlack': this._cO( `${ _c.ansi.black }${ _x_[ 10 ] }` ),
        'terminal.ansiRed': this._cO( `${ _c.ansi.red }${ _x_[ 10 ] }` ),
        'terminal.ansiGreen': this._cO( `${ _c.ansi.green }${ _x_[ 10 ] }` ),
        'terminal.ansiYellow': this._cO( `${ _c.ansi.yellow }${ _x_[ 10 ] }` ),
        'terminal.ansiBlue': this._cO( `${ _c.ansi.blue }${ _x_[ 10 ] }` ),
        'terminal.ansiMagenta': this._cO( `${ _c.ansi.magenta }${ _x_[ 10 ] }` ),
        'terminal.ansiCyan': this._cO( `${ _c.ansi.cyan }${ _x_[ 10 ] }` ),
        'terminal.ansiWhite': this._cO( `${ _c.ansi.white }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightBlack': this._cO( `${ _c.ansi.blackBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightRed': this._cO( `${ _c.ansi.redBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightGreen': this._cO( `${ _c.ansi.greenBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightYellow': this._cO( `${ _c.ansi.yellowBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightBlue': this._cO( `${ _c.ansi.blueBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightMagenta': this._cO( `${ _c.ansi.magentaBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightCyan': this._cO( `${ _c.ansi.cyanBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightWhite': this._cO( `${ _c.ansi.whiteBright }${ _x_[ 10 ] }` ),


        "terminal.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "terminal.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "terminal.dropBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "terminal.findMatchBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "terminal.findMatchBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "terminal.findMatchHighlightBackground": this._cO( `${ _c.accent.fg }${ _x_[ 2 ] }` ),
        "terminal.findMatchHighlightBorder": this._cO( `${ _c.attention.fg }${ _x_[ 2 ] }` ),
        "terminal.inactiveSelectionBackground": this._cO( `${ _c.attention.fg }${ _x_[ 3 ] }` ),
        "terminal.selectionBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "terminal.selectionForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "terminal.tab.activeBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "terminalCommandDecoration.defaultBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "terminalCommandDecoration.errorBackground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "terminalCommandDecoration.successBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "terminalCursor.background": this._cO( `${ _c.success.fg }${ _x_[ 2 ] }` ),
        "terminalCursor.foreground": this._cO( `${ _c.success.fg }${ _x_[ 10 ] }` ),
        "terminalOverviewRuler.cursorForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "terminalOverviewRuler.findMatchForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),

        "testing.iconErrored": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "testing.iconFailed": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "testing.iconPassed": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "testing.iconQueued": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "testing.iconSkipped": this._cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "testing.iconUnset": this._cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "testing.message.error.decorationForeground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "testing.message.error.lineBackground": this._cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "testing.message.info.decorationForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "testing.message.info.lineBackground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "testing.peekBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "testing.peekHeaderBackground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "testing.runAction": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "textBlockQuote.background": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "textBlockQuote.border": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "textCodeBlock.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),

        "textLink.activeForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "textLink.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "textPreformat.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "textSeparator.foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "titleBar.activeBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "titleBar.activeForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "titleBar.border": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "titleBar.inactiveBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "titleBar.inactiveForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "toolbar.activeBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "toolbar.hoverBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "toolbar.hoverOutline": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),

        "tree.indentGuidesStroke": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tree.tableColumnsborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tree.tableOddRowsBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "walkThrough.embeddedEditorBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "welcomePage.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "welcomePage.progress.background": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "welcomePage.progress.foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "welcomePage.tileBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "welcomePage.tileHoverBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "welcomePage.tileShadow": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),

        "widget.shadow": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "window.activeBorder": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "window.inactiveBorder": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugConsole.errorForeground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "debugConsole.infoForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "debugConsole.sourceForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugConsole.warningForeground": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
        "debugConsoleInputIcon.foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointCurrentStackframeForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointDisabledForeground": this._cO( `${ _c.fg.subtle }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointForeground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointStackframeForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointUnverifiedForeground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "debugIcon.continueForeground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "debugIcon.disconnectForeground": this._cO( `${ _c.danger.fg }${ _x_[ 10 ] }` ),
        "debugIcon.pauseForeground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "debugIcon.restartForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.startForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.stepBackForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.stepIntoForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.stepOutForeground": this._cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.stopForeground": this._cO( `${ _c.danger.fg }${ _x_[ 10 ] }` ),



        "interactive.activeCodeBorder": this._cO( `${ _c.attention.fg }${ _x_[ 7 ] }` ),
        "interactive.inactiveCodeBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "issues.closed": this._cO( `${ _c.danger.fg }${ _x_[ 5 ] }` ),
        "issues.newIssueDecoration": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "issues.open": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),




        "notebook.cellBorderColor": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebook.cellEditorBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "notebook.cellInsertionIndicator": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "notebook.cellToolbarSeparator": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebook.editorBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "notebook.focusedCellBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "notebook.focusedEditorborder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebook.inactiveFocusedCellBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "notebook.selectedCellBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "notebook.selectedCellBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "notebook.symbolHighlightBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "notebookScrollbarSlider.activeBackground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "notebookScrollbarSlider.background": this._cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "notebookScrollbarSlider.hoverBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebookStatusErrorIcon.foreground": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "notebookStatusRunningIcon.foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "notebookStatusSuccessIcon.foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "pullRequests.notification": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "settings.checkboxBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.checkboxBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.checkboxForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "settings.dropdownBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.dropdownBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.dropdownForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "settings.dropdownListBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.focusedRowBackground": this._cO( `${ _c.success.emphasis }${ _x_[ 9 ] }` ),
        "settings.focusedRowBorder": this._cO( `${ _c.success.emphasis }${ _x_[ 6 ] }` ),
        "settings.headerBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.headerForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "settings.modifiedItemIndicator": this._cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "settings.numberInputBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "settings.numberInputBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.numberInputForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "settings.rowHoverBackground": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.sashBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.textInputBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "settings.textInputBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.textInputForeground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBarItem.prominentHoverBackground": this._cO( `${ _c.border.muted }${ _x_[ 3 ] }` ),
        "notebook.cellHoverBackground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "notebook.focusedCellBackground": this._cO( `${ _c.danger.muted }${ _x_[ 3 ] }` ),
        "notebook.inactiveSelectedCellBorder": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebook.outputContainerBackgroundColor": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }` ),
        "notebook.outputContainerBorderColor": this._cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "quickInput.list.focusBackground": this._cO( `${ _c.canvas.overlay }${ _x_[ 10 ] }`, )


      },
      semanticHighlighting: true,
      "tokenColors": [
        {
          "scope": [
            "comment",
            "punctuation.definition.comment",
            "string.comment"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant",
            "entity.name.constant",
            "variable.other.constant",
            "variable.other.enummember",
            "variable.language",
            "entity"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name",
            "meta.export.default",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.parameter.function",
            "meta.jsx.children",
            "meta.block",
            "meta.tag.attributes",
            "entity.name.constant",
            "meta.object.member",
            "meta.embedded.expression"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "entity.name.function",
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name.tag",
            "support.class.component"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "keyword",
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage",
            "storage.type"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string",
            "string punctuation.section.embedded source"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.property-name",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "variable",
          "settings": {
            "foreground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "variable.other",
          "settings": {
            "foreground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "invalid.broken",
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.deprecated",
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.illegal",
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.unimplemented",
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "carriage-return",
          "settings": {
            "foreground": this._cO( `${ _c.closed.fg }${ _x_[ 10 ] }` ),
            "background": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic underline"
          }
        },
        {
          "scope": "message.error",
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "string variable",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "source.regexp",
            "string.regexp"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string.regexp.character-class",
            "string.regexp constant.character.escape",
            "string.regexp source.ruby.embedded",
            "string.regexp string.regexp.arbitrary-repitition"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "string.regexp constant.character.escape",
          "settings": {
            "foreground": this._cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "support.constant",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support.variable",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support.type.property-name.json",
          "settings": {
            "foreground": this._cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.module-reference",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "punctuation.definition.list.begin.markdown",
          "settings": {
            "foreground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.heading",
            "markup.heading entity.name"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.quote",
          "settings": {
            "foreground": this._cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "foreground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "foreground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": [
            "markup.underline"
          ],
          "settings": {
            "fontStyle": "underline"
          }
        },
        {
          "scope": [
            "markup.strikethrough"
          ],
          "settings": {
            "fontStyle": "strikethrough"
          }
        },
        {
          "scope": "markup.inline.raw",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.deleted",
            "meta.diff.header.from-file",
            "punctuation.definition.deleted"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "background": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.section.embedded"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.inserted",
            "meta.diff.header.to-file",
            "punctuation.definition.inserted"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
            "background": this._cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.changed",
            "punctuation.definition.changed"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
            "background": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.ignored",
            "markup.untracked"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.neutral.emphasis }${ _x_[ 10 ] }` ),
            "background": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.diff.range",
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "meta.diff.header",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.separator",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "meta.output",
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "brackethighlighter.tag",
            "brackethighlighter.curly",
            "brackethighlighter.round",
            "brackethighlighter.square",
            "brackethighlighter.angle",
            "brackethighlighter.quote"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.neutral.emphasisPlus }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "brackethighlighter.unmatched",
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.other.reference.link",
            "string.other.link"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
            "fontStyle": "underline"
          }
        },
        {
          "scope": [
            "constant.language",
            "constant.numeric"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "support.type.property-name"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string.regexp",
            "constant.character.escape"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "entity.name.function"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.section.embedded.begin.php",
            "punctuation.section.embedded.end.php",
            "punctuation.definition.parameters.end"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "entity.name.type"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "meta.embedded"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.function"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.type"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.modifier"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.other.readwrite.js"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable",
            "keyword.control"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.language"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword.operator"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "keyword.operator"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.class"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "keyword"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "comment"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.neutral.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.separator.key-value.html"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.tag"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.end.json.comments",
            "punctuation.definition.string.begin.json.comments",
            "punctuation.definition.string.end.js",
            "punctuation.definition.string.begin.js"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.support.type.property-name.begin.json.comments",
            "punctuation.support.type.property-name.end.json.comments"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "source.sql.embedded.php"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.sql",
            "punctuation.definition.string.end.sql",
            "punctuation.separator.dictionary.key-value.json.comments"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "keyword.other.DML.sql",
            "source.sql.embedded.php",
            "string.quoted.single.sql.php",
            "string.quoted.single.php"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string.quoted.other.backtick.sql"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "variable.other.property.js",
            "entity.name.function.member"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.template.begin.js",
            "punctuation.definition.string.template.end.js"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string.quoted.double.html",
            "string.quoted.single.js",
            "string.quoted.double.js",
            "string.template.js"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "text.html.php"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "variable.other.constant",
            "variable.other.constant.object.js",
            "punctuation.definition.template-expression.begin.js"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.separator.comma.js",
            "punctuation.separator.dictionary.pair.json.comments"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.php",
            "punctuation.definition.string.end.php"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.accessor.js"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.accessor.js"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.json"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.argument.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.other.color.rgb-value",
            "support.constant.property-value"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.separator.list.comma.css",
            "punctuation.separator.key-value.css",
            "punctuation.terminator.rule.css",
            "meta.function.calc.css",
            "keyword.operator.arithmetic.css",
            "punctuation.definition.entity.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.css",
            "punctuation.definition.string.end.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string.quoted.single.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
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
          "settings": {
            "foreground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.numeric.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.attribute-name.class.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name.tag.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.css",
            "entity.other.keyframe-offset.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.constant.vendored.property-value.css",
            "support.constant.font-name.css",
            "entity.other.attribute-name.class.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.pseudo-element.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.media.css",
            "support.constant.media.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword.operator.logical.only.media.css",
            "keyword.operator.logical.and.media.css",
            "string.quoted.double.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.id.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.function.transform.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.keyframe-offset.percentage.css"
          ],
          "settings": {
            "foreground": this._cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.info-token",
          "settings": {
            "foreground": this._cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.warn-token",
          "settings": {
            "foreground": this._cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.error-token",
          "settings": {
            "foreground": this._cO( `${ _c.danger.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.debug-token",
          "settings": {
            "foreground": this._cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        }
      ]
    }
  }
}

export default new colorPlaylistGenerated()._gT;
