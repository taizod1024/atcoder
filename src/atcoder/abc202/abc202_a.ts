export { };
// main
function main(input: string[]) {
    // param
    let ans: number;
    let a: number, b: number, c: number;
    // init
    [a, b, c] = input.shift().split(" ").map(x => Number(x));
    // solve
    ans = 3 * 7 - (a + b + c);
    // answer
    console.log(ans);
    return;
}
// entrypoint
function entrypoint() {
    const lines: string[] = [];
    const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    reader.on('line', function (line: string) { lines.push(line); });
    reader.on('close', function () { main(lines); });
}
entrypoint();
