const WebSocket = require("ws")

const port = process.env.PORT || 8080
const wss = new WebSocket.Server({ port })

wss.on("connection", (ws) => {
  ws.on("message", () => {
    ws.send("Pong")
  })

  ws.send("Connected to Ping")
})

console.log(`WebSocket started at port ${port}.`)
