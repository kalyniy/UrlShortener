const express = require('express')
const cors = require('cors')

const port = 8000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home')
})
app.listen(port)
console.log('Web Server is listening at port ' + port)
