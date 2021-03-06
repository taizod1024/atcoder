export {};
// main
function main(input: string[]) {
    // param
    let x: number = 0;
    let y: number = 0;
    let z: number = 0;
    let ans: string = "";
    // init
    [x, y, z] = input.shift().split(" ").map(x => Number(x));
    // solve
    [x, y] = [y, x];
    [x, z] = [z, x];
    ans = x + " " + y + " " + z;
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
