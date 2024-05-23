function updateClock() {
  let nowTime = new Date();
  let hours = nowTime.getHours();
  let minuts = nowTime.getMinutes();
  let seconds = nowTime.getSeconds();
  let time = "AM";

  if( hours >= 12 ){
    time = "PM"    
  }

  if(hours==0){
    hours = 12;
  } else if (hours > 12){
    hours = hours- 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minuts = minuts < 10 ? "0" + minuts : minuts;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = `${hours}:${minuts}:${seconds} ${time}`;

  let showTime = document.querySelector("p");
  showTime.textContent = currentTime;
}
setInterval(updateClock, 1000);
updateClock();

function date (){
    let Currentday = new Date();
    let day = Currentday.getDay();
    console.log(day)
    let currentDate = Currentday.getDate();
    let year = Currentday.getFullYear();
    let month = Currentday.getMonth();
    console.log(month);

    let months = ["Jan", "Fab", "Mar", "apr", "May", "jun"]
    month = months[month]

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"];
    day = days[day]
    console.log(day)
   

    let= showdate = `${currentDate}/${month}/${year} : ${day}`

    let show = document.querySelector("#datee");

    show.textContent = showdate;
}
date();