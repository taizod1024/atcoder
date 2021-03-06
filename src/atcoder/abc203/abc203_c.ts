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
    let n: bigint;
    let k: bigint;
    let abn: bigint[][];

    // init
    n = BigInt(read());
    k = BigInt(read());
    abn = [];
    for (let nx = 0; nx < n; nx++) {
        abn[nx] = [BigInt(read()), BigInt(read())];
    }

    // solve
    abn.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
    let vx = 0n;
    for (let nx = 0; nx < n; nx++) {
        if (vx + k < abn[nx][0]) break;
        k = k - (abn[nx][0] - vx) + abn[nx][1];
        vx = abn[nx][0];
    }
    vx += k;
    let ans = vx.toString().replace("n", "");

    // answer
    console.log(ans);

    return;

};
main();
