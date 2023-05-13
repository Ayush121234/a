import React from "react";

export default function Textform() {


  return (
    <div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
         
          style="height: 100px"
        ></textarea>
        <label >Comments</label>
        
      </div>
    </div>
  );
}
