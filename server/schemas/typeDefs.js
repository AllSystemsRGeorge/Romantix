const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type User {
    _id: ID
    username: String
    email: String
 }

 type Todo {
    _id: ID
    todo: String
    completed: Boolean
    userId: String
 }
 
 type Query {
    users: [User]
    user(id: String!): User
    todos: [Todo]
    todo(id: String!): Todo
 }

 type Mutation {
    createUser(username: String!, email: String!, password: String!): User
 }`;

// 
//   type Category {
//     _id: ID
//     name: String
//   }

//     type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//     updateUser(firstName: String, lastName: String, email: String, password: String): User
//     login(email: String!, password: String!): Auth
//   }



module.exports = typeDefs;