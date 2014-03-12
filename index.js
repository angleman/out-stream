// out-stream
fs    = require('fs')
argv  = argv = require('minimist')(process.argv.slice(2))

options = { 
  flags:     'w',
  encoding:  'utf8',
  mode:      0666,
  autoClose: true
}

outStream = (argv.o) ? fs.createWriteStream(argv.o, options) : process.stdout

module.exports = outStream