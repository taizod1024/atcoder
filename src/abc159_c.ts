import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var l: number = 0;
    var ans: number = 0;
    // init
    l = Number(input.shift());
    // solve
    ans = Math.pow(l/3, 3);
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
