// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null)
  const showAlert=(message,type)=>{
    
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#212529'
    document.body.style.color='white'
    showAlert("Dark Mode has been enable","success")
    // document.title='text light'
  }
    else{
    setMode('light');
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
    showAlert("Light Mode has been enable","success")
    // document.title='text dark'
  }
  }
  return (
    <>
     {/* <Alert alert={alert}/> */}
     {/* <Router> */}
  <Navbar navbar="Word Counter" mode={mode}  toggleMode={toggleMode}/>
   <Alert alert={alert}/>
  <div className='container'>
    {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}/> */}
      
          {/* <Route exact path="/" element ={ */}
          < Textform className="text" showAlert={showAlert}  mode={mode} heading="Enter your text"/>
    {/* </Routes> */}
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
