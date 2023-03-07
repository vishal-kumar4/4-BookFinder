// import React from 'react'
import React, { useState } from 'react'
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import '../App.css'
// import img from '../images/boookicon.png'

// import { set } from 'mongoose';


export default function AuthirizedLib() {
    // const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [bname, setname] = useState('')
    // const [x, setx] = useState(`<div>hola</div>`)
    const [authname, setauth] = useState('')
    const [city, setcity] = useState('')
    const handlesearch = () => {
        if (bname === '' && city === "") {
            axios.post('http://localhost:8000/sbyauth', {
                authname
            }).then((res) => {

                if (res.data.status === 'no data found') {
                    window.alert('no data')
                }
                else if (res.data.status === 'success') {
                    window.alert('successful')
                    console.log(res.data.data)
                    setData(res.data.data)
                    // document.write(res.data.data)
                    // setx(res.data.data)
                    var html = "<table border='1|1'>";
                    html += "<th>" + "Library name" + "</th>"
                    html += "<th>" + "Library Location" + "</th>"
                    html += "<th>" + "Book Name" + "</th>"
                    html += "<th>" + "Author Name" + "</th>"
                    html += "<th>" + "Copies" + "</th>"
                    html += "<tr>"
                    var rows = res.data.data
                    console.log(rows)
                    for (var i = 0; i < rows.length; i++) {

                        // console.log()
                        // document.write(html+="<td>"+rows[i].author ,rows[i].libname,rows[i].bookname,rows[i].area+ "</td>")
                        html += "<td>" + rows[i].libname + "</td>"
                        html += "<td>" + rows[i].area + "</td>"
                        html += "<td>" + rows[i].bookname + "</td>"
                        html += "<td>" + rows[i].author + "</td>"
                        html += "<td>" + rows[i].copies + "</td>"
                        html += "<tr>"

                        // html
                    }
                    // let ab=document.getElementsByTagName('table');
                    // ab.removeChild(ab.lastElementChild)

                    document.getElementById('ab').innerHTML = html
                    // console.log(html)
                    // document.write(res.data.data)
                    // var x=JSON.parse(res.data.data)
                    // document.write(x)
                    // var arr=[]
                    // for(var i in x){
                    //     arr.push(x[i])
                    // }
                    // document.write(arr[0])

                    // navigate('/authorizedLib')
                }
            })
                .catch((error) => {
                    console.log(error)
                });
        }
        else if (authname === '' && city === "") {
            axios.post('http://localhost:8000/sbybname', {
                bname
            }).then((res) => {

                if (res.data.status === 'no data found') {
                    window.alert('no data')
                }
                else if (res.data.status === 'success') {
                    window.alert('successful')
                    console.log(res.data.data)
                    setData(res.data.data)
                    // document.write(res.data.data)
                    // setx(res.data.data)
                    var html = "<table border='1|1'>";
                    html += "<th>" + "Library name" + "</th>"
                    html += "<th>" + "Library Location" + "</th>"
                    html += "<th>" + "Book Name" + "</th>"
                    html += "<th>" + "Author Name" + "</th>"
                    html += "<th>" + "Copies" + "</th>"
                    html += "<tr>"
                    var rows = res.data.data
                    console.log(rows)
                    for (var i = 0; i < rows.length; i++) {

                        // console.log()
                        // document.write(html+="<td>"+rows[i].author ,rows[i].libname,rows[i].bookname,rows[i].area+ "</td>")
                        html += "<td>" + rows[i].libname + "</td>"
                        html += "<td>" + rows[i].area + "</td>"
                        html += "<td>" + rows[i].bookname + "</td>"
                        html += "<td>" + rows[i].author + "</td>"
                        html += "<td>" + rows[i].copies + "</td>"
                        html += "<tr>"

                        // html
                    }
                    // let ab=document.getElementsByTagName('table');
                    // ab.removeChild(ab.lastElementChild)

                    document.getElementById('ab').innerHTML = html
                    // console.log(html)
                    // document.write(res.data.data)
                    // var x=JSON.parse(res.data.data)
                    // document.write(x)
                    // var arr=[]
                    // for(var i in x){
                    //     arr.push(x[i])
                    // }
                    // document.write(arr[0])

                    // navigate('/authorizedLib')
                }
            })
                .catch((error) => {
                    console.log(error)
                });
        }
        else if (authname === '' && bname === "") {
            axios.post('http://localhost:8000/sbycity', {
                city
            }).then((res) => {

                if (res.data.status === 'no data found') {
                    window.alert('no data')
                }
                else if (res.data.status === 'success') {
                    window.alert('successful')
                    console.log(res.data.data)
                    setData(res.data.data)
                    // document.write(res.data.data)
                    // setx(res.data.data)
                    var html = "<table border='1|1'>";
                    html += "<th>" + "Library name" + "</th>"
                    html += "<th>" + "Library Location" + "</th>"
                    html += "<th>" + "Book Name" + "</th>"
                    html += "<th>" + "Author Name" + "</th>"
                    html += "<th>" + "Copies" + "</th>"
                    html += "<tr>"
                    var rows = res.data.data
                    console.log(rows)
                    for (var i = 0; i < rows.length; i++) {

                        // console.log()
                        // document.write(html+="<td>"+rows[i].author ,rows[i].libname,rows[i].bookname,rows[i].area+ "</td>")
                        html += "<td>" + rows[i].libname + "</td>"
                        html += "<td>" + rows[i].area + "</td>"
                        html += "<td>" + rows[i].bookname + "</td>"
                        html += "<td>" + rows[i].author + "</td>"
                        html += "<td>" + rows[i].copies + "</td>"
                        html += "<tr>"

                        // html
                    }
                    // let ab=document.getElementsByTagName('table');
                    // ab.removeChild(ab.lastElementChild)

                    document.getElementById('ab').innerHTML = html
                    // console.log(html)
                    // document.write(res.data.data)
                    // var x=JSON.parse(res.data.data)
                    // document.write(x)
                    // var arr=[]
                    // for(var i in x){
                    //     arr.push(x[i])
                    // }
                    // document.write(arr[0])

                    // navigate('/authorizedLib')
                }
            })
                .catch((error) => {
                    console.log(error)
                });
        }
    }
    return (
        
        <div>
            <div className='container'>

                <label className='label12'>
                    <span id='loginpage' className='mail' >Book name</span>
                    <input type="text" onChange={(event) => { setname(event.target.value) }} />
                </label>
                <label className='label13'>
                    <span id='loginpage' className='mail' >Author name</span>
                    <input type="text" onChange={(event) => { setauth(event.target.value) }} />
                </label>
                <label className='label12'>
                    <span id='loginpage' className='mail' >Area</span>
                    <input type="text" onChange={(event) => { setcity(event.target.value) }} />
                </label>
                <button type="button" className="submit" onClick={handlesearch} >search</button>
            </div>

            <div className="dataStock" style={{width:"100%",height:"20%"}}>
            <p id='ab'></p>
            </div>
        </div>
    )
}
