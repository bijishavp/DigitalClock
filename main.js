
    function clockTime(){
   

   setInterval(() => {
       let currentTime = new Date();

       hrs.innerHTML =(currentTime.getHours()<10?"0":"") + currentTime.getHours();
       mnts.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
       sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

   }, 1000)
}
   
clockTime()
