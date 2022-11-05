function timeInterval(){
    let date = new Date();
    let seconds = date.getSeconds();
    let hours = date.getHours();
    switch (hours) {
      case 13:
        hours = 1;
        break;
      case 14:
        hours = 2;
        break;
      case 15:
         hours = 3;
        break;
      case 16:
        hours = 4;
        break;
      case 17:
        hours = 5;
        break;
      case 18:
        hours = 6;
        break;
      case 19:
        hours = 7;
        break;
      case 20:
        hours = 8;
        break;
      case 21:
        hours = 9;
        break;
      case 22:
        hours = 10;
        break;
      case 23:
        hours = 11;
        break;
      case 24:
        hours = 12;
        break;
    }
    let minutes = date.getMinutes();

    let month = date.getMonth();
    let da = date.getDate();
    let year = date.getFullYear();
    switch (month) {
        case 0:
          month = "JAN";
          break;
        case 1:
          month = "FEB";
          break;
        case 2:
           month = "MAR";
          break;
        case 3:
          month = "APR";
          break;
        case 4:
          month = "MAY";
          break;
        case 5:
          month = "JUNE";
          break;
        case 6:
          month = "JUL";
          break;
        case 7:
          month = "AUG";
          break;
        case 8:
          month = "SEP";
          break;
        case 9:
          month = "OCT";
          break;
        case 10:
          month = "NOV";
          break;
        case 11:
          month = "DEC";
          break;
      }
    let day = date.getDay();
    switch (day) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }

    let amPM = hours % 12 > 1? ' PM' : ' AM';
    let clock = hours+ ":" + minutes;
    document.getElementById('amPM').innerHTML = amPM;
    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;
    document.getElementById('time').innerHTML = clock;
    document.getElementById('second').innerHTML = seconds+" sec";
    document.getElementById('date').innerHTML = "Day "+da;

}
setInterval(timeInterval, 1000);