function multiplyNumWithDigit(...argu){

    let res = 0;
    for(let i=0; i<argu.length; i++){
        res += argu[i];
    }

    // console.log(res);

    while(res >= 10){
        let mul = 1;

        while(res > 0){
            let rem = res%10;
            mul *= rem;
            res = Math.floor(res/10);
        }
       res = mul;
    }
    return res;
}

console.log(multiplyNumWithDigit(16, 21));
