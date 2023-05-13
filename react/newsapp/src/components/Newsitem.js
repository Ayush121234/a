import React, { Component } from "react";
import { useState } from "react";

export default class Newsitem extends Component {
 
  render(props) {
    // const [content,contents]=useState("elo")   
    let {title,date, description,more,url} = this.props;

    // const contentmore=()=>{
    //     contents(description)
    // }

    return (
     
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title!=null?title.slice(0,30)+"...":"no"}</h5>
            <p className="card-text">{date===null?"no":date.slice(0,10)}</p>
            <p className="card-text">{description===null?"no":description.slice(0,88)+"..."}</p>
            <a href={more} className="btn btn-primary" target="_blank" >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
