import * as fs from "fs";

// util for input
const lineit = (function* () { for (const line of fs.readFileSync(process.stdin.fd, "utf8").split("\n")) yield line; })();
const wordit = (function* () { while (true) { let line = lineit.next(); if (line.done) break; for (const word of String(line.value).split(" ")) yield word; } })();
const charit = (function* () { while (true) { let word = wordit.next(); if (word.done) break; for (const char of String(word.value).split("")) yield char; } })();
const readline = () => String((lineit.next()).value);
const read = () => String((wordit.next()).value);
const readchar = () => String((charit.next()).value);

// main
const main = function () {

    // param
    let n: number, x: number;
    let an: number[];

    // init
    n = Number(read());
    x = Number(read());
    an = [];
    for (let nx = 0; nx < n; nx++) an[nx] = Number(read());

    // solve
    let sum = an.reduce((pval, cval, cidx, arr) => pval + cval - ((((cidx + 1) % 2) == 0) ? 1 : 0));
    let ans = (sum <= x) ? "Yes" : "No";

    // answer
    console.log(ans);

    return;

};
main();
