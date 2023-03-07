import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login(props) {

    const navigate = useNavigate()
    // hooks
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    const [email_log, setemail_l] = useState('')
    const [pass_log, setpass_l] = useState('')
    // connecting backend
    const postdata = () => {
        axios.post('http://localhost:8000/post', {
            username,
            email,
            pass
        }).then((res) => {

            if (res.data.status === 'user already exists') {
                window.alert('user already exists')
            }
            else if (res.data.status === 'signup success') {
                window.alert('signup successful')
            }
        })
            .catch((error) => {
                console.log(error)
            });
        // console.log(username);
    }

    const login_post = () => {

        // axios.post('http://localhost:8000/post_log', {
        //     email_log,
        //     pass_log
        // }).then((response) => {
        //     console.log(response)
        // })
        //     .catch((error) => {
        //         console.log(error)
        //     });



        fetch('http://localhost:8000/post_log', {
            method: "POST",
            crossDomain: true,
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email_log,
                pass_log
            }),
        }).then((res) => res.json()).then((data) => {
            console.log(data, 'user data sent')
            if (data.status === 'ok') {
                window.alert('LogIn successful')
                navigate('/')
            }
            else {
                window.alert('inavalid credentials')
            }
        })




        // const data=res.json();

        // if(res.status===400 || !data){
        //     window.alert('invalid credentials');
        // }
        // else{
        //     window.alert('login successful');
        //     navigate('/')
        // }

    }
    let p=window.location.pathname
    // if(window.location.pathname==='/signup'){
    //     document.getElementById("abc").click();
    // }
    if(p==='/login'){
    return (
        <div>
            <br />
            <br />
            <div className="cont">
                <div className="form sign-in">
                    <h2 id='loginpage' style={{ color: "#f5a425" }}>Welcome</h2>

                    <label>
                        <span id='loginpage' className='mail' >Email</span>
                        <input type="email" onChange={(event) => { setemail_l(event.target.value) }} />
                    </label>
                    <label>
                        <span id='loginpage' className='mail'>Password</span>
                        <input type="password" onChange={(event) => { setpass_l(event.target.value) }} />
                    </label>
                    
                    <p className="forgot-pass">Forgot password?</p>
                    <button type="button" className="submit" onClick={login_post}>Sign In</button>

                </div>
                <div className="sub-cont">
                    <div className="img__1">
                        <div className="img__text m--up">

                            <h3 id='loginmsg'>Don't have an account? Please Sign up!</h3>
                        </div>
                        <div className="img__text m--in">

                            <h3 id='loginmsg'>If you already have an account, just sign in.</h3>
                        </div>
                        <div className="img__btn" id='abc' onClick={function () {
                            document.querySelector('.cont').classList.toggle('s--signup');
                        }}>
                            <span className="m--up" id='loginpage'>Sign Up</span>
                            <span className="m--in" id='loginpage'>Sign In</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2 id='loginpage2' style={{ color: "#f5a425" }}>Create your Account</h2>
                        <label>
                            <span id='loginpage2'>  Name</span>
                            <input type="text" name="name" onChange={(event) => { setusername(event.target.value) }} />
                        </label>
                        <label>
                            <span id='loginpage2'>Email</span>
                            <input type="email" name='email' onChange={(event) => { setemail(event.target.value) }} />
                        </label>
                        <label>
                            <span id='loginpage2'>Password</span>
                            <input type="password" name='password' onChange={(event) => { setpass(event.target.value) }} />
                        </label>
                        <button type="button" className="submit" onClick={postdata}>Sign Up</button>

                    </div>
                </div>
            </div>


        
        </div>
    )}
    else if(p==='/signup'){
        
        // const myTimeout = setTimeout(()=>{
        //     console.log(p)
        //     document.getElementsByClassName('img__btn')[0].click()
        //     }, 5000);
            
        return (
            <div>
                <br />
                <br />
                <div className="cont s--signup">
                    <div className="form sign-in">
                        <h2 id='loginpage' style={{ color: "#f5a425" }}>Welcome</h2>
                        <label>
                            <span id='loginpage' className='mail' >Email</span>
                            <input type="email" onChange={(event) => { setemail_l(event.target.value) }} />
                        </label>
                        <label>
                            <span id='loginpage' className='mail'>Password</span>
                            <input type="password" onChange={(event) => { setpass_l(event.target.value) }} />
                        </label>
                        <p className="forgot-pass">Forgot password?</p>
                        <button type="button" className="submit" onClick={login_post}>Sign In</button>
    
                    </div>
                    <div className="sub-cont">
                        <div className="img__1">
                            <div className="img__text m--up">
    
                                <h3 id='loginmsg'>Don't have an account? Please Sign up!</h3>
                            </div>
                            <div className="img__text m--in">
    
                                <h3 id='loginmsg'>If you already have an account, just sign in.</h3>
                            </div>
                            <div className="img__btn"  onClick={function () {
                                document.querySelector('.cont').classList.toggle('s--signup');
                            }}>
                                <span className="m--up" id='loginpage'>Sign Up</span>
                                <span className="m--in" id='loginpage'>Sign In</span>
                            </div>
                        </div>
                        <div className="form sign-up">
                            <h2 id='loginpage2' style={{ color: "#f5a425" }}>Create your Account</h2>
                            <label>
                                <span id='loginpage2'>Name</span>
                                <input type="text" name="name" onChange={(event) => { setusername(event.target.value) }} />
                            </label>
                            <label>
                                <span id='loginpage2'>Email</span>
                                <input type="email" name='email' onChange={(event) => { setemail(event.target.value) }} />
                            </label>
                            <label>
                                <span id='loginpage2'>Password</span>
                                <input type="password" name='password' onChange={(event) => { setpass(event.target.value) }} />
                            </label>
                            <button type="button" className="submit" onClick={postdata}>Sign Up</button>
    
                        </div>
                    </div>
                </div>
    
    
            
            </div>
        )
    }
    
}
