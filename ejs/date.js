module.exports=date;
function date(){
    let date=new Date();
    let options={
        month:"long",
        weekday:"long",
        day:"numeric"
    };
    return date.toLocaleDateString("en-US",options)
}