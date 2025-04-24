'use strict';
const fs = require('fs');

fs.watch('target.txt', () => console.log('file changed !'));
console.log("now watching file system for changes...");