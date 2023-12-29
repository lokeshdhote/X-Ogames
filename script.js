var box = document.querySelector("#gamebox")
var id 
var time =10
function timer(){
   var settimer= setInterval(function() {
        if(time>0){
            time--
            document.querySelector("#part2 h3").textContent = time
        }

        else{
            clearInterval(settimer)
        }
      
    }, 1000);
}
function userX(){
    box.addEventListener("click",function(dets){
        id = dets.target.id
        document.querySelector("#"+id+" "+"h1").textContent="x"
        }) 
       
}
function userO(){
    box.addEventListener("click",function(dets){
        id = dets.target.id 
        document.querySelector("#"+id+" "+"h1").textContent="O"
        })
        
}






