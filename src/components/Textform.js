import React, { useState } from "react";

export default function textform(props) {
    // All function must be defined/Declared Here above 'return' 
    let changeTextUpperCase = ()=>{
        console.log('Change Text');
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    let changeTextLowerCase = ()=>{
        console.log('Change Text');
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    let onChangeHandler = (event)=>{
        console.log("Clicked OnChange" + text);
        setText(event.target.value);
    }

    const [text, setText] = useState("");
  return (
    <div>
      <h1>{props.heading}</h1>
      <textarea className="form-control" placeholder="Write Here" value={text} onChange={onChangeHandler} id="Box" rows="7"></textarea>
      <button className="btn btn-success my-3 mx-2" onClick={changeTextUpperCase}>Upper Case</button>
      <button className="btn btn-success my-3 mx-2" onClick={changeTextLowerCase}>Lower Case</button>
    </div>
  );
}
