function includeEEOrNot(str){
    for(let i=0; i<str.length; i++){
        let ch1 = str.charAt(i);
        let ch2 = str.charAt(i+1);
        if(ch1 == 'e' && ch2 == 'e'){
            return true;
        }
    }
    return false;
    // return str.includes('ee');
}

console.log(includeEEOrNot("Hello"));
console.log(includeEEOrNot("tree"));
console.log(includeEEOrNot("elephent"));