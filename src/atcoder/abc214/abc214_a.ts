import * as rl from "readline";

// util for input
const lineit = rl.createInterface({ input: process.stdin });
const wordit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) yield await word; })();
const charit = (async function* () { for await (const line of lineit) for (const word of line.split(" ")) for (const char of word.split("")) yield await char; })();
const read = async () => String((await wordit.next()).value);
const readchar = async () => String((await charit.next()).value);

// main
const main = async function () {

    // param
    let n: number;
    
    // init
    n = Number(await read());

    // solve
    let ans;
    if (1 <= n && n <= 125) ans = 4;
    else if (126 <= n && n <= 211) ans = 6;
    else if (212 <= n && n <= 214) ans = 8;
    
    // answer
    console.log(ans);

    return;

};
main();
