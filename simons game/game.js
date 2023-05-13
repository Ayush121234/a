let arr=[];
function push(){
    var a=Math.floor(Math.random()*5)
    
    if(a==0){
        push();
    }
    else{
    arr.push(a);
    
    arr.forEach(element => {
        console.log(element);
    });
    count=count+1;
    }
}

function clear(){
    arr.pop();
}
function check(arr,number,position){
    if(arr[position]==number){
        count1=count1+1;
        
        if(count1==arr.length){
            console.log("break")
            count1=0;
            level=level+1;
            $('h1').text("Level "+level);
    
            push();
        }
    }
    else{
        $('h1').text("Game Over Press any key to restart");
        arr=[];
        console.log(arr.at(0))
        count=0;
        count1=0;
        level=1;
    }
}
let level=1;
let count=0;
let count1=0;

$("body").keypress(function(e){
    console.log("hello")
    $('h1').text("Level 1");

    push();
})

$("button").on("click",e=>{
    
    console.log(e.target.innerText)
    check(arr,e.target.innerText,count1)
})