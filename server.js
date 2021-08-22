import express from "express";
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors'
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./src/resolvers.js";
import typeDefs from "./src/typeDefs.js";

const PORT = 4000
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

var app = express();
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: { subscriptionEndpoint: `ws://localhost:${PORT}/subscriptions` },
  }),
);

const ws = createServer(app);

ws.listen(PORT, () => {
  // Set up the WebSocket for handling GraphQL subscriptions.
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
    },
    {
      server: ws,
      path: '/subscriptions',
    },
  );
  console.log(
    `🚀 Query endpoint ready at http://localhost:${PORT}/graphql`
  );
  console.log(
    `🚀 Subscription endpoint ready at ws://localhost:${PORT}/subscriptions`
  );
  console.log(
    `🚀 Apollo Sandbox at https://studio.apollographql.com/sandbox/explorer`
  );
});

module.exports = app