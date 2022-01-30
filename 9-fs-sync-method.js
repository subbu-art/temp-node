const  {readFileSync, writeFileSync} = require('fs');
const { syncBuiltinESMExports } = require('module');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

writeFileSync('./content/result-syncBuiltinESMExports.txt',` result ${first}& ${second}`,{flag: 'a'});