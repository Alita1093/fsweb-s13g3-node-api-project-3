const { json } = require("express");
const express = require("express");
const { logger } = require("./middleware/middleware");
const server = express();
const router = require("./users/users-router");
// ekspres'in varsayılan olarak istek gövdelerinde JSON'u ayrıştıramayacağını unutmayın
server.use(express.json());
// global ara yazılımlar ve kullanıcı routelarının buraya bağlanması gerekir
server.use("/api/users", router);
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2>Biraz ara yazılım yazalım!</h2>`);
});

module.exports = server;
