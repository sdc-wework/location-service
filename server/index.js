const express = require('express');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3002;
const { getNearbyTransitOptions, addNearbyTransitOptions, updateNearbyTransitOptions, deleteNearbyTransitOptions } = require('../db/index');
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

app.post('/api/updateNearbyTransitOptions/:id', async (req, res) => {
  const {add, update, del} = req.query;
  const {id} = req.params;
  let response;

  if(add==='1'){
    response = await addNearbyTransitOptions(req.body);
  }else if(update==='1'){
    response = await updateNearbyTransitOptions(id, req.body);
  }else if(del==='1'){
    response = await deleteNearbyTransitOptions(id);
  }else{
    res.status(400).send('No query parameters to change data');
  }

  //figure out how to return a response for success on post
  if (response) {
    res.status(200).send('Success');
  } else {
    res.status(500).send('Error in adding new entry');
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

// Nearby workspaces is from a different service
app.post('/api/updateNearbyworkspaces/buildings/:id', async (req, res) => {
  const {add, update, del} = req.query.params;
  const {id} = req.params;
  let response;

  // No DB functions – debating on seeding nearby workspaces
  // if(add==='1'){
  //   response = await addNearbyWorkspaces(req.body);
  // }else if(update==='1'){
  //   response = await updateNeabyWorkspaces(id, req.body);
  // }else if(del==='1'){
  //   response = await deleteNearbyWorkspaces(id);
  // }else{
  //   res.status(400).send('No query parameters to change data');
  // }

  if (response) {
    res.status(200).send('Success');
  } else {
    res.status(500).send('Error in adding new entry');
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});