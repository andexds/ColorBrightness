import {hexToRgb, rgbToHex, hslToRgb, rgbToHsl} from './colorHelper'

export function Lighten(color) {
  let rgbColor = hexToRgb(color)
  let hslColor = rgbToHsl.apply(null,rgbColor)

  hslColor[2] += 5
  if (hslColor[2] > 100) {
    hslColor[2] = 100
  }
  rgbColor = hslToRgb.apply(null, hslColor)
  return rgbToHex.apply(null, rgbColor)
}
export function Darken(color) {
  let rgbColor = hexToRgb(color)
  let hslColor = rgbToHsl.apply(null,rgbColor)

  hslColor[2] -= 5
  if (hslColor[2] < 0) {
    hslColor[2] = 0
  }
  rgbColor = hslToRgb.apply(null, hslColor)
  return rgbToHex.apply(null, rgbColor)
}
