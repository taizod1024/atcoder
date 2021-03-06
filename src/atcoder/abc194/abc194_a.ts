export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let a, b;
    // init
    [a, b] = input.shift().split(" ").map(x => Number(x));
    // solve
    if ((a + b) >= 15 && b >= 8) ans = 1;
    else if ((a + b) >= 10 && b >= 3) ans = 2;
    else if ((a + b) >= 3) ans = 3;
    else ans = 4;
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
