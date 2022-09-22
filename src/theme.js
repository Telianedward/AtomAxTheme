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
      const themes = ( options ) => { options[ theme ] }
      const color = _gC( theme )
      const _x_ = [ "00", "a1", "33", "4d", "66", "80", "99", "b3", "cd", "e6", "" ]
     
    return {
      name: name,
      type:     themes( {
        l: "vs",
        lHC:  "hc-light",
        lC:  "vs",
        lT:  "hc-light",
        d:  "vs-dark",
        dd:  "vs-dark",
        dhc:  "hc-black",
        dc:  "vs-dark",
        dt:  "hc-black",
      } ),
      color: {
            "activityBar.activeBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "activityBar.activeBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "activityBar.activeFocusBorder": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "activityBar.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "activityBar.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "activityBar.dropBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "activityBar.foreground": _cO( `${color.success.emphasis }${ _x_[ 8 ] }` ),
            "activityBar.inactiveForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "activityBarBadge.background": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "activityBarBadge.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "badge.background": _cO( `${color.accent.muted }${ _x_[ 7 ] }` ),
            "badge.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "banner.background": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "banner.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "banner.iconForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),

            "breadcrumb.activeSelectionforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "breadcrumb.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "breadcrumb.focusforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "breadcrumb.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "breadcrumbPicker.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),

            "button.background": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "button.border": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "button.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "button.hoverBackground": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "button.secondaryBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "button.secondaryforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "button.secondaryHoverBackground": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "button.separator": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),

            "charts.blue": _cO( `${color.accent.muted }${ _x_[ 10 ] }` ),
            "charts.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "charts.green": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "charts.lines": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
            "charts.orange": _cO( `${color.severe.muted }${ _x_[ 10 ] }` ),
            "charts.purple": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "charts.red": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "charts.yellow": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),


            "checkbox.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "checkbox.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "checkbox.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "commandCenter.activeBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "commandCenter.activeforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "commandCenter.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "commandCenter.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "commandCenter.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "contrastActiveborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "contrastBorder": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),

            "debugExceptionWidget.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "debugExceptionWidget.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "debugTokenExpression.boolean": _cO( `${color.attention.fg }${ _x_[ 5 ] }` ),
            "debugTokenExpression.error": _cO( `${color.danger.fg }${ _x_[ 5 ] }` ),
            "debugTokenExpression.name": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "debugTokenExpression.number": _cO( `${color.severe.fg }${ _x_[ 5 ] }` ),
            "debugTokenExpression.string": _cO( `${color.fg.muted }${ _x_[ 5 ] }` ),
            "debugTokenExpression.value": _cO( `${color.sponsors.fg }${ _x_[ 5 ] }` ),

            "debugToolBar.background": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "debugToolBar.border": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),

            "debugView.exceptionLabelBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "debugView.exceptionLabelforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "debugView.stateLabelBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "debugView.stateLabelforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "debugView.valueChangedHighlight": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),

            "descriptionForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "diffEditor.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "diffEditor.diagonalFill": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "diffEditor.insertedLineBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "diffEditor.insertedTextBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "diffEditor.insertedTextBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "diffEditor.removedLineBackground": _cO( `${color.danger.muted }${ _x_[ 9 ] }` ),
            "diffEditor.removedTextBackground": _cO( `${color.danger.muted }${ _x_[ 7 ] }` ),
            "diffEditor.removedTextBorder": _cO( `${color.danger.muted }${ _x_[ 7 ] }` ),
            "diffEditorGutter.insertedLineBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "diffEditorGutter.removedLineBackground": _cO( `${color.danger.muted }${ _x_[ 9 ] }` ),
            "diffEditorOverview.insertedForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "diffEditorOverview.removedForeground": _cO( `${color.danger.muted }${ _x_[ 9 ] }` ),

            "disabledForeground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),

            "dropdown.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "dropdown.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "dropdown.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "dropdown.listBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "editor.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editor.findMatchBackground": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),
            "editor.findMatchBorder": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),
            "editor.findMatchHighlightBackground": _cO( `${color.attention.emphasis }${ _x_[ 2 ] }` ),
            "editor.findMatchHighlightBorder": _cO( `${color.attention.emphasis }${ _x_[ 2 ] }` ),
            "editor.findRangeHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 7 ] }` ),
            "editor.findRangeHighlightBorder": _cO( `${color.success.emphasis }${ _x_[ 7 ] }` ),
            "editor.focusedStackFrameHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editor.foldBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editor.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editor.hoverHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),
            "editor.inactiveSelectionBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editor.inlineValuesBackground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "editor.inlineValuesforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editor.lineHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 2 ] }` ),
            "editor.lineHighlightBorder": _cO( `${color.success.emphasis }${ _x_[ 2 ] }` ),
            "editor.linkedEditingBackground": _cO( `${color.attention.fg }${ _x_[ 8 ] }` ),
            "editor.rangeHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 7 ] }` ),
            "editor.rangeHighlightBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editor.selectionBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editor.selectionForeground": _cO( `${color.accent.muted }}${ _x_[ 5 ] }` ),
            "editor.selectionHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 7 ] }` ),
            "editor.selectionHighlightborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editor.snippetFinalTabstopHighlightBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editor.snippetFinalTabstopHighlightborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editor.snippetTabstopHighlightBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editor.snippetTabstopHighlightborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editor.stackFrameHighlightbackground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editor.symbolHighlightBackground": _cO( `${color.done.emphasis }${ _x_[ 5 ] }` ),
            "editor.symbolHighlightBorder": _cO( `${color.done.emphasis }${ _x_[ 4 ] }` ),
            "editor.wordHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editor.wordHighlightBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editor.wordHighlightStrongBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editor.wordHighlightStrongBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorBracketHighlight.foreground1": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
            "editorBracketHighlight.foreground2": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "editorBracketHighlight.foreground3": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
            "editorBracketHighlight.foreground4": _cO( `${color.closed.fg }${ _x_[ 10 ] }` ),
            "editorBracketHighlight.foreground5": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "editorBracketHighlight.foreground6": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
            "editorBracketHighlight.unexpectedBracket.foreground": _cO( `${color.sponsors.muted }${ _x_[ 10 ] }` ),
            "editorBracketMatch.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorBracketMatch.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorBracketPairGuide.activeBackground1": _cO( `${color.sponsors.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.activeBackground2": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorBracketPairGuide.activeBackground3": _cO( `${color.done.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.activeBackground4": _cO( `${color.closed.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.activeBackground5": _cO( `${color.attention.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.activeBackground6": _cO( `${color.severe.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.background1": _cO( `${color.sponsors.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.background2": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorBracketPairGuide.background3": _cO( `${color.done.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.background4": _cO( `${color.closed.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.background5": _cO( `${color.attention.fg }${ _x_[ 7 ] }` ),
            "editorBracketPairGuide.background6": _cO( `${color.severe.fg }${ _x_[ 7 ] }` ),
            "editorCodeLens.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorCommentsWidget.rangeActiveBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorCommentsWidget.rangeActiveborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorCommentsWidget.rangeBackground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "editorCommentsWidget.rangeborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorCommentsWidget.resolvedBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorCommentsWidget.unresolvedBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorCursor.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorCursor.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorError.background": _cO( `${color.danger.muted }${ _x_[ 7 ] }` ),
            "editorError.border": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "editorError.foreground": _cO( `${color.danger.muted }${ _x_[ 7 ] }` ),
            "editorGhostText.background": _cO( `${color.success.emphasis }${ _x_[ 7 ] }` ),
            "editorGhostText.border": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorGhostText.foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "editorGroup.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorGroup.dropBackground": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "editorGroup.dropIntoPromptBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorGroup.dropIntoPromptborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorGroup.dropIntoPromptforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorGroup.emptyBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorGroup.focusedEmptyBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorGroupHeader.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorGroupHeader.noTabsBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorGroupHeader.tabsBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorGutter.addedBackground": _cO( `${color.success.fg }${ _x_[ 10 ] }` ),
            "editorGutter.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorGutter.commentRangeforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorGutter.deletedBackground": _cO( `${color.danger.fg }${ _x_[ 10 ] }` ),
            "editorGutter.foldingControlforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorGutter.modifiedBackground": _cO( `${color.success.fg }${ _x_[ 10 ] }` ),
            "editorHint.border": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "editorHint.foreground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "editorHoverWidget.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorHoverWidget.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorHoverWidget.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorHoverWidget.highlightForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "editorHoverWidget.statusBarBackground": _cO( `${color.danger.muted }${ _x_[ 9 ] }` ),
            "editorIndentGuide.activeBackground": _cO( `${color.danger.muted }${ _x_[ 9 ] }` ),
            "editorIndentGuide.background": _cO( `${color.fg.default }${ _x_[ 0 ] }` ),
            "editorInfo.background": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorInfo.border": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "editorInfo.foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "editorInlayHint.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorInlayHint.foreground": _cO( `${color.fg.default }${ _x_[ 4 ] }` ),
            "editorInlayHint.parameterBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorInlayHint.parameterForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "editorInlayHint.typeBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorInlayHint.typeForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "editorLightBulb.foreground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "editorLightBulbAutoFix.foreground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorLineNumber.activeForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "editorLineNumber.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorLink.activeForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "editorMarkerNavigation.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorMarkerNavigationError.background": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "editorMarkerNavigationError.headerBackground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "editorMarkerNavigationInfo.background": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "editorMarkerNavigationInfo.headerBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorMarkerNavigationWarning.background": _cO( `${color.severe.muted }${ _x_[ 5 ] }` ),
            "editorMarkerNavigationWarning.headerBackground": _cO( `${color.severe.muted }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.addedForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "editorOverviewRuler.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorOverviewRuler.border": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "editorOverviewRuler.bracketMatchForeground": _cO( `${color.done.muted }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.commonContentforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorOverviewRuler.currentContentForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.deletedForeground": _cO( `${color.attention.fg }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.errorForeground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.findMatchForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "editorOverviewRuler.incomingContentforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorOverviewRuler.infoForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.modifiedForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.rangeHighlightForeground": _cO( `${color.success.emphasis }${ _x_[ 8 ] }` ),
            "editorOverviewRuler.selectionHighlightForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.warningForeground": _cO( `${color.severe.muted }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.wordHighlightForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorOverviewRuler.wordHighlightStrongForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorPane.background": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorRuler.foreground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorStickyScroll.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorStickyScrollHover.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorSuggestWidget.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorSuggestWidget.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorSuggestWidget.focusHighlightforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorSuggestWidget.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorSuggestWidget.highlightforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorSuggestWidget.selectedBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorSuggestWidget.selectedforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorSuggestWidget.selectedIconforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorSuggestWidgetStatus.foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "editorUnicodeHighlight.background": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorUnicodeHighlight.border": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "editorUnnecessaryCode.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorUnnecessaryCode._x_": _cO( `${color.danger.muted }${ _x_[ 3 ] }` ),
            "editorWarning.background": _cO( `${color.severe.muted }${ _x_[ 0 ] }` ),

            "editorWarning.border": _cO( `${color.severe.muted }${ _x_[ 8 ] }` ),
            "editorWarning.foreground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "editorWhitespace.foreground": _cO( `${color.sponsors.muted }${ _x_[ 10 ] }` ),
            "editorWidget.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "editorWidget.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "editorWidget.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "editorWidget.resizeBorder": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),


            "errorForeground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),

            "extensionBadge.remoteBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "extensionBadge.remoteforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "extensionButton.prominentBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "extensionButton.prominentforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "extensionButton.prominentHoverBackground": _cO( `${color.success.emphasis }${ _x_[ 6 ] }` ),

            "extensionIcon.preReleaseForeground": _cO( `${color.severe.muted }${ _x_[ 10 ] }` ),
            "extensionIcon.sponsorForeground": _cO( `${color.done.muted }${ _x_[ 10 ] }` ),
            "extensionIcon.starForeground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "extensionIcon.verifiedForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),

            "focusBorder": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "gitDecoration.addedResourceForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "gitDecoration.conflictingResourceForeground": _cO( `${color.severe.muted }${ _x_[ 10 ] }` ),
            "gitDecoration.deletedResourceForeground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "gitDecoration.ignoredResourceForeground": _cO( `${color.severe.muted }${ _x_[ 5 ] }` ),
            "gitDecoration.modifiedResourceForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "gitDecoration.renamedResourceforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "gitDecoration.stageDeletedResourceForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "gitDecoration.stageModifiedResourceForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "gitDecoration.submoduleResourceForeground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
            "gitDecoration.untrackedResourceforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "icon.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "input.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "input.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "input.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "input.placeholderForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "inputOption.activeBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "inputOption.activeBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "inputOption.activeForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "inputOption.hoverBackground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "inputValidation.errorBackground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "inputValidation.errorBorder": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "inputValidation.errorForeground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "inputValidation.infoBackground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "inputValidation.infoBorder": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "inputValidation.infoForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "inputValidation.warningBackground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "inputValidation.warningBorder": _cO( `${color.danger.fg }${ _x_[ 5 ] }` ),
            "inputValidation.warningForeground": _cO( `${color.danger.fg }${ _x_[ 5 ] }` ),

            "keybindingLabel.border": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "keybindingLabel.bottomBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "keybindingLabel.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "keybindingLabel.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "keybindingTable.headerBackground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "keybindingTable.rowsBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "list.activeSelectionBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "list.activeSelectionforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "list.activeSelectionIconForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "list.deemphasizedForeground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "list.dropBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "list.errorForeground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "list.filterMatchBackground": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),
            "list.filterMatchBorder": _cO( `${color.success.emphasis }${ _x_[ 6 ] }` ),
            "list.focusAndSelectionOutline": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "list.focusBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "list.focusforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "list.focusHighlightForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "list.focusOutline": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "list.highlightforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "list.hoverBackground": _cO( `${color.success.emphasis }${ _x_[ 8 ] }` ),
            "list.hoverforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "list.inactiveFocusBackground": _cO( `${color.success.emphasis }${ _x_[ 9 ] }` ),
            "list.inactiveFocusOutline": _cO( `${color.success.emphasis }${ _x_[ 9 ] }` ),
            "list.inactiveSelectionBackground": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "list.inactiveSelectionforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "list.inactiveSelectionIconForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "list.invalidItemForeground": _cO( `${color.danger.muted }${ _x_[ 4 ] }` ),
            "list.warningForeground": _cO( `${color.severe.muted }${ _x_[ 10 ] }` ),
            "listFilterWidget.background": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "listFilterWidget.noMatchesOutline": _cO( `${color.neutral.emphasis }${ _x_[ 5 ] }` ),
            "listFilterWidget.outline": _cO( `${color.accent.fg }${ _x_[ 4 ] }` ),
            "listFilterWidget.shadow": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "menu.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "menu.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "menu.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "menu.selectionBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "menu.selectionBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "menu.selectionforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "menu.separatorBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "menubar.selectionBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "menubar.selectionBorder": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "menubar.selectionForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "merge.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "merge.commonContentBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "merge.commonHeaderBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "merge.currentContentBackground": _cO( `${color.danger.muted }${ _x_[ 6 ] }` ),
            "merge.currentHeaderBackground": _cO( `${color.danger.muted }${ _x_[ 8 ] }` ),
            "merge.incomingContentBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "merge.incomingHeaderBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "mergeEditor.change.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "mergeEditor.change.word.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "mergeEditor.conflict.handled.minimapOverViewRuler": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "mergeEditor.conflict.handledFocused.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "mergeEditor.conflict.handledUnfocused.border": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "mergeEditor.conflict.unhandled.minimapOverViewRuler": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "mergeEditor.conflict.unhandledFocused.border": _cO( `${color.attention.fg }${ _x_[ 5 ] }` ),
            "mergeEditor.conflict.unhandledUnfocused.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "mergeEditor.conflictingLines.background": _cO( `${color.danger.muted }${ _x_[ 3 ] }` ),

            "minimap.background": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "minimap.errorHighlight": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "minimap.findMatchHighlight": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "minimap.foregroundOpacity": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "minimap.selectionHighlight": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "minimap.selectionOccurrenceHighlight": _cO( `${color.success.emphasis }${ _x_[ 8 ] }` ),
            "minimap.warningHighlight": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "minimapGutter.addedBackground": _cO( `${color.accent.fg }${ _x_[ 7 ] }` ),
            "minimapGutter.deletedBackground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "minimapGutter.modifiedBackground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "minimapSlider.activeBackground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "minimapSlider.background": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "minimapSlider.hoverBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),

            "notificationCenter.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "notificationCenterHeader.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "notificationCenterHeader.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "notificationLink.foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),

            "notificationToast.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "notifications.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "notifications.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "notifications.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "notificationsErrorIcon.foreground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "notificationsInfoIcon.foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "notificationsWarningIcon.foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),

            "panel.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "panel.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "panel.dropBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "panelInput.border": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "panelSection.border": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "panelSection.dropBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "panelSectionHeader.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "panelSectionHeader.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "panelSectionHeader.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "panelTitle.activeBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "panelTitle.activeforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "panelTitle.inactiveforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "peekView.border": _cO( `${color.attention.fg }${ _x_[ 7 ] }` ),
            "peekViewEditor.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "peekViewEditor.matchHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),
            "peekViewEditor.matchHighlightBorder": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),
            "peekViewEditorGutter.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "peekViewResult.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "peekViewResult.fileforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "peekViewResult.lineforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "peekViewResult.matchHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),
            "peekViewResult.selectionBackground": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),
            "peekViewResult.selectionForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "peekViewTitle.background": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "peekViewTitleDescription.foreground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "peekViewTitleLabel.foreground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),

            "pickerGroup.border": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "pickerGroup.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "ports.iconRunningProcessForeground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),

            "problemsErrorIcon.foreground": _cO( `${color.success.emphasis }${ _x_[ 4 ] }` ),

            "problemsInfoIcon.foreground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),

            "problemsWarningIcon.foreground": _cO( `${color.severe.muted }${ _x_[ 5 ] }` ),

            "progressBar.background": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),

            "quickInput.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "quickInput.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "quickInputList.focusBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "quickInputList.focusforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "quickInputList.focusIconForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "quickInputTitle.background": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "sash.hoverBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),

            "scm.providerborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "scrollbar.shadow": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "scrollbarSlider.activeBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "scrollbarSlider.background": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "scrollbarSlider.hoverbackground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "searchEditor.findMatchBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "searchEditor.findMatchBorder": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "searchEditor.textInputborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "selection.background": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),

            "sideBar.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "sideBar.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "sideBar.dropBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "sideBar.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "sideBarSectionHeader.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "sideBarSectionHeader.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "sideBarSectionHeader.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "sideBarTitle.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "sideBySideEditor.horizontalBorder": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "sideBySideEditor.verticalBorder": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),

            "statusBar.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "statusBar.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "statusBar.debuggingBackground": _cO( `${color.danger.muted }${ _x_[ 6 ] }` ),
            "statusBar.debuggingBorder": _cO( `${color.done.muted }${ _x_[ 10 ] }` ),
            "statusBar.debuggingforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "statusBar.focusborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "statusBar.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "statusBar.noFolderBackground": _cO( `${color.severe.muted }${ _x_[ 5 ] }` ),
            "statusBar.noFolderBorder": _cO( `${color.severe.muted }${ _x_[ 5 ] }` ),
            "statusBar.noFolderforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "statusBarItem.activeBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "statusBarItem.compactHoverBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "statusBarItem.errorBackground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "statusBarItem.errorForeground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "statusBarItem.focusborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "statusBarItem.hoverBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "statusBarItem.prominentBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "statusBarItem.prominentForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "statusBarItem.remoteBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "statusBarItem.remoteforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "statusBarItem.settingsProfilesBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "statusBarItem.settingsProfilesforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "statusBarItem.warningBackground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "statusBarItem.warningForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),

            "symbolIcon.arrayForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.booleanForeground": _cO( `${color.done.muted }${ _x_[ 10 ] }` ),
            "symbolIcon.classForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.colorForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.constantForeground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.constructorForeground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.enumeratorForeground": _cO( `${color.open.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.enumeratorMemberForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.eventForeground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.fieldForeground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "symbolIcon.fileForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.folderForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "symbolIcon.functionForeground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.interfaceForeground": _cO( `${color.danger.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.keyForeground": _cO( `${color.open.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.keywordForeground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.methodForeground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.moduleForeground": _cO( `${color.open.fg }${ _x_[ 10 ] }` ),
            "symbolIcon.namespaceForeground": _cO( `${color.attention.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.nullForeground": _cO( `${color.neutral.emphasisPlus }${ _x_[ 10 ] }` ),
            "symbolIcon.numberForeground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.objectForeground": _cO( `${color.open.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.operatorForeground": _cO( `${color.done.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.packageForeground": _cO( `${color.attention.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.propertyforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "symbolIcon.referenceForeground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
            "symbolIcon.snippetForeground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "symbolIcon.stringForeground": _cO( `${color.neutral.muted }${ _x_[ 10 ] }` ),
            "symbolIcon.structForeground": _cO( `${color.accent.muted }${ _x_[ 10 ] }` ),
            "symbolIcon.textForeground": _cO( `${color.success.muted }${ _x_[ 10 ] }` ),
            "symbolIcon.typeParameterForeground": _cO( `${color.danger.emphasis }${ _x_[ 10 ] }` ),
            "symbolIcon.unitForeground": _cO( `${color.done.muted }${ _x_[ 10 ] }` ),
            "symbolIcon.variableForeground": _cO( `${color.sponsors.muted }${ _x_[ 10 ] }` ),

            "tab.activeBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "tab.activeBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.activeBorderTop": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.activeForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.activeModifiedBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "tab.hoverBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "tab.hoverBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.hoverforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "tab.inactiveBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "tab.inactiveForeground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
            "tab.inactiveModifiedBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.lastPinnedborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "tab.unfocusedActiveBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "tab.unfocusedActiveBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.unfocusedActiveBorderTop": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.unfocusedActiveForeground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.unfocusedActiveModifiedBorder": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "tab.unfocusedHoverBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "tab.unfocusedHoverBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tab.unfocusedHoverforeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "tab.unfocusedInactiveBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "tab.unfocusedInactiveForeground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
            "tab.unfocusedInactiveModifiedBorder": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),

            "terminal.foreground": _cO( `${color.fg.muted }${ _x_[ 7 ] }` ),
            'terminal.ansiBlack': _cO( `${color.ansi.black }${ _x_[ 10 ] }` ),
            'terminal.ansiRed': _cO( `${color.ansi.red }${ _x_[ 10 ] }` ),
            'terminal.ansiGreen': _cO( `${color.ansi.green }${ _x_[ 10 ] }` ),
            'terminal.ansiYellow': _cO( `${color.ansi.yellow }${ _x_[ 10 ] }` ),
            'terminal.ansiBlue': _cO( `${color.ansi.blue }${ _x_[ 10 ] }` ),
            'terminal.ansiMagenta': _cO( `${color.ansi.magenta }${ _x_[ 10 ] }` ),
            'terminal.ansiCyan': _cO( `${color.ansi.cyan }${ _x_[ 10 ] }` ),
            'terminal.ansiWhite': _cO( `${color.ansi.white }${ _x_[ 10 ] }` ),
            'terminal.ansiBrightBlack': _cO( `${color.ansi.blackBright }${ _x_[ 10 ] }` ),
            'terminal.ansiBrightRed': _cO( `${color.ansi.redBright }${ _x_[ 10 ] }` ),
            'terminal.ansiBrightGreen': _cO( `${color.ansi.greenBright }${ _x_[ 10 ] }` ),
            'terminal.ansiBrightYellow': _cO( `${color.ansi.yellowBright }${ _x_[ 10 ] }` ),
            'terminal.ansiBrightBlue': _cO( `${color.ansi.blueBright }${ _x_[ 10 ] }` ),
            'terminal.ansiBrightMagenta': _cO( `${color.ansi.magentaBright }${ _x_[ 10 ] }` ),
            'terminal.ansiBrightCyan': _cO( `${color.ansi.cyanBright }${ _x_[ 10 ] }` ),
            'terminal.ansiBrightWhite': _cO( `${color.ansi.whiteBright }${ _x_[ 10 ] }` ),


            "terminal.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "terminal.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "terminal.dropBackground": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "terminal.findMatchBackground": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "terminal.findMatchBorder": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "terminal.findMatchHighlightBackground": _cO( `${color.accent.fg }${ _x_[ 2 ] }` ),
            "terminal.findMatchHighlightBorder": _cO( `${color.attention.fg }${ _x_[ 2 ] }` ),
            "terminal.inactiveSelectionBackground": _cO( `${color.attention.fg }${ _x_[ 3 ] }` ),
            "terminal.selectionBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "terminal.selectionForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "terminal.tab.activeBorder": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "terminalCommandDecoration.defaultBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "terminalCommandDecoration.errorBackground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "terminalCommandDecoration.successBackground": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "terminalCursor.background": _cO( `${color.success.fg }${ _x_[ 2 ] }` ),
            "terminalCursor.foreground": _cO( `${color.success.fg }${ _x_[ 10 ] }` ),
            "terminalOverviewRuler.cursorForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "terminalOverviewRuler.findMatchForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),

            "testing.iconErrored": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "testing.iconFailed": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "testing.iconPassed": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "testing.iconQueued": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "testing.iconSkipped": _cO( `${color.severe.muted }${ _x_[ 10 ] }` ),
            "testing.iconUnset": _cO( `${color.severe.muted }${ _x_[ 10 ] }` ),
            "testing.message.error.decorationForeground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "testing.message.error.lineBackground": _cO( `${color.danger.muted }${ _x_[ 5 ] }` ),
            "testing.message.info.decorationForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "testing.message.info.lineBackground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "testing.peekBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "testing.peekHeaderBackground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "testing.runAction": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),

            "textBlockQuote.background": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "textBlockQuote.border": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "textCodeBlock.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),

            "textLink.activeForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "textLink.foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),

            "textPreformat.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "textSeparator.foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "titleBar.activeBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "titleBar.activeForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "titleBar.border": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "titleBar.inactiveBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "titleBar.inactiveForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),

            "toolbar.activeBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "toolbar.hoverBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "toolbar.hoverOutline": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),

            "tree.indentGuidesStroke": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "tree.tableColumnsborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "tree.tableOddRowsBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "walkThrough.embeddedEditorBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),

            "welcomePage.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "welcomePage.progress.background": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "welcomePage.progress.foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "welcomePage.tileBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "welcomePage.tileHoverBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "welcomePage.tileShadow": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),

            "widget.shadow": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "window.activeBorder": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "window.inactiveBorder": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "debugConsole.errorForeground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "debugConsole.infoForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "debugConsole.sourceForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "debugConsole.warningForeground": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
            "debugConsoleInputIcon.foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "debugIcon.breakpointCurrentStackframeForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "debugIcon.breakpointDisabledForeground": _cO( `${color.fg.subtle }${ _x_[ 10 ] }` ),
            "debugIcon.breakpointForeground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
            "debugIcon.breakpointStackframeForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "debugIcon.breakpointUnverifiedForeground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "debugIcon.continueForeground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "debugIcon.disconnectForeground": _cO( `${color.danger.fg }${ _x_[ 10 ] }` ),
            "debugIcon.pauseForeground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "debugIcon.restartForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "debugIcon.startForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "debugIcon.stepBackForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "debugIcon.stepIntoForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "debugIcon.stepOutForeground": _cO( `${color.accent.fg }${ _x_[ 5 ] }` ),
            "debugIcon.stopForeground": _cO( `${color.danger.fg }${ _x_[ 10 ] }` ),



            "interactive.activeCodeBorder": _cO( `${color.attention.fg }${ _x_[ 7 ] }` ),
            "interactive.inactiveCodeBorder": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "issues.closed": _cO( `${color.danger.fg }${ _x_[ 5 ] }` ),
            "issues.newIssueDecoration": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "issues.open": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),




            "notebook.cellBorderColor": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "notebook.cellEditorBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "notebook.cellInsertionIndicator": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "notebook.cellToolbarSeparator": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "notebook.editorBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "notebook.focusedCellBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "notebook.focusedEditorborder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "notebook.inactiveFocusedCellBorder": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "notebook.selectedCellBackground": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "notebook.selectedCellBorder": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "notebook.symbolHighlightBackground": _cO( `${color.success.emphasis }${ _x_[ 3 ] }` ),
            "notebookScrollbarSlider.activeBackground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "notebookScrollbarSlider.background": _cO( `${color.success.emphasis }${ _x_[ 5 ] }` ),
            "notebookScrollbarSlider.hoverBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "notebookStatusErrorIcon.foreground": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "notebookStatusRunningIcon.foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "notebookStatusSuccessIcon.foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "pullRequests.notification": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "settings.checkboxBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.checkboxBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.checkboxForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "settings.dropdownBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.dropdownBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.dropdownForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "settings.dropdownListBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.focusedRowBackground": _cO( `${color.success.emphasis }${ _x_[ 9 ] }` ),
            "settings.focusedRowBorder": _cO( `${color.success.emphasis }${ _x_[ 6 ] }` ),
            "settings.headerBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.headerForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "settings.modifiedItemIndicator": _cO( `${color.danger.muted }${ _x_[ 10 ] }` ),
            "settings.numberInputBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "settings.numberInputBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.numberInputForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "settings.rowHoverBackground": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.sashBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.textInputBackground": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "settings.textInputBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "settings.textInputForeground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
            "statusBarItem.prominentHoverBackground": _cO( `${color.border.muted }${ _x_[ 3 ] }` ),
            "notebook.cellHoverBackground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
            "notebook.focusedCellBackground": _cO( `${color.danger.muted }${ _x_[ 3 ] }` ),
            "notebook.inactiveSelectedCellBorder": _cO( `${color.border.muted }${ _x_[ 10 ] }` ),
            "notebook.outputContainerBackgroundColor": _cO( `${color.canvas.inset }${ _x_[ 10 ] }` ),
            "notebook.outputContainerBorderColor": _cO( `${color.border.muted }${ _x_[ 10 ] }` )
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
            "foreground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name",
            "meta.export.default",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "entity.name.function",
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name.tag",
            "support.class.component"
          ],
          "settings": {
            "foreground": _cO( `${color.open.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "keyword",
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage",
            "storage.type"
          ],
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
          ],
          "settings": {
            "foreground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string",
            "string punctuation.section.embedded source"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.property-name",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "variable",
          "settings": {
            "foreground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "variable.other",
          "settings": {
            "foreground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "invalid.broken",
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.deprecated",
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.illegal",
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "invalid.unimplemented",
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "carriage-return",
          "settings": {
            "foreground": _cO( `${color.closed.fg }${ _x_[ 10 ] }` ),
            "background": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic underline"
          }
        },
        {
          "scope": "message.error",
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "string variable",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "source.regexp",
            "string.regexp"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "string.regexp constant.character.escape",
          "settings": {
            "foreground": _cO( `${color.open.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "support.constant",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support.variable",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "support.type.property-name.json",
          "settings": {
            "foreground": _cO( `${color.open.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.module-reference",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "punctuation.definition.list.begin.markdown",
          "settings": {
            "foreground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.heading",
            "markup.heading entity.name"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "markup.quote",
          "settings": {
            "foreground": _cO( `${color.open.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "foreground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "italic"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "foreground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.deleted",
            "meta.diff.header.from-file",
            "punctuation.definition.deleted"
          ],
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
            "background": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.section.embedded"
          ],
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.inserted",
            "meta.diff.header.to-file",
            "punctuation.definition.inserted"
          ],
          "settings": {
            "foreground": _cO( `${color.open.emphasis }${ _x_[ 10 ] }` ),
            "background": _cO( `${color.open.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.changed",
            "punctuation.definition.changed"
          ],
          "settings": {
            "foreground": _cO( `${color.severe.emphasis }${ _x_[ 10 ] }` ),
            "background": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "markup.ignored",
            "markup.untracked"
          ],
          "settings": {
            "foreground": _cO( `${color.neutral.emphasis }${ _x_[ 10 ] }` ),
            "background": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.diff.range",
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "meta.diff.header",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "meta.separator",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": "bold"
          }
        },
        {
          "scope": "meta.output",
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.neutral.emphasisPlus }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "brackethighlighter.unmatched",
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.other.reference.link",
            "string.other.link"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "fontStyle": "underline"
          }
        },
        {
          "scope": [
            "constant.language",
            "constant.numeric"
          ],
          "settings": {
            "foreground": _cO( `${color.closed.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "support.type.property-name"
          ],
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string"
          ],
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string.regexp",
            "constant.character.escape"
          ],
          "settings": {
            "foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string"
          ],
          "settings": {
            "foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name"
          ],
          "settings": {
            "foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "entity.name.function"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "entity.name.type"
          ],
          "settings": {
            "foreground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "meta.embedded"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.function"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.type"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "storage.modifier"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable"
          ],
          "settings": {
            "foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.other.readwrite.js"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable",
            "keyword.control"
          ],
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.language"
          ],
          "settings": {
            "foreground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword.operator"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "keyword.operator"
          ],
          "settings": {
            "foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.class"
          ],
          "settings": {
            "foreground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "keyword"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "comment"
          ],
          "settings": {
            "foreground": _cO( `${color.neutral.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.separator.key-value.html"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.tag"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.support.type.property-name.begin.json.comments",
            "punctuation.support.type.property-name.end.json.comments"
          ],
          "settings": {
            "foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html"
          ],
          "settings": {
            "foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "source.sql.embedded.php"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "string.quoted.other.backtick.sql"
          ],
          "settings": {
            "foreground": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "variable.other.property.js",
            "entity.name.function.member"
          ],
          "settings": {
            "foreground": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.template.begin.js",
            "punctuation.definition.string.template.end.js"
          ],
          "settings": {
            "foreground": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "text.html.php"
          ],
          "settings": {
            "foreground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.separator.comma.js",
            "punctuation.separator.dictionary.pair.json.comments"
          ],
          "settings": {
            "foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.php",
            "punctuation.definition.string.end.php"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
            "fontStyle": ""
          }
        },
        {
          "scope": [
            "punctuation.accessor.js"
          ],
          "settings": {
            "foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.accessor.js"
          ],
          "settings": {
            "foreground": _cO( `${color.fg.default }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.json"
          ],
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.css"
          ],
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "variable.argument.css"
          ],
          "settings": {
            "foreground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.other.color.rgb-value",
            "support.constant.property-value"
          ],
          "settings": {
            "foreground": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "punctuation.definition.string.begin.css",
            "punctuation.definition.string.end.css"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "string.quoted.single.css"
          ],
          "settings": {
            "foreground": _cO( `${color.fg.muted }${ _x_[ 10 ] }` ),
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
            "foreground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "constant.numeric.css"
          ],
          "settings": {
            "foreground": _cO( `${color.severe.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.attribute-name.class.css"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.name.tag.css"
          ],
          "settings": {
            "foreground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.css",
            "entity.other.keyframe-offset.css"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.constant.vendored.property-value.css",
            "support.constant.font-name.css",
            "entity.other.attribute-name.class.css"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.pseudo-element.css"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.type.property-name.media.css",
            "support.constant.media.css"
          ],
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "keyword.operator.logical.only.media.css",
            "keyword.operator.logical.and.media.css",
            "string.quoted.double.css"
          ],
          "settings": {
            "foreground": _cO( `${color.success.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.id.css"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "support.function.transform.css"
          ],
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": [
            "entity.other.keyframe-offset.percentage.css"
          ],
          "settings": {
            "foreground": _cO( `${color.sponsors.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.info-token",
          "settings": {
            "foreground": _cO( `${color.accent.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.warn-token",
          "settings": {
            "foreground": _cO( `${color.attention.fg }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.error-token",
          "settings": {
            "foreground": _cO( `${color.danger.emphasis }${ _x_[ 10 ] }` ),
          }
        },
        {
          "scope": "token.debug-token",
          "settings": {
            "foreground": _cO( `${color.done.fg }${ _x_[ 10 ] }` ),
          }
        }
      ]
    }
  }


export default _gT;
