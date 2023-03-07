// import React from 'react'
// import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
// // import { useEffect } from 'react';

// export default function Library() {
//   const center={ lat: 17.366551652855097,lng: 78.42867136001587}
//   const {isLoaded}=useJsApiLoader({
//     googleMapsApiKey: 'AIzaSyCFfoaKpFP1qPgjo3bFvyLyso4NzlZPBvM' })
//     if(!isLoaded){
//       return     <div className='maincontainer'>
//       <div className="spinner-grow text-success" role="status" id='spinner'></div>
//       </div>
//     }
//   return (
//     <div className='maincontainer'>
//       <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%',height:'100%' ,borderRadius:'19px'}}>
//       </GoogleMap >

//       </div>
//   )
// }
import React from 'react'
import {GoogleMap,Marker,useJsApiLoader} from '@react-google-maps/api'
import customMarker from './CustomMarker.jpg'

const Library=(props)=>{
     const {isLoaded}=useJsApiLoader({
     googleMapsApiKey: 'AIzaSyCFfoaKpFP1qPgjo3bFvyLyso4NzlZPBvM' })
  // const containerStyle={
  //   width:"90vw",
  //   height:"90vh",
  // };
  const center ={
    lat:17.44385, lng:78.41
  };
  // const anotherMarker={
  //   lat:7.31,
  //   lng:78.49,
  // };
  const markers=[
    // {
    //   name:"location-1",
    //   location:{
    //     lat:17.438987,
    //     lng:78.356247,
    //   },
    // },
    {
      name:"location-1",
      location:{
        lat:17.403594,
        lng:78.398923
      },
    },
    {
      name:"location-1",
      location:{
        lat:17.438987,lng: 78.356247
      },
    },
    {
      name:"location-1",
      location:{
        lat:17.426736, lng:78.371621
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.429387,lng: 78.409901
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.437775, lng:78.425467
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.437775, lng:78.425467
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.425098, lng:78.364038
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.430046, lng:78.428431
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.443250, lng:78.444814
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.468695,lng: 78.376456
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.399781,lng: 78.414104
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.399781,lng: 78.414104
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.436956, lng:78.440706
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.413888, lng:78.421532
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.436656,lng: 78.445672
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.541439, lng:78.385705
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.431827,lng: 78.446482
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.484526,lng: 78.414538
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.437775,lng: 78.425467
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.436241, lng:78.445164
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.440393,lng: 78.454197
    },
    },
    {
      name:"location-1",
      location:{
        lat:17.430046,lng: 78.428431
      },
    },
    {
      name:"location-1",
      location:{
        lat:17.453433, lng:78.444767
      },
    },
    {
      name:"location-1",
      location:{
        lat:17.429387,lng: 78.409901
      },
    },

  ];
  return(
    
    isLoaded && (
      <div className='maincontainer'>
      <GoogleMap center={center} zoom={13.4} mapContainerStyle={{width:'100%',height:'100%'}}>
        document.title("maps")
        {markers.map((marker)=>{
          return (
            <div key={markers.name}>
              <Marker position={marker.location} options={{icons:customMarker}}/>
            </div>
          )
        })}
      </GoogleMap>
      </div>
    )
  )

};
export default Library;