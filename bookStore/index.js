const createServer = require('./src/server');
const setUpMongoose = require('./config/mongoose');

let mongoUrl = 'mongodb://localhost/bookstore'
async function init() {
  await setUpMongoose(mongoUrl);

  return createServer();
}

init().then(server => {
  server.listen(3000, () => {
    console.log('app is running on port 3000');
  })
})