import React, { useEffect } from 'react'
import axios from 'axios';


const Maps = () => {
    const options = {
      method: 'GET',
      url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
      params: {latlng: '40.714224,-73.96145', language: 'en'},
      headers: {
        'X-RapidAPI-Key': 'd798c3179bmsh9997ed7bc820555p155127jsn8894aaac7419',
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    




useEffect(()=>{Maps()},[])



return (
    <div>
      <button onClick={Maps}>Maps</button>
    </div>
    )
}

export default Maps
