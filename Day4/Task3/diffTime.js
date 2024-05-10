function dateDiff() {
    let date = document.getElementById("date").value;
    //console.log("date is  --> "+date);
    let userDate = new Date(date);
    let currDate = new Date();

    let diffTime = userDate.getTime() - currDate.getTime();

    let days = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    let hours = Math.floor((diffTime / (60 * 60 * 1000)) % 24);
    let minutes = Math.floor((diffTime / (60 * 1000)) % 60);
    let seconds = Math.floor((diffTime / 1000) % 60);
    let totalTimeRemaining = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    document.getElementById("res").innerText = totalTimeRemaining;
}
