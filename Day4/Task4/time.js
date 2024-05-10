function showDiffTime(){
            let lunchTime = document.getElementById("time").value;
            let lunchTimeSplit = lunchTime.split(":");

            let currTime = new Date();
            let lunch = new Date();

            let hours = lunchTimeSplit[0];
            let minutes = lunchTimeSplit[1];
            
            lunch.setHours(hours);
            lunch.setMinutes(minutes);

            console.log("hours "+hours);
            console.log("minutes "+minutes);
        
            let diffTime = lunch.getTime() - currTime.getTime();

            if(diffTime <= 0){
                document.getElementById("res").innerText = "Lunch time is over";
                return;
            }

            let remainingHours =Math.floor(diffTime/(60*60*1000)%24);
            let remainingMinutes = Math.floor(diffTime/(60*1000)%60);


            document.getElementById("res").innerText = `${remainingHours} Hours ${remainingMinutes} Minutes Remaining`;
        }