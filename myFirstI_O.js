var fs = require('fs');

var contents = String(fs.readFileSync(process.argv[2]));
var lines = contents.split('\n');
console.log(lines.length - 1);
