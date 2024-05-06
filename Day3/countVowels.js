function check(str){
    let regx = /[aeiou]/ig;
    let res = str.match(regx);
    console.log(res);
    return res ? res.length : 0;
}

// console.log(countVowels("Aelebration"));
console.log(check("Aelebration"));