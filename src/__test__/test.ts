import { ApolloServer } from "apollo-server";
import { typeDefs } from "../schema/schema";
import { resolvers } from "../resolvers/resolvers";

export const createTestServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
  });
};