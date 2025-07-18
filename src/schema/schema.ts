import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String!
    email: String
  }

  type Task {
    id: String!
    title: String!
    description: String
    status: String!
    category: String!
    createdAt: String!
    endDate: String
    user: User!
  }

  type Query {
    tasks(category: String, take: Int): [Task!]!
    task(id: String!): Task
    tasksByStatus(status: String!): [Task!]!
  }

  type Mutation {
    updateTaskStatus(id: String!, status: String!): Task
    createTask(
      title: String!
      description: String
      category: String!
      endDate: String!
      user: UserInput!
    ): Task
    removeTask(id: String!): Task
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String
  }

  
`;