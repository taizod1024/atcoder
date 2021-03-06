
export {};
// main
function main(input: string[]) {
    // param
    let n: number = 0;
    let m: number = 0;
    let ans: number = 0;
    // init
    [n, m] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = n * (n - 1) / 2 + m * (m - 1) / 2
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
