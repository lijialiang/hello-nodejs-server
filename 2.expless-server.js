const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1><h1 style="color:red">from express-server</h1>')
})

app.listen(8888)