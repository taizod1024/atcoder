import * as fs from 'fs';
// main
function main(input: string[]) {
    // param
    var n: bigint;
    var ans: string;
    // init
    n = BigInt(input[0]);
    // solve
    var w: bigint = n;
    ans = "";
    while (w != 0n) {
        var m = (w - 1n) % 26n + 1n;
        w = (w - m) / 26n;
        var x = Number(m);
        ans = String.fromCharCode("a".charCodeAt(0) + x - 1) + ans;
    }
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
