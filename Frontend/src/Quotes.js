import React from 'react'
import know from './images/knowledge.png'


export default function Quotes(props) {
  return (
    <div >
        <p className='qots'> <img src={know} alt="/" className='know'/>  {props.texts}</p>
    </div>
  )
}