// main
function main(input: string[]) {
    // param
    let ans;
    let x;
    // init
    x = Number(input.shift());
    // solve
    ans = 100 - x % 100
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
