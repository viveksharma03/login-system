import React from 'react'

import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const [authState, setAuthState] = useState(false)
  var history = useHistory();


  const checkAuth = async () => {

    const response = await fetch("http://localhost:3001/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();

    
    if (json.status) {
      setAuthState(true)
    }
    else {
      setAuthState(false)
      
     
    }

  }


  useEffect(() => {
    checkAuth()

    // eslint-disable-next-line
  }, [1000])


  const name = localStorage.getItem("name")
 

  return (
    <div>
      
      {authState ? <><Navbar />
      
        <div>Welcome, {name}</div>
        <div className="container my-4" style={{ marginTop: "60px" }}>
          {/*<Notes showAlert={showAlert} />*/}
        </div>
      </> : <>You are not authenticated user</>}
    </div>
  )
}

export default Home
