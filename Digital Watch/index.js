function myTime() {
    var myDate = new Date();

    var hr;
    var min = (myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes());
    var sec = (myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds());
    var M = (myDate.getHours() >= 12) ? "PM" : "AM";

 
    if (myDate.getHours() == 0) {
        hr = 12;
    } else if (myDate.getHours() > 12) {
        hr = myDate.getHours() - 12;
    } else {
        hr = myDate.getHours();
    }

    var currentTime = hr + ":" + min + ":" + sec + " ";
    document.getElementsByClassName("H")[0].innerText = currentTime;
    document.getElementsByClassName("M")[0].innerText = M;

    
    var myDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = myDate.getDate();

    var currentDate = myDay[myDate.getDay()] + ", " + myMonth[myDate.getMonth()] + " " + day;
    document.getElementsByClassName("date")[0].innerText = currentDate;
}

myTime();
setInterval(function () {
    myTime();
}, 1000);
