import React, { useState } from "react";
import "./App.css"; // Import/add any file like this
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Footer from "./components/Footer";
import {Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b3866";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <div className="container">
        <Textform heading="Enter text below" mode = {mode}/>
      </div> */}
      {/* <Navbar
        title="Text App"
        item="Home"
        mode={mode}
        changemode={changeMode}
      /> */}
      <Navbar title="Text App" item="Home" mode={mode} changemode={changeMode} />
      <Routes>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/" element={<Textform heading="Enter text below" mode={mode} />}></Route>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
