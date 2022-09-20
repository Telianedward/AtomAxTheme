const _ch = require("chroma-js");
const { _gC } = require("./colors");

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

   hex = (color)=>{
  return _ch(color).hex();
}

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
              ["0","00"],];
    _cO= ( x , obj ) => {
      let a,b,c,d,f,g
          if (x.length <= 9){
            return x
          }
          if(x.length == 11){
              obj.forEach( (ej, i) => {  
                ej[1].toLowerCase() == `${x[9]}${x[10]}`.toLowerCase()?(
                    a = ej[0] , 
                    b = i,
                    obj.forEach( (el , i) => {  
                      if(el[1].toLowerCase() == `${x[7]}${x[8]}`.toLowerCase()){
                          c = el[0] ,
                          d = i,
                          f =(100 - a) + (100 - c),
                          g = (100  - f);
                            if( g <= 0 ) {
                              return `#${x[1]}${x[2]}${x[3]}${x[4]}${x[5]}${x[6]}1a`
                            }else{
                              obj.forEach( (et , i) => {  
                                if(et[0] == g){
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
// Choosing colors from primer/primitives
// There are multiple ways to define what color is used:

// 1.Global variable
//    e.g."textLink.foreground" : hex(color.fg.default),
// 2.Color scale
//    e.g."textLink.foreground" : scale.blue[5],
// 3.Hex value : All themes will use this scale.Only use for exceptions
//    e.g."textLink.foreground" : "#fff",
// 4.Per theme.Useful when a certain theme needs an exception
//    e.g."textLink.foreground" : themes({ l : scale.blue[5], d : scale.blue[2], dd : scale.blue[3], hc : scale.blue[3] }  ),

    _gT = ({ theme, name }) => {
  const themes = (options) => options[theme], // Usage : themes({ l : "lightblue", d : "darkblue", dd : "royalblue", hc : "blue" })
        color = _gC(theme), // Usage : color.fg.default
        scale = color.scale, // Usage : scale.blue[6]
        _x_ = ["00", "a1", "33", "4d", "66", "80", "99", "b3", "cd", "e6", ""],



    _bc_  = themes({      l : color.canvas.subtle,
                                  lHC : color.canvas.subtle,
                                  lC : color.canvas.subtle,
                                  lT : color.canvas.subtle,
                                  d : color.canvas.overlay,
                                  dd : color.canvas.overlay,
                                  dhc : color.canvas.overlay,
                                  dc : color.canvas.overlay,
                                  dt : color.canvas.overlay
                                }),

      _boc_ = themes({ l : color.neutral.muted,
                                lHC : color.neutral.muted,
                                lC : color.neutral.muted,
                                lT : color.neutral.muted,
                                d : color.border.muted,
                                dd : color.border.muted,
                                dhc : color.border.muted,
                                dc : color.border.muted,
                                dt : color.border.muted
                              }),
        

      _fc_ = themes({ l : color.fg.default,
                                lHC : color.fg.default,
                                lC : color.fg.default,
                                lT : color.fg.default,
                                d : color.fg.default,
                                dd : color.fg.default,
                                dhc : color.fg.default,
                                dc : color.fg.default,
                                dt : color.fg.default
                              }),

    _fuc_  = themes({ l : color.fg.muted,
                                lHC : color.fg.muted,
                                lC : color.fg.muted,
                                lT : color.fg.muted,
                                d : color.fg.muted,
                                dd : color.fg.muted,
                                dhc : color.fg.muted,
                                dc : color.fg.muted,
                                dt : color.fg.muted
                              })
  return {
    name : name,
    colors : {
        "activityBar.activeBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
        "activityBar.activeBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "activityBar.activeFocusBorder" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
        "activityBar.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
        "activityBar.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "activityBar.dropBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "activityBar.foreground" : _cO(`${hex(color.success.emphasis)}${_x_[8]}`,obj),
        "activityBar.inactiveForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "activityBarBadge.background" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
        "activityBarBadge.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        
        "badge.background" : _cO(`${hex(color.accent.muted)}${_x_[7]}`,obj),
        "badge.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
        "banner.background" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "banner.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "banner.iconForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
  
        "breadcrumb.activeSelectionforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "breadcrumb.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
        "breadcrumb.focusforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "breadcrumb.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "breadcrumbPicker.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
  
        "button.background" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "button.border" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
        "button.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "button.hoverBackground" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
        "button.secondaryBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "button.secondaryforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "button.secondaryHoverBackground" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
        "button.separator" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
  
        "charts.blue" : _cO(`${hex(color.accent.muted)}${_x_[10]}`,obj),
        "charts.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "charts.green" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
        "charts.lines" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
        "charts.orange" : _cO(`${hex(color.severe.muted)}${_x_[10]}`,obj),
        "charts.purple" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
        "charts.red" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
        "charts.yellow" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),

  
        "checkbox.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
        "checkbox.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "checkbox.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
        "commandCenter.activeBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "commandCenter.activeforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "commandCenter.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
        "commandCenter.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "commandCenter.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
        "contrastActiveborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "contrastBorder" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
  
        "debugExceptionWidget.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
        "debugExceptionWidget.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
        "debugTokenExpression.boolean" : _cO(`${hex(color.attention.fg)}${_x_[5]}`,obj),
        "debugTokenExpression.error" : _cO(`${hex(color.danger.fg)}${_x_[5]}`,obj),
        "debugTokenExpression.name" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
        "debugTokenExpression.number" : _cO(`${hex(color.severe.fg)}${_x_[5]}`,obj),
        "debugTokenExpression.string" : _cO(`${hex(color.fg.muted)}${_x_[5]}`,obj),
        "debugTokenExpression.value" :_cO(`${hex(color.sponsors.fg)}${_x_[5]}`,obj),
        
        "debugToolBar.background" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
        "debugToolBar.border" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
  
        "debugView.exceptionLabelBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "debugView.exceptionLabelforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "debugView.stateLabelBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "debugView.stateLabelforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "debugView.valueChangedHighlight" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
  
        "descriptionForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
        "diffEditor.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "diffEditor.diagonalFill" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "diffEditor.insertedLineBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "diffEditor.insertedTextBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "diffEditor.insertedTextBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "diffEditor.removedLineBackground" : _cO(`${hex(color.danger.muted)}${_x_[9]}`,obj),
        "diffEditor.removedTextBackground" : _cO(`${hex(color.danger.muted)}${_x_[7]}`,obj),
        "diffEditor.removedTextBorder" : _cO(`${hex(color.danger.muted)}${_x_[7]}`,obj),
        "diffEditorGutter.insertedLineBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "diffEditorGutter.removedLineBackground" : _cO(`${hex(color.danger.muted)}${_x_[9]}`,obj),
        "diffEditorOverview.insertedForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "diffEditorOverview.removedForeground" : _cO(`${hex(color.danger.muted)}${_x_[9]}`,obj),
  
      "disabledForeground" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
  
      "dropdown.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "dropdown.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "dropdown.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "dropdown.listBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      
      "editor.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editor.findMatchBackground" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
      "editor.findMatchBorder" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
      "editor.findMatchHighlightBackground" : _cO(`${hex(color.attention.emphasis)}${_x_[2]}`,obj),
      "editor.findMatchHighlightBorder" :_cO(`${hex(color.attention.emphasis)}${_x_[2]}`,obj),
      "editor.findRangeHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[7]}`,obj),
      "editor.findRangeHighlightBorder" : _cO(`${hex(color.success.emphasis)}${_x_[7]}`,obj),
      "editor.focusedStackFrameHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editor.foldBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editor.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editor.hoverHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
      "editor.inactiveSelectionBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editor.inlineValuesBackground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "editor.inlineValuesforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editor.lineHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[2]}`,obj),
      "editor.lineHighlightBorder" : _cO(`${hex(color.success.emphasis)}${_x_[2]}`,obj),
      "editor.linkedEditingBackground" : _cO(`${hex(color.attention.fg)}${_x_[8]}`,obj),
      "editor.rangeHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[7]}`,obj),
      "editor.rangeHighlightBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editor.selectionBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editor.selectionForeground" : _cO(`${hex(color.accent.muted)}}${_x_[5]}`,obj),
      "editor.selectionHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[7]}`,obj),
      "editor.selectionHighlightborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editor.snippetFinalTabstopHighlightBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editor.snippetFinalTabstopHighlightborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editor.snippetTabstopHighlightBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editor.snippetTabstopHighlightborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editor.stackFrameHighlightbackground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editor.symbolHighlightBackground" : _cO(`${hex(color.done.emphasis)}${_x_[5]}`,obj),
      "editor.symbolHighlightBorder" : _cO(`${hex(color.done.emphasis)}${_x_[4]}`,obj),
      "editor.wordHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editor.wordHighlightBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editor.wordHighlightStrongBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editor.wordHighlightStrongBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground1" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground2" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground3" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground4" : _cO(`${hex(color.closed.fg)}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground5" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
      "editorBracketHighlight.foreground6" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
      "editorBracketHighlight.unexpectedBracket.foreground" : _cO(`${hex(color.sponsors.muted)}${_x_[10]}`,obj),
      "editorBracketMatch.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorBracketMatch.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorBracketPairGuide.activeBackground1" : _cO(`${hex(color.sponsors.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.activeBackground2" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorBracketPairGuide.activeBackground3" : _cO(`${hex(color.done.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.activeBackground4" : _cO(`${hex(color.closed.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.activeBackground5" : _cO(`${hex(color.attention.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.activeBackground6" : _cO(`${hex(color.severe.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.background1" : _cO(`${hex(color.sponsors.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.background2" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorBracketPairGuide.background3" : _cO(`${hex(color.done.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.background4" : _cO(`${hex(color.closed.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.background5" : _cO(`${hex(color.attention.fg)}${_x_[7]}`,obj),
      "editorBracketPairGuide.background6" : _cO(`${hex(color.severe.fg)}${_x_[7]}`,obj),
      "editorCodeLens.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorCommentsWidget.rangeActiveBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorCommentsWidget.rangeActiveborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorCommentsWidget.rangeBackground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "editorCommentsWidget.rangeborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorCommentsWidget.resolvedBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorCommentsWidget.unresolvedBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorCursor.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorCursor.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorError.background" : _cO(`${hex(color.danger.muted)}${_x_[7]}`,obj),
      "editorError.border" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "editorError.foreground" : _cO(`${hex(color.danger.muted)}${_x_[7]}`,obj),
      "editorGhostText.background" : _cO(`${hex(color.success.emphasis)}${_x_[7]}`,obj),
      "editorGhostText.border" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorGhostText.foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "editorGroup.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorGroup.dropBackground" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
      "editorGroup.dropIntoPromptBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorGroup.dropIntoPromptborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorGroup.dropIntoPromptforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorGroup.emptyBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorGroup.focusedEmptyBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorGroupHeader.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorGroupHeader.noTabsBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorGroupHeader.tabsBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorGutter.addedBackground" : _cO(`${hex(color.success.fg)}${_x_[10]}`,obj),
      "editorGutter.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorGutter.commentRangeforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorGutter.deletedBackground" : _cO(`${hex(color.danger.fg)}${_x_[10]}`,obj),
      "editorGutter.foldingControlforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorGutter.modifiedBackground" : _cO(`${hex(color.success.fg)}${_x_[10]}`,obj),
      "editorHint.border" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "editorHint.foreground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "editorHoverWidget.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorHoverWidget.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorHoverWidget.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorHoverWidget.highlightForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "editorHoverWidget.statusBarBackground" : _cO(`${hex(color.danger.muted)}${_x_[9]}`,obj),
      "editorIndentGuide.activeBackground" : _cO(`${hex(color.danger.muted)}${_x_[9]}`,obj),
      "editorIndentGuide.background" : _cO(`${_fc_}${_x_[0]}`,obj),
      "editorInfo.background" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorInfo.border" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "editorInfo.foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "editorInlayHint.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorInlayHint.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorInlayHint.parameterBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorInlayHint.parameterForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "editorInlayHint.typeBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorInlayHint.typeForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "editorLightBulb.foreground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
      "editorLightBulbAutoFix.foreground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorLineNumber.activeForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "editorLineNumber.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorLink.activeForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "editorMarkerNavigation.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorMarkerNavigationError.background" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "editorMarkerNavigationError.headerBackground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "editorMarkerNavigationInfo.background" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "editorMarkerNavigationInfo.headerBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorMarkerNavigationWarning.background" : _cO(`${hex(color.severe.muted)}${_x_[5]}`,obj),
      "editorMarkerNavigationWarning.headerBackground" : _cO(`${hex(color.severe.muted)}${_x_[5]}`,obj),
      "editorOverviewRuler.addedForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "editorOverviewRuler.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorOverviewRuler.border" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "editorOverviewRuler.bracketMatchForeground" : _cO(`${hex(color.done.muted )}${_x_[5]}`,obj),
      "editorOverviewRuler.commonContentforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorOverviewRuler.currentContentForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorOverviewRuler.deletedForeground" : _cO(`${hex(color.attention.fg)}${_x_[5]}`,obj),
      "editorOverviewRuler.errorForeground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "editorOverviewRuler.findMatchForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "editorOverviewRuler.incomingContentforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorOverviewRuler.infoForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "editorOverviewRuler.modifiedForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorOverviewRuler.rangeHighlightForeground" : _cO(`${hex(color.success.emphasis)}${_x_[8]}`,obj),
      "editorOverviewRuler.selectionHighlightForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorOverviewRuler.warningForeground" : _cO(`${hex(color.severe.muted)}${_x_[5]}`,obj),
      "editorOverviewRuler.wordHighlightForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorOverviewRuler.wordHighlightStrongForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorPane.background" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorRuler.foreground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorStickyScroll.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorStickyScrollHover.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorSuggestWidget.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorSuggestWidget.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorSuggestWidget.focusHighlightforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorSuggestWidget.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorSuggestWidget.highlightforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorSuggestWidget.selectedBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorSuggestWidget.selectedforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorSuggestWidget.selectedIconforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorSuggestWidgetStatus.foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "editorUnicodeHighlight.background" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorUnicodeHighlight.border" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "editorUnnecessaryCode.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorUnnecessaryCode._x_" : _cO(`${hex(color.danger.muted)}${_x_[3]}`,obj),
      "editorWarning.background" : _cO(`${hex(color.severe.muted)}${_x_[0]}`,obj),
                                 
      "editorWarning.border" : _cO(`${hex(color.severe.muted)}${_x_[8]}`,obj),
      "editorWarning.foreground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "editorWhitespace.foreground" : _cO(`${hex(color.sponsors.muted)}${_x_[10]}`,obj),
      "editorWidget.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "editorWidget.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "editorWidget.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "editorWidget.resizeBorder" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
  
  
      "errorForeground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
  
      "extensionBadge.remoteBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "extensionBadge.remoteforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "extensionButton.prominentBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "extensionButton.prominentforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "extensionButton.prominentHoverBackground" : _cO(`${hex(color.success.emphasis)}${_x_[6]}`,obj),
  
      "extensionIcon.preReleaseForeground" : _cO(`${hex(color.severe.muted)}${_x_[10]}`,obj),
      "extensionIcon.sponsorForeground" : _cO(`${hex(color.done.muted )}${_x_[10]}`,obj),
      "extensionIcon.starForeground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
      "extensionIcon.verifiedForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
  
      "focusBorder" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "gitDecoration.addedResourceForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "gitDecoration.conflictingResourceForeground" : _cO(`${hex(color.severe.muted)}${_x_[10]}`,obj),
      "gitDecoration.deletedResourceForeground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "gitDecoration.ignoredResourceForeground" : _cO(`${hex(color.severe.muted)}${_x_[5]}`,obj),
      "gitDecoration.modifiedResourceForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "gitDecoration.renamedResourceforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "gitDecoration.stageDeletedResourceForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "gitDecoration.stageModifiedResourceForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "gitDecoration.submoduleResourceForeground" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
      "gitDecoration.untrackedResourceforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "icon.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "input.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "input.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "input.foreground": _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "input.placeholderForeground": _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "inputOption.activeBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "inputOption.activeBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "inputOption.activeForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "inputOption.hoverBackground": _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "inputValidation.errorBackground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "inputValidation.errorBorder" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "inputValidation.errorForeground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "inputValidation.infoBackground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "inputValidation.infoBorder" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj), 
      "inputValidation.infoForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj), 
      "inputValidation.warningBackground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "inputValidation.warningBorder" : _cO(`${hex(color.danger.fg)}${_x_[5]}`,obj),
      "inputValidation.warningForeground" : _cO(`${hex(color.danger.fg)}${_x_[5]}`,obj),
  
      "keybindingLabel.border" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "keybindingLabel.bottomBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "keybindingLabel.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "keybindingLabel.foreground": _cO(`${hex(_fc_)}${_x_[10]}`,obj),
     
      "keybindingTable.headerBackground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "keybindingTable.rowsBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "list.activeSelectionBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "list.activeSelectionforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "list.activeSelectionIconForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "list.deemphasizedForeground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
      "list.dropBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "list.errorForeground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "list.filterMatchBackground" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
      "list.filterMatchBorder" : _cO(`${hex(color.success.emphasis)}${_x_[6]}`,obj),
      "list.focusAndSelectionOutline" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "list.focusBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "list.focusforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "list.focusHighlightForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "list.focusOutline" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "list.highlightforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "list.hoverBackground" : _cO(`${hex(color.success.emphasis)}${_x_[8]}`,obj),
      "list.hoverforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "list.inactiveFocusBackground" : _cO(`${hex(color.success.emphasis)}${_x_[9]}`,obj),
      "list.inactiveFocusOutline" : _cO(`${hex(color.success.emphasis)}${_x_[9]}`,obj),
      "list.inactiveSelectionBackground" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
      "list.inactiveSelectionforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "list.inactiveSelectionIconForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "list.invalidItemForeground" : _cO(`${hex(color.danger.muted)}${_x_[4]}`,obj),
      "list.warningForeground" : _cO(`${hex(color.severe.muted)}${_x_[10]}`,obj),
      "listFilterWidget.background" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "listFilterWidget.noMatchesOutline" : _cO(`${hex(color.neutral.emphasis)}${_x_[5]}`,obj),     
      "listFilterWidget.outline" : _cO(`${hex(color.accent.fg)}${_x_[4]}`,obj),
      "listFilterWidget.shadow" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "menu.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "menu.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "menu.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "menu.selectionBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "menu.selectionBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "menu.selectionforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "menu.separatorBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      
      "menubar.selectionBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "menubar.selectionBorder" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "menubar.selectionForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "merge.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "merge.commonContentBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "merge.commonHeaderBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "merge.currentContentBackground" : _cO(`${hex(color.danger.muted)}${_x_[6]}`,obj),
      "merge.currentHeaderBackground" : _cO(`${hex(color.danger.muted)}${_x_[8]}`,obj),
      "merge.incomingContentBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "merge.incomingHeaderBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "mergeEditor.change.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "mergeEditor.change.word.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "mergeEditor.conflict.handled.minimapOverViewRuler" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "mergeEditor.conflict.handledFocused.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "mergeEditor.conflict.handledUnfocused.border" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "mergeEditor.conflict.unhandled.minimapOverViewRuler" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "mergeEditor.conflict.unhandledFocused.border" : _cO(`${hex(color.attention.fg)}${_x_[5]}`,obj),
      "mergeEditor.conflict.unhandledUnfocused.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "mergeEditor.conflictingLines.background" : _cO(`${hex(color.danger.muted)}${_x_[3]}`,obj),
      
      "minimap.background" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "minimap.errorHighlight" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "minimap.findMatchHighlight" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "minimap.foregroundOpacity" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "minimap.selectionHighlight" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "minimap.selectionOccurrenceHighlight" : _cO(`${hex(color.success.emphasis)}${_x_[8]}`,obj),
      "minimap.warningHighlight" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "minimapGutter.addedBackground" : _cO(`${hex(color.accent.fg)}${_x_[7]}`,obj),
      "minimapGutter.deletedBackground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "minimapGutter.modifiedBackground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "minimapSlider.activeBackground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "minimapSlider.background" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
      "minimapSlider.hoverBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
  
      "notificationCenter.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "notificationCenterHeader.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "notificationCenterHeader.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "notificationLink.foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
  
      "notificationToast.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "notifications.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "notifications.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "notifications.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "notificationsErrorIcon.foreground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "notificationsInfoIcon.foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "notificationsWarningIcon.foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
  
      "panel.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "panel.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "panel.dropBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "panelInput.border" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "panelSection.border" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "panelSection.dropBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "panelSectionHeader.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "panelSectionHeader.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "panelSectionHeader.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "panelTitle.activeBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "panelTitle.activeforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "panelTitle.inactiveforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "peekView.border" : _cO(`${hex(color.attention.fg)}${_x_[7]}`,obj),
      "peekViewEditor.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "peekViewEditor.matchHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
      "peekViewEditor.matchHighlightBorder" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
      "peekViewEditorGutter.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "peekViewResult.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "peekViewResult.fileforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "peekViewResult.lineforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "peekViewResult.matchHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
      "peekViewResult.selectionBackground" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
      "peekViewResult.selectionForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "peekViewTitle.background" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "peekViewTitleDescription.foreground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "peekViewTitleLabel.foreground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
  
      "pickerGroup.border" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "pickerGroup.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "ports.iconRunningProcessForeground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
  
      "problemsErrorIcon.foreground" : _cO(`${hex(color.success.emphasis)}${_x_[4]}`,obj),
  
      "problemsInfoIcon.foreground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
  
      "problemsWarningIcon.foreground" : _cO(`${hex(color.severe.muted)}${_x_[5]}`,obj),
  
      "progressBar.background" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
  
      "quickInput.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "quickInput.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "quickInputList.focusBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "quickInputList.focusforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "quickInputList.focusIconForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "quickInputTitle.background" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "sash.hoverBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
  
      "scm.providerborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "scrollbar.shadow" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "scrollbarSlider.activeBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "scrollbarSlider.background" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "scrollbarSlider.hoverbackground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "searchEditor.findMatchBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "searchEditor.findMatchBorder" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "searchEditor.textInputborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "selection.background" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
  
      "sideBar.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "sideBar.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "sideBar.dropBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "sideBar.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "sideBarSectionHeader.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "sideBarSectionHeader.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "sideBarSectionHeader.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "sideBarTitle.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "sideBySideEditor.horizontalBorder" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "sideBySideEditor.verticalBorder" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
  
      "statusBar.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "statusBar.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "statusBar.debuggingBackground" : _cO(`${hex(color.danger.muted)}${_x_[6]}`,obj),
      "statusBar.debuggingBorder" : _cO(`${hex(color.done.muted )}${_x_[10]}`,obj),
      "statusBar.debuggingforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "statusBar.focusborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "statusBar.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "statusBar.noFolderBackground" : _cO(`${hex(color.severe.muted)}${_x_[5]}`,obj),
      "statusBar.noFolderBorder" : _cO(`${hex(color.severe.muted)}${_x_[5]}`,obj),
      "statusBar.noFolderforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "statusBarItem.activeBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "statusBarItem.compactHoverBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "statusBarItem.errorBackground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "statusBarItem.errorForeground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "statusBarItem.focusborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "statusBarItem.hoverBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "statusBarItem.prominentBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "statusBarItem.prominentForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "statusBarItem.remoteBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "statusBarItem.remoteforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "statusBarItem.settingsProfilesBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "statusBarItem.settingsProfilesforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "statusBarItem.warningBackground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "statusBarItem.warningForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
  
      "symbolIcon.arrayForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "symbolIcon.booleanForeground":_cO(`${hex(color.done.muted)}${_x_[10]}`,obj),
      "symbolIcon.classForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.colorForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.constantForeground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
      "symbolIcon.constructorForeground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
      "symbolIcon.enumeratorForeground" : _cO(`${hex(color.open.fg)}${_x_[10]}`,obj),
      "symbolIcon.enumeratorMemberForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.eventForeground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
      "symbolIcon.fieldForeground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "symbolIcon.fileForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "symbolIcon.folderForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "symbolIcon.functionForeground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
      "symbolIcon.interfaceForeground" : _cO(`${hex(color.danger.fg)}${_x_[10]}`,obj),
      "symbolIcon.keyForeground" : _cO(`${hex(color.open.fg)}${_x_[10]}`,obj),
      "symbolIcon.keywordForeground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
      "symbolIcon.methodForeground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
      "symbolIcon.moduleForeground" : _cO(`${hex(color.open.fg)}${_x_[10]}`,obj),
      "symbolIcon.namespaceForeground" :_cO(`${hex(color.attention.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.nullForeground" : _cO(`${hex(color.neutral.emphasisPlus)}${_x_[10]}`,obj),
      "symbolIcon.numberForeground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.objectForeground" : _cO(`${hex(color.open.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.operatorForeground" : _cO(`${hex(color.done.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.packageForeground" : _cO(`${hex(color.attention.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.propertyforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "symbolIcon.referenceForeground" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
      "symbolIcon.snippetForeground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "symbolIcon.stringForeground" : _cO(`${hex(color.neutral.muted)}${_x_[10]}`,obj),
      "symbolIcon.structForeground" : _cO(`${hex(color.accent.muted)}${_x_[10]}`,obj),
      "symbolIcon.textForeground" : _cO(`${hex(color.success.muted)}${_x_[10]}`,obj),
      "symbolIcon.typeParameterForeground" :_cO(`${hex(color.danger.emphasis)}${_x_[10]}`,obj),
      "symbolIcon.unitForeground" : _cO(`${hex(color.done.muted)}${_x_[10]}`,obj),
      "symbolIcon.variableForeground" : _cO(`${hex(color.sponsors.muted)}${_x_[10]}`,obj),
  
      "tab.activeBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "tab.activeBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.activeBorderTop" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.activeForeground" :_cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.activeModifiedBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "tab.hoverBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "tab.hoverBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.hoverforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "tab.inactiveBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "tab.inactiveForeground" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
      "tab.inactiveModifiedBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.lastPinnedborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "tab.unfocusedActiveBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "tab.unfocusedActiveBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.unfocusedActiveBorderTop" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.unfocusedActiveForeground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.unfocusedActiveModifiedBorder" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "tab.unfocusedHoverBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "tab.unfocusedHoverBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tab.unfocusedHoverforeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "tab.unfocusedInactiveBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "tab.unfocusedInactiveForeground" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
      "tab.unfocusedInactiveModifiedBorder" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
  
      "terminal.foreground" :_cO(`${hex(color.fg.muted)}${_x_[7]}`,obj),
      'terminal.ansiBlack' : _cO(`${hex(color.ansi.black)}${_x_[10]}`,obj),
      'terminal.ansiRed' : _cO(`${hex(color.ansi.red)}${_x_[10]}`,obj),
      'terminal.ansiGreen' : _cO(`${hex(color.ansi.green)}${_x_[10]}`,obj),
      'terminal.ansiYellow' : _cO(`${hex(color.ansi.yellow)}${_x_[10]}`,obj),
      'terminal.ansiBlue' : _cO(`${hex(color.ansi.blue)}${_x_[10]}`,obj), 
      'terminal.ansiMagenta' : _cO(`${hex(color.ansi.magenta)}${_x_[10]}`,obj),
      'terminal.ansiCyan' : _cO(`${hex(color.ansi.cyan)}${_x_[10]}`,obj),
      'terminal.ansiWhite' : _cO(`${hex(color.ansi.white)}${_x_[10]}`,obj),
      'terminal.ansiBrightBlack' : _cO(`${hex(color.ansi.blackBright)}${_x_[10]}`,obj),
      'terminal.ansiBrightRed' : _cO(`${hex(color.ansi.redBright)}${_x_[10]}`,obj),
      'terminal.ansiBrightGreen' : _cO(`${hex(color.ansi.greenBright)}${_x_[10]}`,obj),
      'terminal.ansiBrightYellow' : _cO(`${hex(color.ansi.yellowBright)}${_x_[10]}`,obj),
      'terminal.ansiBrightBlue' : _cO(`${hex(color.ansi.blueBright)}${_x_[10]}`,obj),
      'terminal.ansiBrightMagenta' : _cO(`${hex(color.ansi.magentaBright)}${_x_[10]}`,obj),
      'terminal.ansiBrightCyan' : _cO(`${hex(color.ansi.cyanBright)}${_x_[10]}`,obj),
      'terminal.ansiBrightWhite' : _cO(`${hex(color.ansi.whiteBright)}${_x_[10]}`,obj),


      "terminal.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "terminal.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "terminal.dropBackground" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
      "terminal.findMatchBackground" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
      "terminal.findMatchBorder" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
      "terminal.findMatchHighlightBackground" : _cO(`${hex(color.accent.fg)}${_x_[2]}`,obj),
      "terminal.findMatchHighlightBorder" : _cO(`${hex(color.attention.fg)}${_x_[2]}`,obj),
      "terminal.inactiveSelectionBackground" : _cO(`${hex(color.attention.fg)}${_x_[3]}`,obj),
      "terminal.selectionBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "terminal.selectionForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "terminal.tab.activeBorder" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "terminalCommandDecoration.defaultBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "terminalCommandDecoration.errorBackground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "terminalCommandDecoration.successBackground" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "terminalCursor.background" : _cO(`${hex(color.success.fg)}${_x_[2]}`,obj),
      "terminalCursor.foreground" : _cO(`${hex(color.success.fg)}${_x_[10]}`,obj),
      "terminalOverviewRuler.cursorForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "terminalOverviewRuler.findMatchForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
  
      "testing.iconErrored" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "testing.iconFailed" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "testing.iconPassed" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "testing.iconQueued" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
      "testing.iconSkipped":_cO(`${hex(color.severe.muted)}${_x_[10]}`,obj),
      "testing.iconUnset" : _cO(`${hex(color.severe.muted)}${_x_[10]}`,obj),
      "testing.message.error.decorationForeground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "testing.message.error.lineBackground" : _cO(`${hex(color.danger.muted)}${_x_[5]}`,obj),
      "testing.message.info.decorationForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "testing.message.info.lineBackground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "testing.peekBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "testing.peekHeaderBackground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "testing.runAction" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
  
      "textBlockQuote.background" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "textBlockQuote.border" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "textCodeBlock.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
  
      "textLink.activeForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "textLink.foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
  
      "textPreformat.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "textSeparator.foreground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "titleBar.activeBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "titleBar.activeForeground": _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "titleBar.border" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "titleBar.inactiveBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "titleBar.inactiveForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
  
      "toolbar.activeBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "toolbar.hoverBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "toolbar.hoverOutline" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
  
      "tree.indentGuidesStroke" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "tree.tableColumnsborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "tree.tableOddRowsBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "walkThrough.embeddedEditorBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
  
      "welcomePage.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "welcomePage.progress.background" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "welcomePage.progress.foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "welcomePage.tileBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "welcomePage.tileHoverBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "welcomePage.tileShadow" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
      
      "widget.shadow" : _cO(`${hex(_boc_)}${_x_[10]}`,obj), 
      "window.activeBorder" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "window.inactiveBorder" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "debugConsole.errorForeground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
      "debugConsole.infoForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "debugConsole.sourceForeground" : _cO(`${hex(color.fg.default)}${_x_[10]}`,obj),
      "debugConsole.warningForeground" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
      "debugConsoleInputIcon.foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "debugIcon.breakpointCurrentStackframeForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "debugIcon.breakpointDisabledForeground" : _cO(`${hex(color.fg.subtle)}${_x_[10]}`,obj),
      "debugIcon.breakpointForeground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
      "debugIcon.breakpointStackframeForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "debugIcon.breakpointUnverifiedForeground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
      "debugIcon.continueForeground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "debugIcon.disconnectForeground" : _cO(`${hex(color.danger.fg)}${_x_[10]}`,obj),
      "debugIcon.pauseForeground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "debugIcon.restartForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "debugIcon.startForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "debugIcon.stepBackForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "debugIcon.stepIntoForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "debugIcon.stepOutForeground" : _cO(`${hex(color.accent.fg)}${_x_[5]}`,obj),
      "debugIcon.stopForeground" : _cO(`${hex(color.danger.fg)}${_x_[10]}`,obj),



        "interactive.activeCodeBorder" : _cO(`${hex(color.attention.fg)}${_x_[7]}`,obj),
        "interactive.inactiveCodeBorder" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
      "issues.closed" : _cO(`${hex(color.danger.fg)}${_x_[5]}`,obj),
        "issues.newIssueDecoration" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "issues.open" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),

    

      
        "notebook.cellBorderColor" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "notebook.cellEditorBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "notebook.cellInsertionIndicator" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
        "notebook.cellToolbarSeparator" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "notebook.editorBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
        "notebook.focusedCellBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "notebook.focusedEditorborder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "notebook.inactiveFocusedCellBorder" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
        "notebook.selectedCellBackground" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
        "notebook.selectedCellBorder" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
        "notebook.symbolHighlightBackground" : _cO(`${hex(color.success.emphasis)}${_x_[3]}`,obj),
        "notebookScrollbarSlider.activeBackground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "notebookScrollbarSlider.background" : _cO(`${hex(color.success.emphasis)}${_x_[5]}`,obj),
      "notebookScrollbarSlider.hoverBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "notebookStatusErrorIcon.foreground" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
        "notebookStatusRunningIcon.foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        "notebookStatusSuccessIcon.foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
      "pullRequests.notification" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
      "settings.checkboxBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "settings.checkboxBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "settings.checkboxForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "settings.dropdownBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "settings.dropdownBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "settings.dropdownForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "settings.dropdownListBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "settings.focusedRowBackground" : _cO(`${hex(color.success.emphasis)}${_x_[9]}`,obj),
        "settings.focusedRowBorder" : _cO(`${hex(color.success.emphasis)}${_x_[6]}`,obj),
        "settings.headerBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "settings.headerForeground" : _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "settings.modifiedItemIndicator" : _cO(`${hex(color.danger.muted)}${_x_[10]}`,obj),
        "settings.numberInputBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
     "settings.numberInputBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "settings.numberInputForeground": _cO(`${hex(_fc_)}${_x_[10]}`,obj),
      "settings.rowHoverBackground" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "settings.sashBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "settings.textInputBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj),
        "settings.textInputBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
      "settings.textInputForeground": _cO(`${hex(_fc_)}${_x_[10]}`,obj),
        "statusBarItem.prominentHoverBackground" : _cO(`${_boc_}${_x_[3]}`,obj),
        "notebook.cellHoverBackground" : _cO(`${hex(_fuc_)}${_x_[10]}`,obj),
      "notebook.focusedCellBackground" : _cO(`${hex(color.danger.muted)}${_x_[3]}`,obj),
      "notebook.inactiveSelectedCellBorder" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "notebook.outputContainerBackgroundColor" :_cO(`${hex(_bc_)}${_x_[10]}`,obj),
      "notebook.outputContainerBorderColor" : _cO(`${hex(_boc_)}${_x_[10]}`,obj),
        "quickInput.list.focusBackground" : _cO(`${hex(_bc_)}${_x_[10]}`,obj)


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
          "foreground" : _cO(`${hex(color.fg.muted)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.fg.default)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "entity.name.function",
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.name.tag",
          "support.class.component"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.open.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "keyword",
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "storage",
          "storage.type"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "string",
          "string punctuation.section.embedded source"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "support",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "meta.property-name",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "variable",
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "variable.other",
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "invalid.broken",
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.deprecated",
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.illegal",
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "invalid.unimplemented",
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "carriage-return",
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.fg)}${_x_[10]}`,obj),
          "background" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "italic underline"
        }
      },
      {
        "scope" : "message.error",
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "string variable",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "source.regexp",
          "string.regexp"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "string.regexp constant.character.escape",
        "settings" : {
          "foreground" : _cO(`${hex(color.open.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "support.constant",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "support.variable",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "support.type.property-name.json",
        "settings" : {
          "foreground" : _cO(`${hex(color.open.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "meta.module-reference",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "punctuation.definition.list.begin.markdown",
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "markup.quote",
        "settings" : {
          "foreground" : _cO(`${hex(color.open.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "markup.italic",
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "italic"
        }
      },
      {
        "scope" : "markup.bold",
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
          "background" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "punctuation.section.embedded"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.open.emphasis)}${_x_[10]}`,obj),
          "background" : _cO(`${hex(color.open.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.changed",
          "punctuation.definition.changed"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.emphasis)}${_x_[10]}`,obj),
          "background" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "markup.ignored",
          "markup.untracked"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.neutral.emphasis)}${_x_[10]}`,obj),
          "background" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "meta.diff.range",
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "meta.diff.header",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "meta.separator",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : "bold"
        }
      },
      {
        "scope" : "meta.output",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.neutral.emphasisPlus)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "brackethighlighter.unmatched",
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "constant.other.reference.link",
          "string.other.link"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
          "fontStyle" : "underline"
        }
      },
      {
        "scope" : [
          "constant.language",
          "constant.numeric"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.closed.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "support.type.property-name"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string.regexp",
          "constant.character.escape"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.fg.default)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "string"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.fg.default)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "keyword"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.type.property-name"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "entity.name.function"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "entity.name.type"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "meta.embedded"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.function"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "storage.type"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "storage.modifier"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.scale.pink[6])}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.other.readwrite.js"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable",
          "keyword.control"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.language"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.fg.muted)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "keyword.operator"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "keyword.operator"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.fg.default)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.class"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "keyword"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "comment"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.neutral.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.separator.key-value.html"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.tag"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.support.type.property-name.begin.json.comments",
          "punctuation.support.type.property-name.end.json.comments"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.html",
          "punctuation.definition.string.end.html"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "source.sql.embedded.php"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "string.quoted.other.backtick.sql"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "variable.other.property.js",
          "entity.name.function.member"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.template.begin.js",
          "punctuation.definition.string.template.end.js"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.fg.muted)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "text.html.php"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.fg.muted)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.separator.comma.js",
          "punctuation.separator.dictionary.pair.json.comments"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.php",
          "punctuation.definition.string.end.php"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
          "fontStyle" : ""
        }
      },
      {
        "scope" : [
          "punctuation.accessor.js"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.fg.default)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "punctuation.accessor.js"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.fg.default)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.type.property-name.json"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "variable.argument.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "constant.other.color.rgb-value",
          "support.constant.property-value"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "punctuation.definition.string.begin.css",
          "punctuation.definition.string.end.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "string.quoted.single.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.fg.muted)}${_x_[10]}`,obj),
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
          "foreground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "constant.numeric.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.severe.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.name.tag.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.type.property-name.css",
          "entity.other.keyframe-offset.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.constant.vendored.property-value.css",
          "support.constant.font-name.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.pseudo-element.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.type.property-name.media.css",
          "support.constant.media.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "keyword.operator.logical.only.media.css",
          "keyword.operator.logical.and.media.css",
          "string.quoted.double.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.success.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.other.attribute-name.id.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "support.function.transform.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : [
          "entity.other.keyframe-offset.percentage.css"
        ],
        "settings" : {
          "foreground" : _cO(`${hex(color.sponsors.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "token.info-token",
        "settings" : {
          "foreground" : _cO(`${hex(color.accent.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "token.warn-token",
        "settings" : {
          "foreground" : _cO(`${hex(color.attention.fg)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "token.error-token",
        "settings" : {
          "foreground" : _cO(`${hex(color.danger.emphasis)}${_x_[10]}`,obj),
        }
      },
      {
        "scope" : "token.debug-token",
        "settings" : {
          "foreground" : _cO(`${hex(color.done.fg)}${_x_[10]}`,obj),
        }
      }
    ]
  };
}

module.exports = _gT;
