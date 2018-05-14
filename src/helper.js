import {hexToRgb, rgbToHex, hslToRgb, rgbToHsl} from './colorHelper'

export function Lighten(color, type) {
  let rgbColor, result;

  if (type == "Shape") {
    rgbColor = hexToRgb(color)
  } else {
    rgbColor = color
  }

  let hslColor = rgbToHsl.apply(null,rgbColor)

  hslColor[2] += 5
  if (hslColor[2] > 100) {
    hslColor[2] = 100
  }
  rgbColor = hslToRgb.apply(null, hslColor)

  if (type == "Shape") {
    result = rgbToHex.apply(null, rgbColor)
  } else {
    result = rgbColor
  }

  return result
}
export function Darken(color, type) {
  let rgbColor, result;

  if (type == "Shape") {
    rgbColor = hexToRgb(color)
  } else {
    rgbColor = color
  }

  let hslColor = rgbToHsl.apply(null,rgbColor)

  hslColor[2] -= 5
  if (hslColor[2] < 0) {
    hslColor[2] = 0
  }
  rgbColor = hslToRgb.apply(null, hslColor)

  if (type == "Shape") {
    result = rgbToHex.apply(null, rgbColor)
  } else {
    result = rgbColor
  }
  return result
}
//Return Object {layer, type}
export function getSelectedLayer(context) {
  let sketch = require('sketch/dom')
  let UI = require('sketch/ui')
  let Document = sketch.Document
  let document = sketch.getSelectedDocument()
  let selection = document.selectedLayers
  let Style = sketch.Style

  if (selection.length <= 0) {
    UI.message("Select one layer");
    return
  }

  let layer = selection.layers[0]
  let type = layer.type

  return {
    layer: layer,
    type: type
  }
  //
  // if (layer.type != sketch.Types.Shape) {
  //   UI.message("Select shape layer");
  //   return
  // }
}
