const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./graphql");
const { getDbConnectionWithDb, createDatabase } = require("./utils/mysql");
const db = require("./utils/mysql/getDbConnectionWithDb");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
