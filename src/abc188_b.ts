export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an;
    let bn;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    bn = input.shift().split(" ").map(x => Number(x));
    // solve
    let sum = 0;
    for (let nx = 0; nx < n ; nx++) {
        sum += an[nx] * bn[nx];
    }
    ans = (sum == 0) ? "Yes" : "No";
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
