const axios = require("axios")
const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/"
// const BACKEND_URL = process.env.GATSBY_BACKEND
const BACKEND_URL = "https://biluyreal.appspot.com/"
const API_KEY = "AIzaSyBzWoPJtPqU-NkGA4trcjSIFlP_eywEExM"
// const API_KEY = process.env.GATSBY_GEO_CODE
const GOOGLE_MAPS_URL = "https://www.google.com/maps/"

function getPhotoFromReference(ref, height, width) {
  return `${GOOGLE_API_URL}place/photo?photoreference=${ref}&sensor=false&maxheight=${height}&maxwidth=${width}&key=${API_KEY}`
}

function getMapsSearchUrl(lat, lng, placeid) {
  return `${GOOGLE_MAPS_URL}search/?api=1&query=${lat},${lng}&query_place_id=${placeid}`
}

function fetchData(text) {
  return axios({
    method: "get",
    url: `${BACKEND_URL}?search=${text}`,
    headers: { "Access-Control-Allow-Origin": "*" },
  })
}

function getPlaceDetails(placeid) {
  return axios({
    method: "get",
    url: `${BACKEND_URL}details?placeid=${placeid}`,
  }).then(res => {
    const { data } = res || {}
    const { result } = data || {}
    return result
  })
}

module.exports = {
  getPhotoFromReference,
  getMapsSearchUrl,
  fetchData,
  getPlaceDetails,
}
