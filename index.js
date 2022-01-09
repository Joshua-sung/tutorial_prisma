import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphQL/resolvers.js";

const server = new GraphQLServer({
    typeDefs: "graphQL/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running"));