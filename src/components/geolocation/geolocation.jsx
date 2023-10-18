import React from 'react'
import Navigator from 'navigator'

const GeoLocation = () => {
    const getLocation = ()=>{
        if(!navigator.geolocation){
            console.log("Location not Supported");
        }
        else{
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log("latitude is", position.coords.latitude);
                console.log("longitude is", position.coords.longitude);
            })
        }
    }
  return (
    <div>
    <button onClick={getLocation}>Get Location</button>
      
    </div>
  )
}

export default GeoLocation
