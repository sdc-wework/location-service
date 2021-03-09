const seeder = require('mongoose-seed');
const https = require('https');
const db = "mongodb://localhost/nearby";

const transitOptions = [
  'Metro',
  'Bus',
  'bike path',
  'freeway'
]

const getRandomWords = () => {
  return new Promise((resolve, reject) => {
    https.get('https://hipsum.co/api/?type=hipster-centric&sentences=3', res => {
      res.setEncoding("utf8");
      res.on('data', data => {
        resolve(data);
      })
    })
  })
};

const generateRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
}

const seedData = (data) => {
  seeder.connect(db, () => {
    seeder.loadModels(['./index.js']);
    seeder.clearModels(['nearby'], () => {
      seeder.populateModels(data, () => {
        seeder.disconnect();
      })
    })
  })
}

getRandomWords()
  .then(words => {
    const collection = words.split(' ')
    collection.pop();
    collection.shift()
    let seedingData = [
      {
        'model': 'nearby',
        'documents': []
      }
    ]

    for (let i = 0; i < 100; i++) {
      let option = {
        _id: i,
        nearbyTransitOptions: []
      }
      for (let j = 0; j < 8; j ++) {
        option.nearbyTransitOptions.push({
          name: collection[generateRandomIndex(collection.length)],
          type: transitOptions[generateRandomIndex(transitOptions.length)]
        })

      }
      seedingData[0].documents.push(option);
    }
    seedData(seedingData);
  })