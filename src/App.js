import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { Routes, Route} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }
  const themeButton=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark Mode Enabled","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Dark Mode Disabled","success")
    }
  }
  return (
   <>
    <Navbar title="Amazing" aboutText="About Us" mode={mode} themeButton={themeButton}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/" element={
        <div className="container my-3">
        <Textform heading="Analyze the text- Word Counter,Character Counter , Uppercase to Lowercase , LowerCase to Uppercase , Text-to-Speech " mode={mode} showAlert={showAlert}/>
      </div>
      }/>
      <Route exact path="/about" element={<About mode={mode}/>}/>
    </Routes>
   </>
  );
}
export default App;