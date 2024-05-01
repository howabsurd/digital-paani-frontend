import React, { useState } from 'react';
import axios from 'axios';
import Card2 from "./Card2";

const Search = () => {
  const [windSpeed, setWindSpeed] = useState(0);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff62f5ac9d4f5bcef5183d4bae6bc52e&units=imperial`
      );
      const { main, wind } = response.data;
      setTemp(main?.temp || 0);
      setWindSpeed(wind?.speed || 0);
      setError('');
    } catch (error) {
      setError('City not found');
      setTemp(0);
      setWindSpeed(0);
    }
  };

  return (
    <div className='max-w-screen-lg my-3 mx-auto'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getWeather();
        }}
      >
        <div className='flex items-center justify-center h-10'>
          <input
            type='text'
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder='Search City for Weather ...'
            className='px-2 h-full text-gray-600  border-2 border-gray-400 rounded-r-2 flex-1 '
          />
          <button type='submit' className='hidden px-4 bg-blue-500 text-white rounded-r-2'>
            Search
          </button>
        </div>
      </form>
      {error && <div className='text-red-500'>{error}</div>}
      {temp !== 0 && windSpeed !== 0 && (
        <div className="flex items-center justify-center gap-4">
          {/* <p>Temperature: {temp}°F</p> */}
          <Card2 title="Temperature" value={temp} unit="°F" />
          <Card2 title="Wind Speed" value={windSpeed} unit="mph" />
        </div>
      )}
    </div>
  );
};

export default Search;










// 'use client'

// import React from 'react'
// import {useState, useEffect} from "react";
// import axios from "axios";

// const Search = () => {

  
  
//   const [windSpeed , setWindSpeed] = useState(0);
//   const [temp, setTemp] = useState(0);
//   const [city, setCity] = useState("");
//   useEffect(()=>{
//     console.log(city);
//     console.log(temp);
//     console.log(windSpeed);
//   },[city])
//   return (
//     <div className='max-w-screen-lg my-3 mx-auto'>
//       <form onSubmit={e=>{e.preventDefault(); const weather = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff62f5ac9d4f5bcef5183d4bae6bc52e&units=imperial` );
//         setTemp(weather?.main?.temp);
//         setWindSpeed(weather?.wind?.speed);
//     }}>
//       <div className="flex items-center justify-center h-10">
//       <input type='text' onChange={(e)=> {setCity(e.target.value )}} placeholder='Search City for Weather ...' className='px-2 h-full text-gray-600  border-2 border-gray-400 rounded-r-2 flex-1 '/>

//        </div>
//        </form>
//     </div>
//   )
// }

// export default Search