export {};
// main
function main(input: string[]) {
    // param
    var n: number = 0;
    var ans: string = "";

    // init
    n = Number(input.shift());

    // solve
    var s = String(n % 10);
    if (s.match(/[24579]/)) ans = "hon";
    else if (s.match(/[0168]/)) ans = "pon";
    else ans = "bon";
    
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