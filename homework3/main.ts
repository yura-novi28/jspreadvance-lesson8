function maxNum(a:number, b:number, ...arg: Array<number>): number{
    let arr: Array<number> = [...arg, a, b];
    return arr.reduce((max, n) => max < n? n: max);
}

console.log(maxNum(-99999, -999, 3, 2, 1, -99999999, 0, 5, 3))