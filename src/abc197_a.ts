import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let ans;
    let s;
    // init
    s = input.shift();
    // solve
    ans = s.substring(1) + s.substring(0, 1);
    // answer
    return ans;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { let input = lines; console.log(main(input)); });
}
entrypoint();
