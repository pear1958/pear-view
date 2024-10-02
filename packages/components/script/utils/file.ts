export const imgRegex =
  /\.(bmp|jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|wmf|jpeg)$/

export const isImgExt = (fileName: string) => {
  if (!fileName) return false
  return imgRegex.test(fileName)
}
