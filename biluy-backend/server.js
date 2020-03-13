const express = require("express");
const app = express();
const cors = require("cors");
const { getData, getPlaceDetails } = require("./utils/dataUtils");

app.use(cors());

app.get("/", async (req, res) => {
  const { query } = req || {};
  const { search } = query || {};
  console.log(query);
  const response = await getData(search);
  res.send(response);
});

app.get("/details", async (req, res) => {
  const { query } = req || {};
  const { placeid } = query || {};

  const response = await getPlaceDetails(placeid);
  res.send(response);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
