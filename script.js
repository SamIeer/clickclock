function updateClock() {
    const clockElement = document.getElementById('clock');
    const hrst=document.getElementById('hours')
    const mint=document.getElementById('minutes')
    const sect=document.getElementById('seconds')

    const currentDate = new Date();
    
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const hrstring=formatTimeComponent(hours)
    const mintstring=formatTimeComponent(minutes)
    const sectstring=formatTimeComponent(seconds)
  
  
    hrst.textContent = hrstring;
    mint.textContent = mintstring;
    sect.textContent = sectstring;
  }
  
  function formatTimeComponent(time) {
    // Add leading zero if the time component is less than 10
    return time < 10 ? `0${time}` : time;
  }
  
  // Update the clock immediately
  updateClock();
  
  // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);
  
