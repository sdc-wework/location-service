const express = require('express');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3002;
const { getNearbyTransitOptions } = require('../db/index');
const app = express();
const axios = require('axios');
require('dotenv').config({ path: path.join(__dirname, '../', '.env')});

app.use(cors());
app.use(express.static(__dirname + '/../public'));
app.use('/buildings/:workspaceId', express.static(path.join(__dirname, '../', 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/getNearbyTransitOptions/:id', async (req, res) => {
  const { id } = req.params;
  const response = await getNearbyTransitOptions(id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(400).send('Unable to find ID');
  }
});

app.get('/api/nearbyworkspaces/buildings/:id', async (req, res) => {
  const { id } = req.params;
  const endpoint = process.env.NEARBY_WORKSPACES + id || `http://localhost:5001/api/nearbyworkspaces/buildings/${id}`;
  try {
    const { data } = await axios.get(endpoint);
    res.status(200).json(data);
  } catch(error) {
    console.log(`Error fetching nearby workspaces: ${error}`);
    res.status(400).send('Unable to retrieve nearby workspaces');
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});