function displayTable(){
    // alert("hello");
    let no = document.getElementById("num").value;
    let showData = document.getElementById("showData");
    // console.log(no);

    showData.innerHTML = "";

    if(no == ''){
        showData.innerHTML = "Please provide number";
    }else{
        for(let i=1; i<=10; i++){
            showData.innerHTML += `<p>${no} * ${i} = ${no*i}</p>`;
        }
    }
}
