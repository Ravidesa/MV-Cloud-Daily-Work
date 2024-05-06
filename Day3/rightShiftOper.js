function withoutRightSHifOper(n1, n2){
    let res = 0;
    res = Math.floor(n1/(Math.pow(2, n2)));
    return res;
}

console.log(withoutRightSHifOper(80, 3));
console.log(withoutRightSHifOper(-24, 2));