function minMax(str){
    let arr = str.split(" ");
    let minRes = Number(arr[0]);
    let maxRes = Number(arr[0]);

    if(arr.length == 1){
        return `${minRes} ${maxRes}`;
    }

    for(let i=1; i<arr.length; i++){
        if(Number(arr[i]) < minRes){
            minRes = Number(arr[i]);
        }
        if(Number(arr[i]) > maxRes){
            maxRes = Number(arr[i]);
        }
    }
    console.log(arr);
    // console.log(minRes+" ",+maxRes);
    return maxRes+" "+minRes;
}
// minMax("1 2 3 4 5")
console.log(minMax("1 2 3 3 4 5 5 6 7 8 9 10"));