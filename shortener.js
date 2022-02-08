function isValidHttpUrl(string) {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
function generateCode(length) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
function generateUrl(code) {
  const url = `http://localhost:8000/${code}`
  return url
}

function getUrlByCode(code) {
  return 'http://bitswitch.tech'
}
module.exports = { generateCode, generateUrl, getUrlByCode, isValidHttpUrl }
