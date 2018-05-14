export default function(context) {
  let sketch = require('sketch/dom')
  let color = ""
  let UI = require('sketch/ui')
  var brightness = UI.getStringFromUser("Current Brightness 40, you may set (0 → 100)", '50')
  
  UI.message(brightness)
}
