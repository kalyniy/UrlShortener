function isValidHttpUrl(string) {
  let url

  try {
    url = new URL(string)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
function generateCode() {}

function generateUrl() {}

function getUrl() {
  return 'http://bitswitch.tech'
}
module.exports = { generateUrl, getUrl }
