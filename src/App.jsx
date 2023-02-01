import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/Home';


import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message, type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }

  return (
    <>
    
        <Router>

          <div className="container">
            <Alert alert={alert} />
            <Route exact path="/home">
              <Home showAlert={showAlert} />
            </Route>
  
            <Route exact path="/">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
          </div>
        </Router>
     
    </>
  );
}

export default App;
