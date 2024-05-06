function countDigit(num){
    let count = 0;
    // console.log(typeof(num));
    while(num > 0){
        num = Math.floor(num/10);
        // console.log(num);
        count++;
    }
    return count;
}
let num = process.argv[2];
console.log(`The digit in the ${num} is ${countDigit(num)}`);