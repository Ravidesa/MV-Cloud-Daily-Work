
function calculate(opr){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let res;

    switch (opr) {
        case 'add':
            res = num1 + num2;
            break;
        
        case 'sub':
            res = num1 - num2;
            break;

        case 'div':
            if (num2 !== 0) {
                res = num1 / num2;
            } else {
                document.getElementById('res').value = "Division by zero is not possible";
                return;
            }
            break;

        case 'mul':
            res = num1 * num2;
            break;

        default:
            document.getElementById('res').value = "Invalid operation";
            return;
    }

    if (!isNaN(res)) {
        document.getElementById('res').value = res;
    } else {
        document.getElementById('res').value = "Please provide both numbers";
    }

}