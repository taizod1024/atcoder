export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let a, b;
    // init
    [a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = 2 * a + 100 - b;
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
