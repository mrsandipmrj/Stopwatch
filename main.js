var ms="00",s="00",m="00",h="00";
var counter;
var time_var = document.querySelector('.time')
var start_button = document.querySelector('.start')
var stop_button = document.querySelector('.stop')
var reset_button = document.querySelector('.reset')
start_button.addEventListener('click', function(){
   counter = setInterval(run,10)
   function run(){
    time_var.textContent=h+":"+m +":"+ s +":" + ms
    ms++
    if(ms==100){
        ms="00"
        s++
        if(s==60){
            s="00"
            m++
            if(m==60){
                m="00"
                h++
            }
        }
    }
   }
   stop_button.addEventListener('click',function(){
    clearInterval(counter)
   })
   reset_button.addEventListener('click',function(){
    clearInterval(counter)
    time_var.textContent="00:00:00:00"
   })
})