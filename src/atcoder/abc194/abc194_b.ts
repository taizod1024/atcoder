export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let n;
    let an, bn;
    // init
    n = Number(input.shift());
    [an, bn] = [new Array(), new Array()];
    for (let nx = 0; nx < n; nx++) {
        [an[nx], bn[nx]] = input.shift().split(" ").map(x => Number(x));
    }
    // solve
    ans = Number.MAX_SAFE_INTEGER;
    for (let nx = 0; nx < n; nx++) {
        for (let nxx = 0; nxx < n; nxx++) {
            if (nx != nxx) {
                ans = Math.min(ans, Math.max(an[nx], bn[nxx]));
            } else {
                ans = Math.min(ans, an[nx] + bn[nxx]);
            }
        }
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
