require('dotenv').config({ path: __dirname + '/.env'});
const { uploadDirectory } = require('s3-lambo');

const upload = async () => {
  await uploadDirectory({
    path: './public',
    params: {
      Bucket: 'fec-location-service',
    },
  });
};

upload();