const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type User {
      _id: ID
      username: String!
      fName: String
      lName: String
      email: String
      histories: [History]
  }

  type Product {
      _id: ID
      name: String
      image: String
      category: Category
      description: String
      price: Int    
      reviews: String
    }

  type History {
    _id: ID
    purchaseDate: String
    products: [Product]
    }

  type Checkout {
      session: ID
    }

  type Auth {
      token: ID
      user: User
    }
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    history(_id: ID!): History
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, fName: String!, lName: String!, email: String!, 
    password: String!): Auth
    addHistory(products: [ID]!): History
    updateUser(fName: String, lName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;