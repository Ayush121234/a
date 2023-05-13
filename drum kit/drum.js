var d=document.querySelectorAll("button");
d.forEach(element => {
    element.addEventListener("click",(e)=>{
       var a=e.target;
       if(a.innerHTML=="w"){
        var audio=new Audio("crash.mp3").play();
       }
       else if(a.innerHTML=="a"){
        var audio=new Audio("kick-bass.mp3").play();

       }
       else if(a.innerHTML=="s"){
        var audio=new Audio("tom-1.mp3").play();

       }
       else if(a.innerHTML=='d'){
        var audio=new Audio("tom-2.mp3").play();

       }
       else if(a.innerHTML=="f"){
        var audio=new Audio("tom-3.mp3").play();

       }
       else{
        var audio=new Audio("tom-4.mp3").play();

       }
    })
})
d.forEach(element => {
    element.addEventListener("keypress",(e)=>{
        
    if(e.key=="w"){
     
         var audio=new Audio("crash.mp3").play();
       
    }
        else if(e.key=="a"){
         var audio=new Audio("kick-bass.mp3").play();
 
        }
        else if(e.key=="s"){
         var audio=new Audio("tom-1.mp3").play();
 
        }
        else if(e.key=="d"){
         var audio=new Audio("tom-2.mp3").play();
 
        }
        else if(e.key=="f"){
         var audio=new Audio("tom-3.mp3").play();
 
        }
        else{
         var audio=new Audio("tom-4.mp3").play();
 
        }
     })
})
