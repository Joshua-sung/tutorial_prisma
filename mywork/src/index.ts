import express from "express";
import { ApolloServer } from "apollo-server-express";
import http from "http";

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
})


async function main() {
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: 5000 }, resolve))
  console.log(`Server running at http://localhost:5000${server.graphqlPath}`)
}

main();