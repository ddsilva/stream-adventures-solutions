const fs = require('fs')

const [,, path] = process.argv

fs
  .createReadStream(path)
  .pipe(process.stdout)
