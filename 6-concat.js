const concat = require('concat-stream')
const reverse = str => process.stdout.write(str.split('').reverse().join(''))
const writable = concat({ encoding: 'string' }, reverse)

process.stdin.pipe(writable)
