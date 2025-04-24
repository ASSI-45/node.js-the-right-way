'use strict';
const fs = require('fs');
const filename = process.argv[2];
const spawn = require('child_process').spawn;

if (!filename) {
  throw Error("a file to watch must be specified!");
}

fs.watch('target.txt', () => {
  const ls = spawn('ls', ['-l', '-h', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log(`now watching file system for changes in ${filename}...`);