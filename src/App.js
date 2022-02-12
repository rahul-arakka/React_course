// import logo from "./logo.svg";
import "./App.css"; // Import/add any file like this
import Navbar from './components/Navbar'
// let name = "Rahul";
function App() {
  return (
    <>
     {/* <Navbar/> */}
     <Navbar title="Here is title" item = {1} /> {/* Here 'title' and 'item' are the props passed to Navbar */}
    </>
  );
}

export default App;
