import React from "react";
function Card(props){
    console.log('sdsd')
    return(
    <div className="card">
        <h5>{props.name}</h5>
        <p>{props.des}</p>
    </div>
    )
}
export default Card;