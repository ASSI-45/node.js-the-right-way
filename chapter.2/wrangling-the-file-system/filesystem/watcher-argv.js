'use strict';
const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
  throw Error("a file to watch must be specified!");
}

fs.watch('target.txt', () => console.log(`file ${filename} changed !`));
console.log(`now watching file system for changes in ${filename}...`);