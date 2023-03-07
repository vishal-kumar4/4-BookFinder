import libicon from '../images/libicon.png'
import recomm from '../images/recommended.png'
import rand from '../images/random.png'
import React from 'react'
import { Link } from 'react-router-dom'


export default function mainpage() {
  return (
    <div>
      <p className='warnspn'>If you decided that u have to <strong>read a book</strong> then go head...</p>
      <div className="maincont1">
            <div className="sub-div">
              <img src={libicon} alt="/" className='sub-div-img'/>
              <h3 className='btm'><strong>Library</strong></h3>
              <p className='div-btm'>If u want to know about your nearby libraries 🙃 </p>
              <button className="btn btn-dark" id='btns'><strong> <Link to="/lib">Click here</Link></strong></button>
            </div>



            <div className="sub-div">
              <img src={recomm} alt="/" className='sub-div-img'/>
              <h3 className='btm'><strong>Recommendations</strong></h3>
              <p className='div-btm'>If u would like to try our recommended masterpeices 😉</p>s
              <button className="btn btn-dark" id='btns'><strong><Link to="/rec">Click here</Link></strong></button>
            </div>



            <div className="sub-div">
              <img src={rand} alt="/"  className='sub-div-img'/>
              <h3 className='btm'><strong>Find Yor book</strong></h3>
              <p className='div-btm'>Get to know about the avalibility of the books from your nearby libraries.</p>
              <button className="btn btn-dark " id='btns'><strong><Link to="/search">Click here</Link></strong></button>
            </div>
      </div>
    </div>
  )
}
