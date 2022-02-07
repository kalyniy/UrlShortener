const express = require('express')
const cors = require('cors')
const shortener = require('./shortener')
const port = 8000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home')
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
