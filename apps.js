let calender = new Date();

let mArr = [ 1, 2, 3, 4, 5, 6, 7, 8,9 ,10 ,11 ,12 ];
let dArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
 
let month = calender.getMonth();
let days = calender.getDay();
let dates1 = calender.getDate();

let concatinateMonth = document.getElementById("month").innerText = (month < 10) ? "0" + mArr[month] : mArr[month];
let concatinateDay = document.getElementById("day").innerText = dArr[days];
let year = document.getElementById("year").innerText = calender.getFullYear();

let dates = document.getElementById("date").innerText = (dates1 < 10) ? "0" + dates1 : dates1;


function clock() {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let session = document.getElementById("session");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if (h >= 12) {
        session = session.innerText = "PM";
    } else {
        session = session.innerText = "AM";

    }

    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}

setInterval(clock, 1000);