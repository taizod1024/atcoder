export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an;
    // init
    n = Number(input.shift());
    an = input.shift().split(" ").map(x => Number(x));
    // solve
    an.sort((x, y) => x - y);
    ans = 0;
    let diff = 0;
    let sum = 0;
    for (let nx = 0; nx < n; nx++) {
        if (nx == 0 || an[nx - 1] != an[nx]) {
            sum = 0;
            for (let nxx = nx + 1; nxx < n; nxx++) {
                diff = an[nx] - an[nxx];
                sum += diff * diff;
            }
        }
        ans += sum;
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
