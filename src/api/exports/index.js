const routes = require('./routes');
const ExportsHandler = require('./handler');

module.exports = {
  name: 'API For Sending Message to Message Broker',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const exportHandler = new ExportsHandler(service, validator);

    server.route(routes(exportHandler));
  },
};
