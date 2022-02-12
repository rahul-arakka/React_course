import React, { useState } from "react"; 
// 'useState' is called a 'Hook' in React like 'eventListners' in JS and there are many Hooks present in React, Will study further

export default function Textform(props) {
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
      <>
    <divm className="container">
      <h1>{props.heading}</h1>
      {/* onChange is a handler and is important in react when we uses 'state' variable(here 'text') & we/user gives input to make it able to type in input field */}
      <textarea className="form-control" placeholder="Write Here" value={text} onChange={onChangeHandler} id="Box" rows="7"></textarea>
      <button className="btn btn-success my-3 mx-2" onClick={changeTextUpperCase}>Upper Case</button>
      <button className="btn btn-success my-3 mx-2" onClick={changeTextLowerCase}>Lower Case</button>
    </divm>

    <div className="container">
        <h2>Text Summary</h2>
        <p>{text.length === 0 ? 0 : text.split(" ").length} words and {text.length} Characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
      </>
  );
}
