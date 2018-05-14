import {
  Darken,
  getSelectedLayer
} from './helper.js'

export default function(context) {
  let sketch = require('sketch/dom')
  let selected = getSelectedLayer(context)
  let layer = selected.layer
  let color = ""
  let UI = require('sketch/ui')

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
    color = Darken(color, "Shape")
    fills[index].color = color+"ff"
    context.document.showMessage(color);
  } else if (selected.type == sketch.Types.Text) {
    let textLayer = context.selection.firstObject();
    let textColor = textLayer.textColor()
    let textR = Math.round(textColor.red()*255)
    let textG = Math.round(textColor.green()*255)
    let textB = Math.round(textColor.blue()*255)

    console.log('rgb(' + textR +','+ textG +','+ textB+')')

    textColor = Darken([textR, textG, textB], "Text")
    textLayer.textColor = MSColor.colorWithRed_green_blue_alpha(
      textColor[0]/255,
      textColor[1]/255,
      textColor[2]/255,
      1.0)
    console.log(textColor);
  }
}
