const through2 = require('through2')
const split = require('split')
let upper = false;

const transformCb = function (chunk, _, next) {
  const line = `${chunk.toString()}\n`

  this.push(upper ? line.toUpperCase() : line.toLowerCase())

  upper = !upper

  next()
}

const transformStrem = through2(transformCb)

process.stdin
  .pipe(split())
  .pipe(transformStrem)
  .pipe(process.stdout)
