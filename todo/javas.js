let button=document.querySelectorAll(".button")
let s=document.querySelector(".search")
let b=document.getElementsByClassName("bu")
let number=0;

console.log(s.value);
Array.from(button).forEach(bu=>{
    
    bu.addEventListener("click",(e)=>{
        number+=1;
        var myDiv = document.getElementById("add1");
       let div=document.createElement("div")
       let span=document.createElement("span")
       
       var newText = document.createTextNode(s.value)
       span.appendChild(newText)
       let p=document.createElement("button")
       p.className="bu";
       var newText1 = document.createTextNode("x")
       div.appendChild(span);
       p.appendChild(newText1)
       div.appendChild(p);
       myDiv.appendChild(div)
       s.value="";
    Array.from(b).forEach(bt=>{
        bt.addEventListener("click",(e)=>{
         let parent=e.target.parentNode;
         parent.remove();
         
    })
})

       
       

       

})
})

