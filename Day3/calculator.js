let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                    display.innerText = "Error!";
                }

                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})
