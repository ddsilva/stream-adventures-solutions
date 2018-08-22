const through2 = require('through2')

const upperCb = function (chunk, _, next) {
  this.push(chunk.toString().toUpperCase())
  next()
}

const upperStream = through2(upperCb)

process.stdin
  .pipe(upperStream)
  .pipe(process.stdout)
