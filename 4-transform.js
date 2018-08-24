const upperStream = require('./utils/upper-stream')

process.stdin
  .pipe(upperStream)
  .pipe(process.stdout)
