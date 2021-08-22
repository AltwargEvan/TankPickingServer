const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express')
  .default
const cors = require('cors')
const { createServer } = require("http");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");

const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require("./src/resolvers.js");
const typeDefs = require("./src/typeDefs.js");

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
app.get('*', expressPlayground({ endpoint: '/graphql' }))

const ws = createServer(app);

ws.listen(process.env.PORT || PORT, () => {
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
