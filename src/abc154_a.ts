import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    let s, t;
    let a, b;
    let u;
    let ans;
    // init
    [s, t] = input.shift().split(" ");
    [a, b] = input.shift().split(" ").map(x => Number(x));
    u = input.shift();
    // solve
    if (u == s) a--;
    if (u == t) b--;
    ans = a + " " + b;
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
