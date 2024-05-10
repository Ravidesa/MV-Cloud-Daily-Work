function separateAscendingGroups(str) {
    let res = [];
    let currGroup = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0 || parseInt(str[i]) === parseInt(str[i - 1]) + 1) {
            currGroup += str[i];
        } else {
            res.push(currGroup);
            currGroup = str[i];
        }
    }
    res.push(currGroup);

    return res;
}

console.log(separateAscendingGroups("1235689"));

console.log(separateAscendingGroups("135689"));
