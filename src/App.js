import React ,{useState} from 'react'
import "./App.css"; // Import/add any file like this
import Navbar from './components/Navbar'
import Textform from "./components/Textform";
// let name = "Rahul";
function App() {

  const [mode, setMode] = useState('light');

  const changeMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0b3866'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* Props can be of anytype which we know in JS like 'string', 'array' ,'object' , etc */}
      <Navbar title="Text App" item = "Home" mode={mode} changemode={changeMode} /> {/*  Here 'title' and 'item' are the props passed to Navbar */}
      <div className="container">
        <Textform heading="Enter text below" mode = {mode}/>
      </div>
    </>
  );
}

export default App;
