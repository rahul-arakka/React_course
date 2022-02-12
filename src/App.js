// import logo from "./logo.svg";
import "./App.css"; // Import/add any file like this
import Navbar from './components/Navbar'
import Textform from "./components/Textform";
// let name = "Rahul";
function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* Props can be of anytype which we know in JS like 'string', 'array' ,'object' , etc */}
      <Navbar title="Here is title" item = {1} /> {/*  Here 'title' and 'item' are the props passed to Navbar */}
      <div className="container">
        <Textform heading="Enter text below" />
      </div>
    </>
  );
}

export default App;
