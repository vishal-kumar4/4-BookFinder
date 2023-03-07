
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Loginen() {
  const navigate = useNavigate()
  // hooks
  const [regid, setreg] = useState('')
  const [libname, setlib] = useState('')
//   const [area, setarea] = useState('')
//   const [city, setcity] = useState('')

  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  // const [email_log, setemail_l] = useState('')
  // const [pass_log, setpass_l] = useState('')

  // let bdata = require('./data.json')
// console.log(bdata)
  const post_data = () => {
    axios.post('http://localhost:8000/postliblog', {
        regid,
        libname,
        email,
        pass,
    }).then((res) => {

        if (res.data.status === 'invalid') {
            window.alert('no user')
        }
        else if (res.data.status === 'ok') {
            window.alert('signIn successful')
            console.log(res.data.data)
            navigate(`/authorizedLib/?id=${regid}`)
        }
    })
        .catch((error) => {
            console.log(error)
        });
    // console.log(username);
}


  return (
    <div>
      <br />
      <br />
      <div className="cont">
        <div className="form12 sign-in">
          <h2 id='loginpage' style={{ color: "#f5a425" }}>Welcome</h2>

          <label className='label12'>
            <span id='loginpage' className='mail' >Registration ID</span>
            <input type="text" onChange={(event) => { setreg(event.target.value) }} />
          </label>
          <label className='label13'>
            <span id='loginpage' className='mail' >Library name</span>
            <input type="text" onChange={(event) => { setlib(event.target.value) }} />
          </label>

          <label className='label12'>
            <span id='loginpage' className='mail' >Email</span>
            <input type="email" onChange={(event) => { setemail(event.target.value) }} />
          </label>
          <label className='label13'>
            <span id='loginpage' className='mail'>Password</span>
            <input type="password" onChange={(event) => { setpass(event.target.value) }} />
          </label>
          
          <button type="button" className="submit" onClick={post_data}>Sign In</button>

        </div>

        {/* <div className="sub-cont">
          <div className="img__1">
            <div className="img__text m--up">

              <h3 id='loginmsg'>Library Sign up here!</h3>
            </div>
            
            
          </div>


        </div> */}
      </div>
      </div>
      )

}
