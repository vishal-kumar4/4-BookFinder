
// import React, { useState } from 'react'
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function AdminSearch() {
    const navigate = useNavigate()
    const handleclick=()=>{

        window.alert('uploaded')
        navigate('/search')
        // console.log(username);
    }
    const logout=()=>{

        window.alert('logOut succesfully')
        navigate('/')
        // console.log(username);
    }
    
    return (

        <>
        <div className='containet text-center'>
            <div className="mb-3">
                <label for="formFile" className="form-label">Default file input example</label>
                <input className="form-control" type="file" id="formFile" />
                <button type="button" className="btn btn-success my-3" onClick={handleclick}>Submit</button>
            </div>
        </div>
        <div className="container text-center">
        <button type="button" class="btn btn-success" onClick={logout}>LogOut</button>
        </div>
        </>
    )
}
