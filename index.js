require("dotenv").config()
const Server = require("./app/server")
const { PORT, NODE_ENV, HTTPS_MODE } = process.env
const listenPort = PORT || 3000
const environment = NODE_ENV || 'development'
const httpsMode = HTTPS_MODE == true

const startingServer = async () => {
  await new Server(listenPort, environment, httpsMode).start()
  console.log(`Server running in ${environment} mode on port ${listenPort} with TLS ${httpsMode ? 'ON' : 'OFF'}`)
}

startingServer()