const createServer = require('./src/server');
const appConfig = require('./app.config');

async function init() {
  return createServer();
}

init().then(server => {
  server.listen(appConfig.port, () => {
    console.log('app is running on port 3000');
  })
})