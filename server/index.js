const express = require('express');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3002;
const { getNearbyTransitOptions } = require('../db/index');
const app = express();

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
    res.status(400).send('Unable to find ID')
  }
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});