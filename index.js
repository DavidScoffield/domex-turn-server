import Turn from 'node-turn'

const server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    username: 'password',
  },
  debugLevel: 'ALL',
})

server.start()
