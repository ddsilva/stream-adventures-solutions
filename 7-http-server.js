const http = require('http')
const upperStream = require('./utils/upper-stream')
const [,, port] = process.argv

const serverHandler = (req, res) => {
  if (req.method !== 'POST') return res.writeHead(500)
  req.pipe(upperStream).pipe(res)
}

http
  .createServer(serverHandler)
  .listen(port)
