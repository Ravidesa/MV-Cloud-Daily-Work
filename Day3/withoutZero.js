function check(num){
    // let newStr = '';
    // let arr = num.split('.');
    // console.log(num.length);
    // console.log(arr.length);
    // console.log(arr);-
    
    // for(let i=0; i<arr[0].length; i++){

    //     let char = arr[0].charAt(i);        
    //     // console.log(char);
    //     if(char != '0'){
    //         newStr = arr[0].substring(i, arr[0].length);
    //         // console.log(arr[0].substring(i, arr[i].length));
    //         break;
    //     }
    // }

    // console.log(arr[0].charAt(2));

    // for(let i=0; i<arr[1].length; i++){
    //     let char = arr[1].charAt(i);
    //     // console.log(char)
    //     if(char != '0'){
    //         newStr +=  '.'+ arr[1].substring(i, arr[1].length);
    //         break;
    //     }
    // }

    let no = parseFloat(num);
    return no.toString();
}

console.log(check("0000230"));
console.log(check("0000230.0003000"));