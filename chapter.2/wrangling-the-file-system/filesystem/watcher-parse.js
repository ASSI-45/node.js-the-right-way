'use strict';
const fs = require('fs');
const filename = process.argv[2];
const spawn = require('child_process').spawn;

if (!filename) {
  throw Error("a file to watch must be specified!");
}

fs.watch('target.txt', () => {
  const ls = spawn('ls', ['-l', '-h', filename]);
  let output = '';

  ls.stdout.on('data', chunk => output += chunk);

  ls.on('close', () => {
    const parts = output.split(/|s+|/);
    console.log(parts[1], parts[4], parts[8]);
  });
});

console.log(`now watching file system for changes in ${filename}...`);