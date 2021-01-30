const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static(__dirname + '/../public'));


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});