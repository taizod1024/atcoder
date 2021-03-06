export {};
// main
function main(input: string[]) {
    // param
    let n: number;
    let ans: number;
    // init
    n = Number(input[0]);
    // solve
    ans = 1000 - (n - 1) % 1000 - 1;
    // answer
    console.log(ans);
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
