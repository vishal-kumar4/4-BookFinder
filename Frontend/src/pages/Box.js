import React from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


export default function Box(props) {
  return (
    <div className="top-recomm">
        {/* <h2>
          Top recommendations from us</h2> */}
        <div className="grid-photos">
          <button className="grid-item2"><a target={'_blank'}  rel="noreferrer" href={props.abc[0][1]}><img src={props.abc[0][0]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'}  rel="noreferrer" href={props.abc[1][1]}><img src={props.abc[1][0]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'}   rel="noreferrer" href={props.abc[2][1]}><img src={props.abc[2][0]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'}  rel="noreferrer"  href={props.abc[3][1]}><img src={props.abc[3][0]} alt='ss' className='photo_grid' /></a></button>
          {/* <button className="grid-item2">c</button> */}
          {/* <button className="grid-item2">d</button> */}
        </div>
        <div className="grid-photos">
          {/* <button className="grid-item2"><a target={'_blank'} href={props.abc[3][1]}><img src={props.abc[3][0]} alt='ss' className='photo_grid' /></a></button> */}
          <button className="grid-item2"><a target={'_blank'}  rel="noreferrer" href={props.abc[4][1]}><img src={props.abc[4][0]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'}  rel="noreferrer" href={props.abc[5][1]}><img src={props.abc[5][0]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'}  rel="noreferrer" href={props.abc[6][1]}><img src={props.abc[6][0]} alt='ss' className='photo_grid' /></a></button>
          <button className="grid-item2"><a target={'_blank'}  rel="noreferrer" href={props.abc[7][1]}><img src={props.abc[7][0]} alt='ss' className='photo_grid' /></a></button>
          {/* <button className="grid-item2"><a target={'_blank'} href={props.abc[3][1]}><img src={props.abc[3][0]} alt='ss' className='photo_grid' /></a></button> */}
        </div>
        </div>
  );
}