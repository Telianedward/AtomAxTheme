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

const  hex = ( c ) => {
    return _ch( c ).hex;
  }
  const  hue2rgb_ = ( p, q, t ) => {
    if ( t < 0 ) t += 1;
    if ( t > 1 ) t -= 1;
    if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
    if ( t < 1 / 2 ) return q;
    if ( t < 2 / 3 ) return p + ( q - p ) * ( 2 / 3 - t ) * 6;
    return p;
  }
  const hslToRgb_ = ( h, s, l ) => {
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
      r = hue2rgb_( p, q, h + 1 / 3 ),
      g = hue2rgb_( p, q, h ),
      b = hue2rgb_( p, q, h - 1 / 3 )
    )
    return [ Math.round10( ( r * 255 ), 0 ), Math.round10( ( g * 255 ), 0 ), Math.round10( ( b * 255 ), 0 ) ]
  }
  const hsl_ = ( h, s, l ) => {
    let k = hslToRgb_( h, s, l )
    return _cl.u( k[ 0 ], k[ 1 ], k[ 2 ] )
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
      return "#" + _cl.h( r ) + _cl.h( g ) + _cl.h( b );
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
  const percent2hex = ( p ) => {
    // для ввода % ( процентов  от  0 - 100) в таблице прозрачности 
    return ( Math.round( p / 100 * 255 ) + 0x10000 ).toString( 16 ).substr( -2 )
  }
  const hex2percent = ( p ) => {
    // для ввода окончания прозрачности (узнать на сколько  процентов цвет становиться прозрачным)
    return Math.round( parseInt( `0x${ p }` / 255 * 100 ) )
  }
  const _cO = ( x ) => {
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
    if ( /(rgb)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)/gm.test( x ) ) {
      if ( /^(rgb)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test( x ) ) {
        while ( ( m = j.exec( x ) ) !== null ) {
          h.push( m[ 1 ] );
        }
        k = h[ 0 ].split( ',' )
        return _cl.u( k[ 0 ], k[ 1 ], k[ 2 ] )
      } else if ( /^(rgba)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test( x ) ) {
        while ( ( m = j.exec( x ) ) !== null ) {
          h.push( m[ 1 ] );
        }
        k = h[ 0 ].split( ',' )
        v = _cl.u( k[ 0 ], k[ 1 ], k[ 2 ] )
        if ( k[ 3 ].length == 0 ) {
          return v
        }
        i = k[ 3 ]
        p = i * 100
        o = Math.round10( p, 0 )
        z = `${ v }${ percent2hex( o ) }`
        if ( z.length == 11 ) {
            t = `${ z[ 9 ] }${ z[ 10 ] }`,
            s = `${ z[ 7 ] }${ z[ 8 ] }`,
            a = hex2percent( t ),
            c = hex2percent( a ),
            d = i,
            f = ( 100 - a ) + ( 100 - c ),
            g = ( 100 - f );
          if ( g <= 0 ) {
            return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`
          } else {
            return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ percent2hex( g ) }`
          }
        }
        return z
      }
    } else if ( /(hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)/gm.test( x ) ) {
          if ( /^(hsl)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test( x ) ) {
            while ( ( m = j.exec( x ) ) !== null ) {
              h.push( m[ 1 ] );
            }
            k = h[ 0 ].split( ',' )
            return hsl_( k[ 0 ], k[ 1 ], k[ 2 ] )
          } else if ( /^(hsla)\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)$/gm.test( x ) ) {
            while ( ( m = j.exec( x ) ) !== null ) {
              h.push( m[ 1 ] );
            }
            k = h[ 0 ].split( ',' )
            v = hsl_( k[ 0 ], k[ 1 ], k[ 2 ] )
            if ( k[ 3 ].length == 0 ) {
          return v
        }
        i = k[ 3 ]
        p = i * 100
        o = Math.round10( p, 0 )
        z = `${ v }${ percent2hex( o ) }`
        if ( z.length == 11 ) {
          t = `${ z[ 9 ] }${ z[ 10 ] }`,
            s = `${ z[ 7 ] }${ z[ 8 ] }`,
            a = hex2percent( t ),
            c = hex2percent( a ),

            d = i,
            f = ( 100 - a ) + ( 100 - c ),
            g = ( 100 - f );
          if ( g <= 0 ) {
            return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`
          } else {
            return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ percent2hex( g ) }`
          }
        }
        return z
      }
    } else {
      if ( x.length <= 9 ) {
        return x
      } else if ( x.length == 11 ) {
        t = `${ z[ 9 ] }${ z[ 10 ] }`,
          s = `${ z[ 7 ] }${ z[ 8 ] }`,
          a = hex2percent( t ),
          c = hex2percent( a ),
          d = i,
          f = ( 100 - a ) + ( 100 - c ),
          g = ( 100 - f );
        if ( g <= 0 ) {
          return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }1a`
        } else {
          return `#${ z[ 1 ] }${ z[ 2 ] }${ z[ 3 ] }${ z[ 4 ] }${ z[ 5 ] }${ z[ 6 ] }${ percent2hex( g ) }`
        }
      }
    }
  }
  const _gT = ( { theme, name } ) => {
    const themes = ( options ) => { options[ theme ] },
      _c = _gC( theme ),
      _x_ = [ "00", "a1", "33", "4d", "66", "80", "99", "b3", "cd", "e6", "" ],
      _bc_ = themes( {
        l: _cO( `${ hex( _c.canvas.subtle ) }` ),
        lHC: _cO( `${ hex( _c.canvas.subtle ) }` ),
        lC: _cO( `${ hex( _c.canvas.subtle ) }` ),
        lT: _cO( `${ hex( _c.canvas.subtle ) }` ),
        d: _cO( `${ hex( _c.canvas.inset ) }` ),
        dd: _cO( `${ hex( _c.canvas.inset ) }` ),
        dhc: _cO( `${ hex( _c.canvas.inset ) }` ),
        dc: _cO( `${ hex( _c.canvas.inset ) }` ),
        dt: _cO( `${ hex( _c.canvas.inset ) }`, )
      } ),
      _boc_ = themes( {
        l: _cO( `${ hex( _c.neutral.muted ) }` ),
        lHC: _cO( `${ hex( _c.neutral.muted ) }` ),
        lC: _cO( `${ hex( _c.neutral.muted ) }` ),
        lT: _cO( `${ hex( _c.neutral.muted ) }` ),
        d: _cO( `${ hex( _c.border.muted ) }` ),
        dd: _cO( `${ hex( _c.border.muted ) }` ),
        dhc: _cO( `${ hex( _c.border.muted ) }` ),
        dc: _cO( `${ hex( _c.border.muted ) }` ),
        dt: _cO( `${ hex( _c.border.muted ) }`, )
      } ),
      _fc_ = themes( {
        l: _cO( `${ hex( _c.fg.default ) }` ),
        lHC: _cO( `${ hex( _c.fg.default ) }` ),
        lC: _cO( `${ hex( _c.fg.default ) }` ),
        lT: _cO( `${ hex( _c.fg.default ) }` ),
        d: _cO( `${ hex( _c.fg.default ) }` ),
        dd: _cO( `${ hex( _c.fg.default ) }` ),
        dhc: _cO( `${ hex( _c.fg.default ) }` ),
        dc: _cO( `${ hex( _c.fg.default ) }` ),
        dt: _cO( `${ hex( _c.fg.default ) }`, )
      } ),
      _fuc_ = themes( {
        l: _cO( `${ hex( _c.fg.muted ) }` ),
        lHC: _cO( `${ hex( _c.fg.muted ) }` ),
        lC: _cO( `${ hex( _c.fg.muted ) }` ),
        lT: _cO( `${ hex( _c.fg.muted ) }` ),
        d: _cO( `${ hex( _c.fg.muted ) }` ),
        dd: _cO( `${ hex( _c.fg.muted ) }` ),
        dhc: _cO( `${ hex( _c.fg.muted ) }` ),
        dc: _cO( `${ hex( _c.fg.muted ) }` ),
        dt: _cO( `${ hex( _c.fg.muted ) }`, )
      } )
    return {
      name: name,
      _cs: {
        "activityBar.activeBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "activityBar.activeBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "activityBar.activeFocusBorder": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "activityBar.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "activityBar.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "activityBar.dropBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "activityBar.foreground": _cO( `${ _c.success.emphasis }${ _x_[ 8 ] }` ),
        "activityBar.inactiveForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "activityBarBadge.background": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "activityBarBadge.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "badge.background": _cO( `${ _c.accent.muted }${ _x_[ 7 ] }` ),
        "badge.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "banner.background": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "banner.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "banner.iconForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "breadcrumb.activeSelectionforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "breadcrumb.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "breadcrumb.focusforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "breadcrumb.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "breadcrumbPicker.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),

        "button.background": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "button.border": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "button.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "button.hoverBackground": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "button.secondaryBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "button.secondaryforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "button.secondaryHoverBackground": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "button.separator": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),

        "charts.blue": _cO( `${ _c.accent.muted }${ _x_[ 10 ] }` ),
        "charts.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "charts.green": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "charts.lines": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "charts.orange": _cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "charts.purple": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "charts.red": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "charts.yellow": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),


        "checkbox.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "checkbox.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "checkbox.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "commandCenter.activeBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "commandCenter.activeforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "commandCenter.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "commandCenter.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "commandCenter.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "contrastActiveborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "contrastBorder": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),

        "debugExceptionWidget.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "debugExceptionWidget.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "debugTokenExpression.boolean": _cO( `${ _c.attention.fg }${ _x_[ 5 ] }` ),
        "debugTokenExpression.error": _cO( `${ _c.danger.fg }${ _x_[ 5 ] }` ),
        "debugTokenExpression.name": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugTokenExpression.number": _cO( `${ _c.severe.fg }${ _x_[ 5 ] }` ),
        "debugTokenExpression.string": _cO( `${ _c.fg.muted }${ _x_[ 5 ] }` ),
        "debugTokenExpression.value": _cO( `${ _c.sponsors.fg }${ _x_[ 5 ] }` ),

        "debugToolBar.background": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "debugToolBar.border": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),

        "debugView.exceptionLabelBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "debugView.exceptionLabelforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugView.stateLabelBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "debugView.stateLabelforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugView.valueChangedHighlight": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "descriptionForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "diffEditor.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "diffEditor.diagonalFill": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "diffEditor.insertedLineBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditor.insertedTextBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditor.insertedTextBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditor.removedLineBackground": _cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),
        "diffEditor.removedTextBackground": _cO( `${ _c.danger.muted }${ _x_[ 7 ] }` ),
        "diffEditor.removedTextBorder": _cO( `${ _c.danger.muted }${ _x_[ 7 ] }` ),
        "diffEditorGutter.insertedLineBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditorGutter.removedLineBackground": _cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),
        "diffEditorOverview.insertedForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "diffEditorOverview.removedForeground": _cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),

        "disabledForeground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),

        "dropdown.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "dropdown.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "dropdown.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "dropdown.listBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "editor.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editor.findMatchBackground": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "editor.findMatchBorder": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "editor.findMatchHighlightBackground": _cO( `${ _c.attention.emphasis }${ _x_[ 2 ] }` ),
        "editor.findMatchHighlightBorder": _cO( `${ _c.attention.emphasis }${ _x_[ 2 ] }` ),
        "editor.findRangeHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editor.findRangeHighlightBorder": _cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editor.focusedStackFrameHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editor.foldBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editor.hoverHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "editor.inactiveSelectionBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.inlineValuesBackground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editor.inlineValuesforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editor.lineHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 2 ] }` ),
        "editor.lineHighlightBorder": _cO( `${ _c.success.emphasis }${ _x_[ 2 ] }` ),
        "editor.linkedEditingBackground": _cO( `${ _c.attention.fg }${ _x_[ 8 ] }` ),
        "editor.rangeHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editor.rangeHighlightBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editor.selectionBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.selectionForeground": _cO( `${ _c.accent.muted }}${ _x_[ 5 ] }` ),
        "editor.selectionHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editor.selectionHighlightborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.snippetFinalTabstopHighlightBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editor.snippetFinalTabstopHighlightborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.snippetTabstopHighlightBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.snippetTabstopHighlightborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.stackFrameHighlightbackground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editor.symbolHighlightBackground": _cO( `${ _c.done.emphasis }${ _x_[ 5 ] }` ),
        "editor.symbolHighlightBorder": _cO( `${ _c.done.emphasis }${ _x_[ 4 ] }` ),
        "editor.wordHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editor.wordHighlightBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editor.wordHighlightStrongBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editor.wordHighlightStrongBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground1": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground2": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground3": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground4": _cO( `${ _c.closed.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground5": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.foreground6": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
        "editorBracketHighlight.unexpectedBracket.foreground": _cO( `${ _c.sponsors.muted }${ _x_[ 10 ] }` ),
        "editorBracketMatch.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorBracketMatch.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorBracketPairGuide.activeBackground1": _cO( `${ _c.sponsors.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.activeBackground2": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorBracketPairGuide.activeBackground3": _cO( `${ _c.done.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.activeBackground4": _cO( `${ _c.closed.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.activeBackground5": _cO( `${ _c.attention.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.activeBackground6": _cO( `${ _c.severe.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background1": _cO( `${ _c.sponsors.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background2": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorBracketPairGuide.background3": _cO( `${ _c.done.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background4": _cO( `${ _c.closed.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background5": _cO( `${ _c.attention.fg }${ _x_[ 7 ] }` ),
        "editorBracketPairGuide.background6": _cO( `${ _c.severe.fg }${ _x_[ 7 ] }` ),
        "editorCodeLens.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.rangeActiveBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.rangeActiveborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.rangeBackground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.rangeborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.resolvedBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCommentsWidget.unresolvedBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorCursor.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorCursor.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorError.background": _cO( `${ _c.danger.muted }${ _x_[ 7 ] }` ),
        "editorError.border": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "editorError.foreground": _cO( `${ _c.danger.muted }${ _x_[ 7 ] }` ),
        "editorGhostText.background": _cO( `${ _c.success.emphasis }${ _x_[ 7 ] }` ),
        "editorGhostText.border": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorGhostText.foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorGroup.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorGroup.dropBackground": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "editorGroup.dropIntoPromptBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorGroup.dropIntoPromptborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorGroup.dropIntoPromptforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorGroup.emptyBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorGroup.focusedEmptyBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorGroupHeader.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorGroupHeader.noTabsBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorGroupHeader.tabsBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorGutter.addedBackground": _cO( `${ _c.success.fg }${ _x_[ 10 ] }` ),
        "editorGutter.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorGutter.commentRangeforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorGutter.deletedBackground": _cO( `${ _c.danger.fg }${ _x_[ 10 ] }` ),
        "editorGutter.foldingControlforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorGutter.modifiedBackground": _cO( `${ _c.success.fg }${ _x_[ 10 ] }` ),
        "editorHint.border": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorHint.foreground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "editorHoverWidget.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorHoverWidget.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorHoverWidget.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorHoverWidget.highlightForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorHoverWidget.statusBarBackground": _cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),
        "editorIndentGuide.activeBackground": _cO( `${ _c.danger.muted }${ _x_[ 9 ] }` ),
        "editorIndentGuide.background": _cO( `${ _c.fg.default }${ _x_[ 0 ] }` ),
        "editorInfo.background": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorInfo.border": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "editorInfo.foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorInlayHint.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorInlayHint.foreground": _cO( `${ _c.fg.default }${ _x_[ 4 ] }` ),
        "editorInlayHint.parameterBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorInlayHint.parameterForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorInlayHint.typeBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorInlayHint.typeForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorLightBulb.foreground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "editorLightBulbAutoFix.foreground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorLineNumber.activeForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorLineNumber.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorLink.activeForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorMarkerNavigation.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorMarkerNavigationError.background": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "editorMarkerNavigationError.headerBackground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "editorMarkerNavigationInfo.background": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorMarkerNavigationInfo.headerBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorMarkerNavigationWarning.background": _cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "editorMarkerNavigationWarning.headerBackground": _cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.addedForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.border": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.bracketMatchForeground": _cO( `${ _c.done.muted }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.commonContentforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.currentContentForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.deletedForeground": _cO( `${ _c.attention.fg }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.errorForeground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.findMatchForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.incomingContentforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorOverviewRuler.infoForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.modifiedForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.rangeHighlightForeground": _cO( `${ _c.success.emphasis }${ _x_[ 8 ] }` ),
        "editorOverviewRuler.selectionHighlightForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.warningForeground": _cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.wordHighlightForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorOverviewRuler.wordHighlightStrongForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorPane.background": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorRuler.foreground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorStickyScroll.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorStickyScrollHover.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.focusHighlightforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.highlightforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.selectedBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.selectedforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidget.selectedIconforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorSuggestWidgetStatus.foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "editorUnicodeHighlight.background": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorUnicodeHighlight.border": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "editorUnnecessaryCode.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorUnnecessaryCode._x_": _cO( `${ _c.danger.muted }${ _x_[ 3 ] }` ),
        "editorWarning.background": _cO( `${ _c.severe.muted }${ _x_[ 0 ] }` ),

        "editorWarning.border": _cO( `${ _c.severe.muted }${ _x_[ 8 ] }` ),
        "editorWarning.foreground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "editorWhitespace.foreground": _cO( `${ _c.sponsors.muted }${ _x_[ 10 ] }` ),
        "editorWidget.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "editorWidget.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "editorWidget.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "editorWidget.resizeBorder": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),


        "errorForeground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),

        "extensionBadge.remoteBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "extensionBadge.remoteforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "extensionButton.prominentBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "extensionButton.prominentforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "extensionButton.prominentHoverBackground": _cO( `${ _c.success.emphasis }${ _x_[ 6 ] }` ),

        "extensionIcon.preReleaseForeground": _cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "extensionIcon.sponsorForeground": _cO( `${ _c.done.muted }${ _x_[ 10 ] }` ),
        "extensionIcon.starForeground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "extensionIcon.verifiedForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "focusBorder": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "gitDecoration.addedResourceForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "gitDecoration.conflictingResourceForeground": _cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "gitDecoration.deletedResourceForeground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "gitDecoration.ignoredResourceForeground": _cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "gitDecoration.modifiedResourceForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "gitDecoration.renamedResourceforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "gitDecoration.stageDeletedResourceForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "gitDecoration.stageModifiedResourceForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "gitDecoration.submoduleResourceForeground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "gitDecoration.untrackedResourceforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "icon.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "input.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "input.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "input.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "input.placeholderForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "inputOption.activeBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "inputOption.activeBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "inputOption.activeForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "inputOption.hoverBackground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "inputValidation.errorBackground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "inputValidation.errorBorder": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "inputValidation.errorForeground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "inputValidation.infoBackground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "inputValidation.infoBorder": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "inputValidation.infoForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "inputValidation.warningBackground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "inputValidation.warningBorder": _cO( `${ _c.danger.fg }${ _x_[ 5 ] }` ),
        "inputValidation.warningForeground": _cO( `${ _c.danger.fg }${ _x_[ 5 ] }` ),

        "keybindingLabel.border": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "keybindingLabel.bottomBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "keybindingLabel.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "keybindingLabel.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "keybindingTable.headerBackground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "keybindingTable.rowsBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "list.activeSelectionBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "list.activeSelectionforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.activeSelectionIconForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "list.deemphasizedForeground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "list.dropBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.errorForeground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "list.filterMatchBackground": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "list.filterMatchBorder": _cO( `${ _c.success.emphasis }${ _x_[ 6 ] }` ),
        "list.focusAndSelectionOutline": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.focusBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.focusforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.focusHighlightForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.focusOutline": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "list.highlightforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.hoverBackground": _cO( `${ _c.success.emphasis }${ _x_[ 8 ] }` ),
        "list.hoverforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.inactiveFocusBackground": _cO( `${ _c.success.emphasis }${ _x_[ 9 ] }` ),
        "list.inactiveFocusOutline": _cO( `${ _c.success.emphasis }${ _x_[ 9 ] }` ),
        "list.inactiveSelectionBackground": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "list.inactiveSelectionforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "list.inactiveSelectionIconForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "list.invalidItemForeground": _cO( `${ _c.danger.muted }${ _x_[ 4 ] }` ),
        "list.warningForeground": _cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "listFilterWidget.background": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "listFilterWidget.noMatchesOutline": _cO( `${ _c.neutral.emphasis }${ _x_[ 5 ] }` ),
        "listFilterWidget.outline": _cO( `${ _c.accent.fg }${ _x_[ 4 ] }` ),
        "listFilterWidget.shadow": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "menu.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "menu.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "menu.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "menu.selectionBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "menu.selectionBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "menu.selectionforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "menu.separatorBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "menubar.selectionBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "menubar.selectionBorder": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "menubar.selectionForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "merge.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "merge.commonContentBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "merge.commonHeaderBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "merge.currentContentBackground": _cO( `${ _c.danger.muted }${ _x_[ 6 ] }` ),
        "merge.currentHeaderBackground": _cO( `${ _c.danger.muted }${ _x_[ 8 ] }` ),
        "merge.incomingContentBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "merge.incomingHeaderBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "mergeEditor.change.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "mergeEditor.change.word.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "mergeEditor.conflict.handled.minimapOverViewRuler": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "mergeEditor.conflict.handledFocused.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "mergeEditor.conflict.handledUnfocused.border": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "mergeEditor.conflict.unhandledFocused.border": _cO( `${ _c.attention.fg }${ _x_[ 5 ] }` ),
        "mergeEditor.conflict.unhandledUnfocused.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "mergeEditor.conflictingLines.background": _cO( `${ _c.danger.muted }${ _x_[ 3 ] }` ),

        "minimap.background": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "minimap.errorHighlight": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "minimap.findMatchHighlight": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "minimap.foregroundOpacity": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "minimap.selectionHighlight": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "minimap.selectionOccurrenceHighlight": _cO( `${ _c.success.emphasis }${ _x_[ 8 ] }` ),
        "minimap.warningHighlight": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "minimapGutter.addedBackground": _cO( `${ _c.accent.fg }${ _x_[ 7 ] }` ),
        "minimapGutter.deletedBackground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "minimapGutter.modifiedBackground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "minimapSlider.activeBackground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "minimapSlider.background": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "minimapSlider.hoverBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "notificationCenter.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notificationCenterHeader.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "notificationCenterHeader.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "notificationLink.foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "notificationToast.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "notifications.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "notifications.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notifications.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "notificationsErrorIcon.foreground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "notificationsInfoIcon.foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "notificationsWarningIcon.foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "panel.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "panel.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "panel.dropBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "panelInput.border": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "panelSection.border": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "panelSection.dropBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "panelSectionHeader.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "panelSectionHeader.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "panelSectionHeader.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "panelTitle.activeBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "panelTitle.activeforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "panelTitle.inactiveforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "peekView.border": _cO( `${ _c.attention.fg }${ _x_[ 7 ] }` ),
        "peekViewEditor.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "peekViewEditor.matchHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "peekViewEditor.matchHighlightBorder": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "peekViewEditorGutter.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "peekViewResult.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "peekViewResult.fileforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "peekViewResult.lineforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "peekViewResult.matchHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "peekViewResult.selectionBackground": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),
        "peekViewResult.selectionForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "peekViewTitle.background": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "peekViewTitleDescription.foreground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "peekViewTitleLabel.foreground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "pickerGroup.border": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "pickerGroup.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "ports.iconRunningProcessForeground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),

        "problemsErrorIcon.foreground": _cO( `${ _c.success.emphasis }${ _x_[ 4 ] }` ),

        "problemsInfoIcon.foreground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),

        "problemsWarningIcon.foreground": _cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),

        "progressBar.background": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),

        "quickInput.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "quickInput.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "quickInputList.focusBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "quickInputList.focusforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "quickInputList.focusIconForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "quickInputTitle.background": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "sash.hoverBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "scm.providerborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "scrollbar.shadow": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "scrollbarSlider.activeBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "scrollbarSlider.background": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "scrollbarSlider.hoverbackground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "searchEditor.findMatchBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "searchEditor.findMatchBorder": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "searchEditor.textInputborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "selection.background": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),

        "sideBar.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "sideBar.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "sideBar.dropBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "sideBar.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "sideBarSectionHeader.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "sideBarSectionHeader.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "sideBarSectionHeader.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "sideBarTitle.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "sideBySideEditor.horizontalBorder": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "sideBySideEditor.verticalBorder": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),

        "statusBar.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "statusBar.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "statusBar.debuggingBackground": _cO( `${ _c.danger.muted }${ _x_[ 6 ] }` ),
        "statusBar.debuggingBorder": _cO( `${ _c.done.muted }${ _x_[ 10 ] }` ),
        "statusBar.debuggingforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBar.focusborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "statusBar.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBar.noFolderBackground": _cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "statusBar.noFolderBorder": _cO( `${ _c.severe.muted }${ _x_[ 5 ] }` ),
        "statusBar.noFolderforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBarItem.activeBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "statusBarItem.compactHoverBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "statusBarItem.errorBackground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "statusBarItem.errorForeground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "statusBarItem.focusborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "statusBarItem.hoverBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "statusBarItem.prominentBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "statusBarItem.prominentForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "statusBarItem.remoteBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "statusBarItem.remoteforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBarItem.settingsProfilesBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "statusBarItem.settingsProfilesforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBarItem.warningBackground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "statusBarItem.warningForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),

        "symbolIcon.arrayForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.booleanForeground": _cO( `${ _c.done.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.classForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.colorForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.constantForeground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.constructorForeground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.enumeratorForeground": _cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.enumeratorMemberForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.eventForeground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.fieldForeground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.fileForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.folderForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "symbolIcon.functionForeground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.interfaceForeground": _cO( `${ _c.danger.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.keyForeground": _cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.keywordForeground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.methodForeground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.moduleForeground": _cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
        "symbolIcon.namespaceForeground": _cO( `${ _c.attention.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.nullForeground": _cO( `${ _c.neutral.emphasisPlus }${ _x_[ 10 ] }` ),
        "symbolIcon.numberForeground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.objectForeground": _cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.operatorForeground": _cO( `${ _c.done.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.packageForeground": _cO( `${ _c.attention.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.propertyforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "symbolIcon.referenceForeground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.snippetForeground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.stringForeground": _cO( `${ _c.neutral.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.structForeground": _cO( `${ _c.accent.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.textForeground": _cO( `${ _c.success.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.typeParameterForeground": _cO( `${ _c.danger.emphasis }${ _x_[ 10 ] }` ),
        "symbolIcon.unitForeground": _cO( `${ _c.done.muted }${ _x_[ 10 ] }` ),
        "symbolIcon.variableForeground": _cO( `${ _c.sponsors.muted }${ _x_[ 10 ] }` ),

        "tab.activeBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.activeBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.activeBorderTop": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.activeForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.activeModifiedBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.hoverBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.hoverBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.hoverforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "tab.inactiveBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "tab.inactiveForeground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "tab.inactiveModifiedBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.lastPinnedborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedActiveBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedActiveBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.unfocusedActiveBorderTop": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.unfocusedActiveForeground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.unfocusedActiveModifiedBorder": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedHoverBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedHoverBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tab.unfocusedHoverforeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "tab.unfocusedInactiveBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "tab.unfocusedInactiveForeground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "tab.unfocusedInactiveModifiedBorder": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),

        "terminal.foreground": _cO( `${ _c.fg.muted }${ _x_[ 7 ] }` ),
        'terminal.ansiBlack': _cO( `${ _c.ansi.black }${ _x_[ 10 ] }` ),
        'terminal.ansiRed': _cO( `${ _c.ansi.red }${ _x_[ 10 ] }` ),
        'terminal.ansiGreen': _cO( `${ _c.ansi.green }${ _x_[ 10 ] }` ),
        'terminal.ansiYellow': _cO( `${ _c.ansi.yellow }${ _x_[ 10 ] }` ),
        'terminal.ansiBlue': _cO( `${ _c.ansi.blue }${ _x_[ 10 ] }` ),
        'terminal.ansiMagenta': _cO( `${ _c.ansi.magenta }${ _x_[ 10 ] }` ),
        'terminal.ansiCyan': _cO( `${ _c.ansi.cyan }${ _x_[ 10 ] }` ),
        'terminal.ansiWhite': _cO( `${ _c.ansi.white }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightBlack': _cO( `${ _c.ansi.blackBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightRed': _cO( `${ _c.ansi.redBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightGreen': _cO( `${ _c.ansi.greenBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightYellow': _cO( `${ _c.ansi.yellowBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightBlue': _cO( `${ _c.ansi.blueBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightMagenta': _cO( `${ _c.ansi.magentaBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightCyan': _cO( `${ _c.ansi.cyanBright }${ _x_[ 10 ] }` ),
        'terminal.ansiBrightWhite': _cO( `${ _c.ansi.whiteBright }${ _x_[ 10 ] }` ),


        "terminal.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "terminal.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "terminal.dropBackground": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "terminal.findMatchBackground": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "terminal.findMatchBorder": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "terminal.findMatchHighlightBackground": _cO( `${ _c.accent.fg }${ _x_[ 2 ] }` ),
        "terminal.findMatchHighlightBorder": _cO( `${ _c.attention.fg }${ _x_[ 2 ] }` ),
        "terminal.inactiveSelectionBackground": _cO( `${ _c.attention.fg }${ _x_[ 3 ] }` ),
        "terminal.selectionBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "terminal.selectionForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "terminal.tab.activeBorder": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "terminalCommandDecoration.defaultBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "terminalCommandDecoration.errorBackground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "terminalCommandDecoration.successBackground": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "terminalCursor.background": _cO( `${ _c.success.fg }${ _x_[ 2 ] }` ),
        "terminalCursor.foreground": _cO( `${ _c.success.fg }${ _x_[ 10 ] }` ),
        "terminalOverviewRuler.cursorForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "terminalOverviewRuler.findMatchForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),

        "testing.iconErrored": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "testing.iconFailed": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "testing.iconPassed": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "testing.iconQueued": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "testing.iconSkipped": _cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "testing.iconUnset": _cO( `${ _c.severe.muted }${ _x_[ 10 ] }` ),
        "testing.message.error.decorationForeground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "testing.message.error.lineBackground": _cO( `${ _c.danger.muted }${ _x_[ 5 ] }` ),
        "testing.message.info.decorationForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "testing.message.info.lineBackground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "testing.peekBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "testing.peekHeaderBackground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "testing.runAction": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "textBlockQuote.background": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "textBlockQuote.border": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "textCodeBlock.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),

        "textLink.activeForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "textLink.foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),

        "textPreformat.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "textSeparator.foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "titleBar.activeBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "titleBar.activeForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "titleBar.border": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "titleBar.inactiveBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "titleBar.inactiveForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),

        "toolbar.activeBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "toolbar.hoverBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "toolbar.hoverOutline": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),

        "tree.indentGuidesStroke": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "tree.tableColumnsborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "tree.tableOddRowsBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "walkThrough.embeddedEditorBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),

        "welcomePage.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "welcomePage.progress.background": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "welcomePage.progress.foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "welcomePage.tileBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "welcomePage.tileHoverBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "welcomePage.tileShadow": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),

        "widget.shadow": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "window.activeBorder": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "window.inactiveBorder": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugConsole.errorForeground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "debugConsole.infoForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "debugConsole.sourceForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugConsole.warningForeground": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
        "debugConsoleInputIcon.foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointCurrentStackframeForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointDisabledForeground": _cO( `${ _c.fg.subtle }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointForeground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointStackframeForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "debugIcon.breakpointUnverifiedForeground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
        "debugIcon.continueForeground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "debugIcon.disconnectForeground": _cO( `${ _c.danger.fg }${ _x_[ 10 ] }` ),
        "debugIcon.pauseForeground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "debugIcon.restartForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.startForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.stepBackForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.stepIntoForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.stepOutForeground": _cO( `${ _c.accent.fg }${ _x_[ 5 ] }` ),
        "debugIcon.stopForeground": _cO( `${ _c.danger.fg }${ _x_[ 10 ] }` ),



        "interactive.activeCodeBorder": _cO( `${ _c.attention.fg }${ _x_[ 7 ] }` ),
        "interactive.inactiveCodeBorder": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "issues.closed": _cO( `${ _c.danger.fg }${ _x_[ 5 ] }` ),
        "issues.newIssueDecoration": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "issues.open": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),




        "notebook.cellBorderColor": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebook.cellEditorBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "notebook.cellInsertionIndicator": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "notebook.cellToolbarSeparator": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebook.editorBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "notebook.focusedCellBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "notebook.focusedEditorborder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebook.inactiveFocusedCellBorder": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "notebook.selectedCellBackground": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "notebook.selectedCellBorder": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "notebook.symbolHighlightBackground": _cO( `${ _c.success.emphasis }${ _x_[ 3 ] }` ),
        "notebookScrollbarSlider.activeBackground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "notebookScrollbarSlider.background": _cO( `${ _c.success.emphasis }${ _x_[ 5 ] }` ),
        "notebookScrollbarSlider.hoverBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebookStatusErrorIcon.foreground": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "notebookStatusRunningIcon.foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "notebookStatusSuccessIcon.foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
        "pullRequests.notification": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
        "settings.checkboxBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.checkboxBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.checkboxForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "settings.dropdownBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.dropdownBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.dropdownForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "settings.dropdownListBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.focusedRowBackground": _cO( `${ _c.success.emphasis }${ _x_[ 9 ] }` ),
        "settings.focusedRowBorder": _cO( `${ _c.success.emphasis }${ _x_[ 6 ] }` ),
        "settings.headerBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.headerForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "settings.modifiedItemIndicator": _cO( `${ _c.danger.muted }${ _x_[ 10 ] }` ),
        "settings.numberInputBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "settings.numberInputBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.numberInputForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "settings.rowHoverBackground": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.sashBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.textInputBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "settings.textInputBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "settings.textInputForeground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
        "statusBarItem.prominentHoverBackground": _cO( `${ _c.border.muted }${ _x_[ 3 ] }` ),
        "notebook.cellHoverBackground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
        "notebook.focusedCellBackground": _cO( `${ _c.danger.muted }${ _x_[ 3 ] }` ),
        "notebook.inactiveSelectedCellBorder": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "notebook.outputContainerBackgroundColor": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }` ),
        "notebook.outputContainerBorderColor": _cO( `${ _c.border.muted }${ _x_[ 10 ] }` ),
        "quickInput.list.focusBackground": _cO( `${ _c.canvas.inset }${ _x_[ 10 ] }`, )


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
            "foreground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name",
            "meta.export.default",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "entity.name.function",
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name.tag",
            "support.class.component"
          ],
          "settings": {
            "foreground": _cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "keyword",
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage",
            "storage.type"
          ],
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
          ],
          "settings": {
            "foreground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string",
            "string punctuation.section.embedded source"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.property-name",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "variable",
          "settings": {
            "foreground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "variable.other",
          "settings": {
            "foreground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "invalid.broken",
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.deprecated",
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.illegal",
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.unimplemented",
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "carriage-return",
          "settings": {
            "foreground": _cO( `${ _c.closed.fg }${ _x_[ 10 ] }` ),
            "background": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic underline"
          }
        },
        {
          "scope": "message.error",
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "string variable",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "source.regexp",
            "string.regexp"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "string.regexp constant.character.escape",
          "settings": {
            "foreground": _cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "support.constant",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support.variable",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support.type.property-name.json",
          "settings": {
            "foreground": _cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.module-reference",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "punctuation.definition.list.begin.markdown",
          "settings": {
            "foreground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.heading",
            "markup.heading entity.name"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.quote",
          "settings": {
            "foreground": _cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "foreground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "foreground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.deleted",
            "meta.diff.header.from-file",
            "punctuation.definition.deleted"
          ],
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "background": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.section.embedded"
          ],
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.inserted",
            "meta.diff.header.to-file",
            "punctuation.definition.inserted"
          ],
          "settings": {
            "foreground": _cO( `${ _c.open.emphasis }${ _x_[ 10 ] }` ),
            "background": _cO( `${ _c.open.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.changed",
            "punctuation.definition.changed"
          ],
          "settings": {
            "foreground": _cO( `${ _c.severe.emphasis }${ _x_[ 10 ] }` ),
            "background": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.ignored",
            "markup.untracked"
          ],
          "settings": {
            "foreground": _cO( `${ _c.neutral.emphasis }${ _x_[ 10 ] }` ),
            "background": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.diff.range",
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "meta.diff.header",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.separator",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "meta.output",
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.neutral.emphasisPlus }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "brackethighlighter.unmatched",
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.other.reference.link",
            "string.other.link"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
            "fontStyle": "underline"
          }
        },
        {
          "scope": [
            "constant.language",
            "constant.numeric"
          ],
          "settings": {
            "foreground": _cO( `${ _c.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "support.type.property-name"
          ],
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string"
          ],
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string.regexp",
            "constant.character.escape"
          ],
          "settings": {
            "foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string"
          ],
          "settings": {
            "foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name"
          ],
          "settings": {
            "foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "entity.name.function"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "entity.name.type"
          ],
          "settings": {
            "foreground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "meta.embedded"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.function"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.type"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.modifier"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable"
          ],
          "settings": {
            "foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.other.readwrite.js"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable",
            "keyword.control"
          ],
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.language"
          ],
          "settings": {
            "foreground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword.operator"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "keyword.operator"
          ],
          "settings": {
            "foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.class"
          ],
          "settings": {
            "foreground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "keyword"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "comment"
          ],
          "settings": {
            "foreground": _cO( `${ _c.neutral.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.separator.key-value.html"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.tag"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.support.type.property-name.begin.json.comments",
            "punctuation.support.type.property-name.end.json.comments"
          ],
          "settings": {
            "foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html"
          ],
          "settings": {
            "foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "source.sql.embedded.php"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string.quoted.other.backtick.sql"
          ],
          "settings": {
            "foreground": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "variable.other.property.js",
            "entity.name.function.member"
          ],
          "settings": {
            "foreground": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.template.begin.js",
            "punctuation.definition.string.template.end.js"
          ],
          "settings": {
            "foreground": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "text.html.php"
          ],
          "settings": {
            "foreground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.separator.comma.js",
            "punctuation.separator.dictionary.pair.json.comments"
          ],
          "settings": {
            "foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.php",
            "punctuation.definition.string.end.php"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.accessor.js"
          ],
          "settings": {
            "foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.accessor.js"
          ],
          "settings": {
            "foreground": _cO( `${ _c.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.json"
          ],
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.argument.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.other.color.rgb-value",
            "support.constant.property-value"
          ],
          "settings": {
            "foreground": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.css",
            "punctuation.definition.string.end.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string.quoted.single.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.fg.muted }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.numeric.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.severe.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.attribute-name.class.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name.tag.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.css",
            "entity.other.keyframe-offset.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.constant.vendored.property-value.css",
            "support.constant.font-name.css",
            "entity.other.attribute-name.class.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.pseudo-element.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.media.css",
            "support.constant.media.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword.operator.logical.only.media.css",
            "keyword.operator.logical.and.media.css",
            "string.quoted.double.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.id.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.function.transform.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.keyframe-offset.percentage.css"
          ],
          "settings": {
            "foreground": _cO( `${ _c.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.info-token",
          "settings": {
            "foreground": _cO( `${ _c.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.warn-token",
          "settings": {
            "foreground": _cO( `${ _c.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.error-token",
          "settings": {
            "foreground": _cO( `${ _c.danger.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.debug-token",
          "settings": {
            "foreground": _cO( `${ _c.done.fg }${ _x_[ 10 ] }` ),
          }
        }
      ]
    }
  }


export default _gT;
