import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser(
        $username: String!, 
        $fName: String!, 
        $lName: String!, 
        $email: String!, 
        $password: String!
        ) {
        addUser(
            username: $username, 
            fName: $fName, 
            lName: $lName, 
            email: $email, 
            password: $password
            ) {
        token
        user {
            _id
        }
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
          user {
            _id
          }
        }
      }
`;

export const ADD_HISTORY = gql`
  mutation addHistory($products: [ID]!) {
    addHistory(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        category {
          name
        }
      }
    }
  }
`;