const { gql } = require('apollo-server-express');

const typeDefs = gql`
Type User {
    _id: ID
    username: String
    fName: String
    lName: String
    email: String
    password: String [8]
    history: [History]
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Int
    quantity: Int
  }

  Type History {
  _id: ID
  purchaseDate: Date
  products: [Product]
  }

type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }


`;

module.exports = typeDefs;