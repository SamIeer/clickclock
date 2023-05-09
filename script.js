function updateClock() {
    const clockElement = document.getElementById('clock');
    const hrst=document.getElementById('hours')
    const mint=document.getElementById('minutes')
    const sect=document.getElementById('seconds')
    const day_month=document.getElementById('day_month')


    const currentDate = new Date();
    const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const week=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday']
    
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const dates=currentDate.getDate()
    const months=month[currentDate.getMonth()];
    const weeks=week[currentDate.getDay()]

    const hrstring=formatTimeComponent(hours)
    const mintstring=formatTimeComponent(minutes)
    const sectstring=formatTimeComponent(seconds)
    const day_months=`${formatTimeComponent(weeks)},${formatTimeComponent(dates)},${formatTimeComponent(months)}`;
  
  
    hrst.textContent = hrstring;
    mint.textContent = mintstring;
    sect.textContent = sectstring;
    day_month.textContent=day_months;
  }
  
  function formatTimeComponent(time) {
    // Add leading zero if the time component is less than 10
    return time < 10 ? `0${time}` : time;
  }
  
  // Update the clock immediately
  updateClock();
  
  // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);
  
