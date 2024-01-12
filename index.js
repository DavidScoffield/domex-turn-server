import Turn from 'node-turn'

const server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    username: 'password',
  },
  debugLevel: 'ALL',
  externalIps: 'domer-turn-server.onrender.com',
})

server.start()
