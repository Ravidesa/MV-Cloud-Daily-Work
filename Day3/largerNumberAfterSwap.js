function checkItislargerOrNot(num){
    let cNum = num;
    let newNum = "";
    while(num > 0){
        rem = Math.floor(num%10);
        // console.log("remider is ", rem);
        num  = Math.floor(num/10);
        newNum += rem;
        // console.log("New number is ", newNum);
    }

    if(cNum > Number(newNum)){
        return false;
    }

    return true;
}

console.log(checkItislargerOrNot(19));