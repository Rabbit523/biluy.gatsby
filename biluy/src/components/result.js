import React, { useState } from "react"
import { getPlaceDetails, fetchData } from "../utils/utils"

const { getPhotoFromReference, getMapsSearchUrl } = require("../utils/utils")

const whiteDivClass =
  "white-div h-12 w-12 rounded-full mx-3 flex justify-center items-center text-2xl"

const Result = props => {
  const {city, info} = props || {};
  const [data, setData] = useState(info);
  console.log(data);
  const number = Math.floor(Math.random() * (data.length));
  console.log(number);
  const [searchAt, setSearchAt] = useState(number)
  const [website, setWebsite] = useState("")
  const [phone, setPhone] = useState(0)
  
  const { name, photos, opening_hours, vicinity, geometry, place_id, types } =
    (searchAt < data.length ? data[searchAt] : data[data.length-1]) || {}
  const { location } = geometry || {}
  const { lat, lng } = location || {}
  const { open_now } = opening_hours || {}
  const [firstPhoto] = photos || []
  const { photo_reference } = firstPhoto || {}
  
  const setDataUpdate = ( data ) => {
    setData(data);
    const number = Math.floor(Math.random() * (data.length));
    setSearchAt(number);
  }

  getPlaceDetails(place_id).then(res => {
    const { formatted_phone_number, website } = res || {}
    setWebsite(website)
    setPhone(formatted_phone_number)
  })

  return data.length > 0 ? (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mb-3">
        <img
          alt=""
          className="image-sizing border-4 rounded-lg"
          src={getPhotoFromReference(photo_reference, 300, 300)}
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-2xl px-5 text-center">{name}</p>
        <div className="flex">
          <a target="_blank" rel="noopener noreferrer" href={website}>
            <span className={whiteDivClass} role="img" aria-label="globe">
              🌐
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={getMapsSearchUrl(lat, lng, place_id)}
          >
            <span className={whiteDivClass} role="img" aria-label="map">
              🗺
            </span>
          </a>
          <a href={`tel:${phone}`}>
            <span className={whiteDivClass} role="img" aria-label="phone">
              📱
            </span>
          </a>
        </div>

        <div className="flex flex-col mt-5">
          <div className="flex mb-2 items-center">
            <div className={whiteDivClass}>
              {types[0]==='restaurant'?
                <span role="img" aria-label="marker" className="location-type">&#x1F37D;</span>:
              types[0]==='bar'?
              <span role="img" aria-label="marker" className="location-type">&#x1F37A;</span>:
              types[0]==='amusement_park'?
              <span role="img" aria-label="marker" className="location-type">&#x1F37A;</span>:
              types[0]==='bakery'?
              <span role="img" aria-label="marker" className="location-type">&#x1F9C1;</span>:
              types[0]==='bowling_alley'?
              <span role="img" aria-label="marker" className="location-type">&#x1F3B3;</span>:
              types[0]==='movie_theater'?
              <span role="img" aria-label="marker" className="location-type">&#x1F4FD;</span>:
              types[0]==='night_club'?
              <span role="img" aria-label="marker" className="location-type">&#x1F37E;</span>:
              types[0]==='casino'?
              <span role="img" aria-label="marker" className="location-type">&#x1F3B0;</span>:
              types[0]==='spa'?
              <span role="img" aria-label="marker" className="location-type">&#x1F485;</span>:
              types[0]==='zoo'?
              <span role="img" aria-label="marker" className="location-type">&#x1F427;</span>:
              types[0]==='museum'?
              <span role="img" aria-label="marker" className="location-type">&#x1F5BC;</span>:
              types[0]==='aquarium'?
              <span role="img" aria-label="marker" className="location-type">&#x1F420;</span>:
              types[0]==='cafe'?
              <span role="img" aria-label="marker" className="location-type">☕</span>:
              types[0]==='shopping_mall'?
              <span role="img" aria-label="marker" className="location-type">&#x1F6CD;</span>:''}
            </div>
            <span className="max-w-xxs">
              {types[0]==='amusement_park'?'Amusement Park':types[0]==='shopping_mall'?'Shopping Mall':types[0]==='night_club'?'Night Club':types[0]==='movie_theater'?'Movie Theater':types[0]==='bowling_alley'?'Bowling':types[0]}
            </span>
          </div>
          <div className="flex mb-2 items-center">
            <div className={whiteDivClass}>
              <span role="img" aria-label="marker">
                📍
              </span>
            </div>
            <span className="max-w-xxs">{vicinity}</span>
          </div>
          <div className="flex items-center">
            <span className={whiteDivClass} role="img" aria-label="globe">
              ⌚
            </span>
            <span>{open_now ? "Open now" : "Not open"}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => fetchData(city).then(res => {  
            const { data } = res || {}
            setDataUpdate(data)
          })}
          className="flex justify-center items-center m-5 hover:bg-white border-white hover:text-red-500 p-5 border-8 rounded-xl font-bold text-2xl w-64"
        >
          Spin Again
        </button>
      </div>
    </div>
  ) : (
    <p className="text-center text-lg py-8 md:max-w-xl">
      No more hits in this city!
      <a
        href="/"
        className="flex justify-center items-center m-5 hover:bg-white border-white hover:text-red-500 p-5 border-8 rounded-xl font-bold text-2xl"
      >
        Search another city
      </a>
    </p>
  )
}

export default Result
