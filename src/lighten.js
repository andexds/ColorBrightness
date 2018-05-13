import {
  Lighten
} from './helper.js'

export default function(context) {
  let sketch = require('sketch/dom')
  let UI = require('sketch/ui')
  let Document = sketch.Document
  let document = sketch.getSelectedDocument()
  let selection = document.selectedLayers
  let Style = sketch.Style
  let color = ""

  if (selection.length <= 0) {
    UI.message("Select one layer");
    return
  }

  let layer = selection.layers[0]

  if (layer.type != sketch.Types.Shape) {
    UI.message("Select shape layer");
    return
  }
  let fills = layer.style.fills
  let index = 0;
  for (var i = fills.length-1; i >= 0; i--) {
      if (fills[i].fill == "Color") {
        color = fills[i].color
        index = i
        break
      }
  }
  color = Lighten(color)
  fills[index].color = color+"ff"

  context.document.showMessage(color);
}
