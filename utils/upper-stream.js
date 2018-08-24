const through2 = require('through2')

const upperCb = function (chunk, _, next) {
  this.push(chunk.toString().toUpperCase())
  next()
}

module.exports = through2(upperCb)
