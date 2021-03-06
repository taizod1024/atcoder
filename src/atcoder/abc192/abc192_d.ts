export {};
// main
function main(input: string[]) {
    // param
    let ans;
    let x;
    let m: bigint;
    // init
    x = input.shift();
    m = BigInt(input.shift());
    // solve
    let xn = x.split("").map(x => BigInt(x));
    let d = xn.reduce((x, y) => (x > y) ? x : y) + 1n;
    function isok(d: bigint) {
        let mn = [];
        for (let m0 = m; 0 < m0; m0 = m0 / d) {
            mn.push(m0 % d);
        }
        mn.reverse();
        if (xn.length < mn.length) return true;
        if (xn.length > mn.length) return false;
        for (let nx = 0; nx < xn.length; nx++) {
            if (xn[nx] < mn[nx]) return true;
            if (xn[nx] > mn[nx]) return false;
        }
        return true;
    }
    function find(min: bigint, max: bigint): bigint {
        let center = (min + max) / 2n;
        if (isok(center)) {
            if (!isok(center + 1n)) return center;
            return find(center, max);
        } else {
            return find(min, center);
        }
    }
    ans = find(d, m) - d + 1n;
    ans = ans.toString().replace("n", "");
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
