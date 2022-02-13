import React, { useState } from "react";
// 'useState' is called a 'Hook' in React like 'eventListners' in JS and there are many Hooks present in React, Will study further

export default function Textform(props) {
  // All function must be defined/Declared Here above 'return'

  // let themeStyle = {
  //   color: 'white',
  //   backgroundColor: 'black'
  // }

  let changeTextUpperCase = () => {
    console.log("Change Text");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  let changeTextLowerCase = () => {
    console.log("Change Text");
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  let clearText = () => {
    let newtext = "";
    setText(newtext);
  };

  let changeTheme = ()=>{
    console.log('Theme changed');
    if(themeStyle.color === 'white'){
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Enable Dark Theme");
    }else{
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Light Theme");
    }
  }

  let onChangeHandler = (event) => {
    console.log("Clicked OnChange" + text);
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Enable Light Theme");
  const [themeStyle, setStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const [btnStyle, setBtnStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  // const[color, setcolor] = useState({color:"red"})
  return (
    <>
      <div className="container my-3" style={themeStyle}>
        <h1>{props.heading}</h1>
        {/* onChange is a handler and is important in react when we uses 'state' variable(here 'text') & we/user gives input to make it able to type in input field */}
        <textarea
          className="form-control"
          placeholder="Write Here"
          value={text}
          onChange={onChangeHandler}
          id="Box"
          rows="7"
        ></textarea>
        <button
          className="btn btn-warning my-3 mx-2" style={btnStyle}
          onClick={changeTextUpperCase}
        >
          Upper Case
        </button>
        <button
          className="btn btn-warning my-3 mx-2" style={btnStyle}
          onClick={changeTextLowerCase}
        >
          Lower Case
        </button>
        <button className="btn btn-warning my-3 mx-2" style={btnStyle} onClick={clearText}>
          Clear Text
        </button>
      </div><div className="container">

        <button className="btn btn-primary my-3 mx-2" style={btnStyle} onClick={changeTheme}>
          {btnText}
        </button>
      </div>

      <div className="container my-3" >
        <h2>Text Summary</h2>
        <p style={themeStyle}>
          {text.length === 0 ? 0 : text.split(" ").length} words and{" "}
          {text.length} Characters
        </p>
        <h3>Preview</h3>
        <p style={themeStyle}>{text}</p>
      </div>
    </>
  );
}
