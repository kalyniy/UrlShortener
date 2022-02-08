const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const shortener = require('./shortener')
const port = 8000
const app = express()
app.use(cors())
//app.use(express.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post('/shorten', (req, res) => {
  let input = req.body.url
  if (shortener.isValidHttpUrl(input)) {
    const code = shortener.generateCode(5)
    const url = shortener.generateUrl(code)
    res.send(`${code} -> ${url}`)
  } else {
    res.send('wrong http')
  }
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get('/:id', (req, res) => {
  let id = req.params.id
  let url = shortener.getUrl(id)
  if (url.length > 0) {
    res.redirect('http://bitswitch.tech')
  } else {
    res.send(`${id} was not found.`)
  }
})
app.listen(port)
console.log('Web Server is listening at port ' + port)
