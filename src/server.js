const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NoteService = require('./services/inMemory/NotesService.Js');

const init = async () => {
  const noteService = new NoteService();

  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: noteService,
    },
  });

  await server.start();
  console.log(`Server started on ${server.info.uri}`);
};

init();
