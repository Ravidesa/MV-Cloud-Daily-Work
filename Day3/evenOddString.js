function showResult(){
    let str = document.getElementById("str").value;

    if(str == ""){
        document.getElementById("res").value = "Please provide the string!";
    }else{
        let newStr = str.split("");

        newStr.forEach((char, idx, newStr) => {
            str.charCodeAt(idx)%2 == 0 ? newStr[idx] = char.toUpperCase() : newStr[idx] = char.toLowerCase();
        });

        document.getElementById("res").value = newStr.join("");
    }

}