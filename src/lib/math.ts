// math lib
function Math_max(arr: number[]): number { return arr.reduce((x, y) => Math.max(x, y)); }
function Math_min(arr: number[]): number { return arr.reduce((x, y) => Math.min(x, y)); }
function Math_gcd(...values: number[]): number {
    let ans = values[0];
    let f = (a: number, b: number): number => b ? f(b, a % b) : a
    for (let i = 1; i < values.length; i++) {
        ans = f(ans, values[i]);
    }
    return ans
};
function Math_gcdArray(values: number[]): number {
    let ans = values[0];
    let f = (a: number, b: number): number => b ? f(b, a % b) : a
    for (let i = 1; i < values.length; i++) {
        ans = f(ans, values[i]);
    }
    return ans
};
function Math_lcm(...values: number[]): number {
    let a = values
    let g = (n: number, m: number): number => m ? g(m, n % m) : n
    let l = (n: number, m: number): number => n * m / g(n, m)
    let ans = a[0]
    for (let i = 1; i < a.length; i++) {
        ans = l(ans, a[i])
    }
    return ans
}
function Math_lcmArray(values: number[]): number {
    let a = values
    let g = (n: number, m: number): number => m ? g(m, n % m) : n
    let l = (n: number, m: number): number => n * m / g(n, m)
    let ans = a[0]
    for (let i = 1; i < a.length; i++) {
        ans = l(ans, a[i])
    }
    return ans
}
function Math_primeList(value: number): number[] {
    let ans = [];
    let arr = new Array(value).fill(0);
    for (let i = 2; i < value; i++) {
        if (arr[i] == 0) {
            for (let j = i; j < value; j += i) {
                if (arr[j] == 0) arr[j] = i;
            }
        }
    }
    for (let i = 2; i < value; i++) {
        if (arr[i] == i) ans.push(i);
    }
    console.log(ans);
}
function Math_primeFactor(value: number, pl: number[] = null): number[][] {
    let ans: number[][] = [];
    let valmax = value / 2;
    if (pl == null) pl = Math_primeList(valmax);
    for (let i = 0; i < pl.length; i++) {
        let prime = pl[i];
        if (valmax < prime) break;
        let count = 0;
        while (value % prime == 0) {
            value /= prime;
            count++;
        }
        if (count != 0) {
            ans.push([prime, count]);
        }
        if (value == 1) break;
    }
    console.log(ans);
}
