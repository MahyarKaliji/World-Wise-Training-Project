const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/api", router);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
