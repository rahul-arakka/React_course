import React, { useState } from "react";
// 'useState' is called a 'Hook' in React like 'eventListners' in JS and there are many Hooks present in React, Will study further

export default function Textform(props) {
  // All function must be defined/Declared Here above 'return'

  // let themeStyle = {
  //   color: 'white',
  //   backgroundColor: '#0b3866'
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

  // Function to copy Written text to Clipboard
  let handleCopy = () => {
    let txt = document.getElementById("Box");
    txt.select();
    navigator.clipboard.writeText(txt.value);
  };

  // let changeTheme = () => {
  //   console.log("Theme changed");
  //   if (themeStyle.color === "white") {
  //     setStyle({
  //       color: "#0b3866",
  //       backgroundColor: "white",
  //     });
  //     setBtnStyle({
  //       color: "white",
  //       backgroundColor: "#0b3866",
  //     });
  //     setBtnText("Enable Dark Theme");
  //   } else {
  //     setStyle({
  //       color: "white",
  //       backgroundColor: "#0b3866",
  //     });
  //     setBtnStyle({
  //       color: "#0b3866",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Light Theme");
  //   }
  // };

  let onChangeHandler = (event) => {
    console.log("Clicked OnChange" + text);
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // const [btnText, setBtnText] = useState("Enable Light Theme");
  // const [textStyle, setTextStyle] = useState({
  //   color: "#0b3866",
  // });
  // const [btnStyle, setBtnStyle] = useState({
  //   color: "white",
  //   backgroundColor: "#0b3866",
  // });
  // let btnStyle = {color:'blue',backgroundColor:props.mode==='light'?'#0b3866':'white'}
  // const[color, setcolor] = useState({color:"red"})
  
  return (
    <>
      <div className="container my-3" style={{color:props.mode==='light'?'#0b3866':'white'}}>
        <h1>{props.heading}</h1>
        {/* onChange is a handler and is important in react when we uses 'state' variable(here 'text') & we/user gives input to make it able to type in input field or to change to input Text*/}
        <textarea
          className="form-control"
          placeholder="Write Here..."
          value={text}
          onChange={onChangeHandler}
          id="Box"
          style={{color:props.mode==='light'?'#0b3866':'white',backgroundColor:props.mode==='light'?'white':'#0b3866'}}
          rows="7"
        ></textarea>
        <button
          className={`btn btn-${props.mode==='light'?'info':'dark'} my-3 mx-2`}
          onClick={changeTextUpperCase}
        >
          Upper Case
        </button>
        <button
          className={`btn btn-${props.mode==='light'?'info':'dark'} my-3 mx-2`}
          onClick={changeTextLowerCase}
        >
          Lower Case
        </button>
        <button
          className={`btn btn-${props.mode==='light'?'info':'dark'} my-3 mx-2`}
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-${props.mode==='light'?'info':'dark'} my-3 mx-2`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      {/* <div className="container"> */}
        {/* <button
          className="btn btn-primary my-3 mx-2"
          style={btnStyle}
          onClick={changeTheme}
        >
          {btnText}
        </button> */}
      {/* </div> */}

      <div className="container my-3" style={{color:props.mode==='light'?'#0b3866':'white'}}>
        <h2>Text Summary</h2>
        <p >
          {text.length === 0 ? 0 : text.split(" ").length} words and{" "}
          {text.length} Characters
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Write something Above"}</p>
      </div>
    </>
  );
}
