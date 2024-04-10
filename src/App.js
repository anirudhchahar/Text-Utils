import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import {useState} from 'react';
import Alert from './components/Alert';
const cors = require('cors');

//import About from './components/About';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

 {/* const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  
  }*/}
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
   // removeBodyClasses();
    //document.body.classList.add('bg-'+ cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'Textutils - Dark Mde';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
      //document.title = 'Textutils - Light Mde';
    }
  }
  return (
    <>
          {/*<Router>*/}
          <Navbar title = "TextUtils"  mode = {mode} togglemode ={toggleMode}/>
          <Alert alert = {alert}/>
          <div className ="container my-3">
            {/*<Switch>
                <Route exact path = "/about">
                  <About mode={mode}/>
                </Route>
  <Route exact path = "/">*/}
                <Textform showAlert={showAlert} heading = " Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode = {mode} />
                {/*</Route>*/}
                   {/*</Switch>*/}
             </div>
            {/*</Router>*/}
    
    </>
  );
}

export default App;
