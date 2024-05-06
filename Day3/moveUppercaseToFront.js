function moveAllUpperCaseToFront(str){
    let upperCaseString = '';
    let lowerCaseString = '';
    
    for(let char of str){
        char == char.toUpperCase() ? upperCaseString+=char : lowerCaseString+=char;

        // if(char == char.toUpperCase()){
        //     upperCaseString += char;
        // }else if(char == char.toLowerCase()){
        //     lowerCaseString += char;
        // }
    }

    return upperCaseString+lowerCaseString;

}

console.log(moveAllUpperCaseToFront("hApPy"));