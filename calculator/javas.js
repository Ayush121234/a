let s="";
let query=document.querySelectorAll(".button")
l=[]

Array.from(query).forEach((button)=>{
   
    button.addEventListener('click',(e)=>{
        // s=s+e.target.innerHTML()
        // query1.innerHTML=s
        if(e.target.innerHTML=='='){
            s=eval(s);
            document.querySelector(".number").value=s;
            s=""
        }
        
        else{  
        s=s+e.target.innerHTML;
        document.querySelector(".number").value=s
        }
    })

})