import React from 'react'

import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { TextField, Button } from "@mui/material";
import {  VisibilityOff } from "@mui/icons-material";

import { Box, Stack } from '@mui/system';

const Login = (props) => {
    useEffect(() => {
        if (localStorage.getItem("token")) {
            history.push('/home')
        }
        else {
            history.push("/")
        }

        // eslint-disable-next-line
    }, [])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password })
        });

        const json = await response.json();

        if (json.success) {
            localStorage.setItem("token", json.authToken)
            localStorage.setItem("name", json.name)

            props.showAlert("Signed In Successfully", "success")
            history.push("/home")
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }

        console.log(json)
    }



    return (
        <div style={{ marginTop: "12px" }}>
            <div style={{ display: 'flex', justifyContent: 'center',flexDirection:'column' }} >
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div  style={{ width: 400, height: '75vh', backgroundColor: '#fff', marginTop: '1%' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '40%', height: '70%', backgroundColor: '#f2f2f2', borderRadius: '50%', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            <div >
                                <img style={{ padding: 12 }} src='/user.png' />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "-12px", }}>
                        <div style={{ fontWeight: 800, fontSize: 40 }}>
                            Welcome!
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{ fontWeight: 400, fontSize: 17, }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>Lets connect to your workspace</div>
                            <div style={{ leftpadding: '-10%' }}>please enter your credentials to continue</div>
                        </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <TextField onChange={(event) => setEmail(event.target.value)} value={email} fullWidth placeholder="Email Address"></TextField>
                    </div>

                    <div style={{ position: 'relative', marginTop: '10px', }}>
                        <TextField type="password" onChange={(event) => setPassword(event.target.value)} value={password} fullWidth placeholder="Password"></TextField>
                        <div style={{ position: 'absolute', left: '90%', top: '22%' }}>
                            <VisibilityOff />
                        </div>
                    </div>
                    <div style={{  fontSize: 19, color: '#3c40c6',textAlign:'right' }}>
                        Forgot Password?
                    </div>
                    <div style={{ position: 'relative', marginTop: '10px', }}>
                        <Button onClick={handleSubmit}
                            fullWidth variant="contained">SignIn</Button>
                    </div>

                    <div style={{ marginLeft: '80%', fontSize: 19, color: '#3c40c6' }}>
                        <Link to="/signup" >Sign Up</Link>

                    </div>

                </div>
            </div>
                <div style={{textAlign:'center',marginTop:10}}>
                 <Stack sx={{ display: "flex", justifyContent: "space-between" }} direction={{ xs: "column", sm: "column", md: "row" }}>
                    <Box
                    // style={{ position: 'absolute', left: '10%', top: '90%' }}
                    >
                        <span style={{ color: '#7f8c8d', fontSize: 20 }}>powerd by</span>
                        <span style={{ marginLeft: 5 }}><img src='/logo.png' width={90} /></span>
                    </Box>

                    <Box style={{marginTop:5}}>
                        <span>Need Help?</span>
                        <span>
                            <span style={{ marginLeft: 30 }}>Privacy Policy </span><span style={{ color: '#7f8c8d', }}> & </span><span>Terms</span>
                        </span>
                    </Box>
                </Stack>
                </div>


            </div>
        </div>
    )
}

export default Login
