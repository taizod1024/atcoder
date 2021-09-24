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
    let a: number, b: number;

    // init
    a = Number(await read());
    b = Number(await read());

    // solve
    let ans;
    if (0 < a && b==0) ans = "Gold";
    if (0 == a && 0 < b) ans = "Silver";
    if (0 < a && 0 < b) ans = "Alloy";

    // answer
    console.log(ans);

    return;

};
main();
