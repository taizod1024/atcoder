export {};
// main
function main(input: string[]) {
    // param
    let ans;
    // init
    let a, b;
    [a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = (a - b) / a * 100;
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
