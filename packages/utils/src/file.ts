export const isImgExt = (fileName: string) => {
  if (!fileName) return false
  const suffixRegex =
    /\.(bmp|jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|wmf|jpeg)$/
  return suffixRegex.test(fileName)
}

export const test2 = () => {
  console.log('222-test2')
}
