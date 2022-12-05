import React,{useState} from 'react'
//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode,setMode] = useState('light');
  const[btnText,setBtnText] = useState("Enable dark mode");
  const[alert,setAlert] = useState(null);

  const handleAlert = (message,type)=>
  {
      setAlert({
        msg : message,
        type : type
      });

      setTimeout(()=>{setAlert(null)},1500);
  }

  const toggleState = ()=>
  {
    if(mode === "light")
    {
      setMode("dark");
      setBtnText("Disable dark mode");
      document.body.style.backgroundColor = "#000733db";
      handleAlert("Dark mode is enabled.","Success");
    }
    else
    {
      setMode("light");
      setBtnText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode is enabled.","Success");
    }
  }

  return (
    <>
    
      <Navbar title = "TextUtils" aboutText = "About us" mode = {mode} toggleState = {toggleState} btnText = {btnText}/>
      {/* <div className='container my-3'><About/></div> */}
      <Alert alert = {alert}/>
      <div className = "container my-3">
        <TextForm heading = "Enter the text to analyze" mode = {mode} handleAlert = {handleAlert}/>
      </div>
    </>
  );
}

export default App;
