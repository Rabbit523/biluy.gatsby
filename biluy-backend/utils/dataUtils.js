const axios = require("axios");
const GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/";
const RADIUS = "1500";
// const API_KEY = process.env.API_CODE;
const API_KEY = "AIzaSyBzWoPJtPqU-NkGA4trcjSIFlP_eywEExM"
const types = ["bar", "night_club", "bowling_alley", "restaurant", "bakery", "movie_theater", "casino", "spa", "zoo", "aquarium", "museum", "cafe", "shopping_mall", "amusement_park"];
const DETAIL_FIELDS = "website,formatted_phone_number";

function getPlaces(lat, lng) {
  const number = Math.floor(Math.random() * types.length);
  return axios({
    method: "get",
    url: `${GOOGLE_API_URL}place/nearbysearch/json?location=${lat},${lng}&radius=${RADIUS}&type=${types[number]}&opennow=true&key=${API_KEY}`,
    headers: { "Access-Control-Allow-Origin": "*" }
  }).then(res => {
    const { data } = res || {};
    const { results } = data || {};
    console.log(results);
    if (results.length > 0) {
      results.map((item) => {
        item.types = [];
        item.types.push(types[number]);
      });
      return results.sort(() => Math.random() - 0.5);
    } else {
      return getPlaces(lat, lng);
    }
  });
}

function getData(text) {
  return axios
    .get(
      `${GOOGLE_API_URL}geocode/json?address=${encodeURI(text)}&key=${API_KEY}`
    )
    .then(res => {
      const { data } = res || {};
      const { results } = data || {};
      const [firstHit] = results || [];
      const { geometry } = firstHit || {};
      const { location } = geometry || {};
      const { lat, lng } = location || {};
      return getPlaces(lat, lng);
    });
}

function getPlaceDetails(placeId) {
  return axios
    .get(
      `${GOOGLE_API_URL}place/details/json?place_id=${placeId}&fields=${DETAIL_FIELDS}&key=${API_KEY}`
    )
    .then(res => {
      const { data } = res || {};
      return data;
    });
}

module.exports = {
  getData,
  getPlaceDetails
};
