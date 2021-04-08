// main
function main(input: string[]) {
    // param
    var a: string;
    var ans: string;
    // init
    a = input[0];
    // solve
    ans = (a.match(/[A-Z]/)) ? "A" : "a";
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
