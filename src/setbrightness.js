import {getSelectedLayer} from './helper'
import {rgbToHex, rgbToHsl, hexToRgb, hslToRgb} from './colorHelper'

export default function(context) {
  let UI = require('sketch/ui')
  let sketch = require('sketch/dom')
  let color = ""
  let selected = getSelectedLayer(context)
  let layer = selected.layer
  let l

  if (selected.type == sketch.Types.Shape) {
    let fills = layer.style.fills
    let index = 0;
    for (var i = fills.length-1; i >= 0; i--) {
        if (fills[i].fill == "Color") {
          color = fills[i].color
          index = i
          break
        }
    }
    let rgb = hexToRgb(color)
    let hsl = rgbToHsl.apply(null,rgb)
    l = hsl[2]
    let newL = getNumberToSet(l)
    if (isNaN(newL)) {
      UI.message("Enter number, please")
      return
    } else if(newL < 0 || newL > 100) {
      UI.message("Your number not correct, use 0-100")
      return
    }

    hsl[2] = newL
    rgb = hslToRgb.apply(null,hsl)
    color = rgbToHex.apply(null, rgb)
    fills[index].color = color+"ff"

    UI.message(color)
  } else if(selected.type == sketch.Types.Text) {
    let textLayer = context.selection.firstObject();
    let textColor = textLayer.textColor()
    let textR = Math.round(textColor.red()*255)
    let textG = Math.round(textColor.green()*255)
    let textB = Math.round(textColor.blue()*255)

    let hsl = rgbToHsl.apply(null,[textR, textG, textB])
    l = hsl[2]
    let newL = getNumberToSet(l)
    if (isNaN(newL)) {
      UI.message("Enter number, please")
      return
    } else if(newL < 0 || newL > 100) {
      UI.message("Your number not correct, use 0-100")
      return
    }

    hsl[2] = newL
    let rgb = hslToRgb.apply(null,hsl)
    console.log(";;;;;;;;;;;;;;;;");
    console.log(hsl);
    console.log(rgb);
    textLayer.textColor = MSColor.colorWithRed_green_blue_alpha(
      rgb[0]/255,
      rgb[1]/255,
      rgb[2]/255,
      1.0)

  }

}

function getNumberToSet(l) {
  let UI = require('sketch/ui')
  let brightness = UI.getStringFromUser("Current Brightness "+l+", you may set (0 → 100)", l)

  return +brightness
}
