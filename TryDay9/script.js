let first = "first";
let count = 0;
let height = 200;
let width = 200;

let translateX = -50;
let translateY = -50;
let container = "container";

let container2 = document.getElementById("container2");


dragElement(document.getElementById("container"), first);

function dragElement(ele, first) {
    let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

    ele.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmousemove = elementDrag;

        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        ele.style.top = ele.offsetTop - pos2 + "px";
        ele.style.left = ele.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;

        let circles = document.querySelector("." + first);
        let cont = document.querySelector("."+container);
        console.log(circles);
        console.log(cont);
        if (height < 50) {
            width = width - 10;
            height = height - 10;
            circles.style.width = width + "px";
            circles.style.height = height + "px";
        } else {
            width = width - 40;
            height = height - 40;
            circles.style.width = width + "px";
            circles.style.height = height + "px";
        }
         
        if(first == 'first'){
            circles.style.backgroundColor = 'bisque';
        }
        circles.className = 'second';
        // circles.style.position = 'absolute';
        // circles.style.top = 50+'%';
        // circles.style.left = 50+'%';
        // circles.style.transform = "translate(" + translateX + "%," + translateY + "%)";


        container2.appendChild(circles);
        
        document.body.removeChild(cont);
        
        container = container + count;
        
        if (height > 10) {
            const containers = document.createElement("div");
            containers.className = container;
            containers.style.position = "absolute";
            containers.style.top = 50 + "%";
            containers.style.left = 50 + "%";
            containers.style.transform =
                "translate(" + translateX + "%," + translateY + "%)";

            first = first + count;
            const div = document.createElement("div");
            div.className = first;
            div.style.height = 210 + "px";
            div.style.width = 210 + "px";

            div.style.backgroundColor = getRandomColor();
            div.style.borderRadius = 50 + "%";

            count++;

            containers.appendChild(div);
            document.body.appendChild(containers);

            dragElement(containers, first);
        }
    }
}

function getRandomColor() {
    let str = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += str[Math.floor(Math.random() * 16)];
    }
    return color;
}
