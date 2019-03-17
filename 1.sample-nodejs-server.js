const http = require('http')

http.createServer((req, res) => {
    res.write('<h1>Hello World!</h1><h1 style="color:red">from sample-nodejs-server</h1>')
    res.end()
}).listen(8888)