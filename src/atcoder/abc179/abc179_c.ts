export {};
// main
function main(input: string[]) {
    // param
    let n;
    let ans;
    // init
    n = Number(input.shift());
    // solve
    ans = 0;
    for (let nx = 1; nx < n; nx++) {
        ans += Math.floor((n - 1) / nx);
    }
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
