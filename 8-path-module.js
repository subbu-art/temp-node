const path = require('path');

console.log(path.sep);

// to access text file from content
const filepath = path.join('\contet','subfolder','text.txt');

console.log(filepath);

//accessing filename

const base = path.basename(filepath);

console.log(base);

//entire path of the file

const absolute = path.resolve(__dirname, 'content','subfolder','text.txt');

console.log(absolute);