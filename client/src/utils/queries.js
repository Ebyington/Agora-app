import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query getUsers {
      user {
        _id
        username
        fName
        lName
        email
        histories {
          _id
          products {
            _id
            name
            category {
              _id
              name
            }
            description
            price        
            image
          }
          purchaseDate
        }
      }
    }
`;

export const GET_PRODUCTS = gql`
query getProducts {
  products {
    _id
    name
    category {
      _id
    }
    description
    price
    image
    reviews
  }
}
`;

export const GO_CHECKOUT = gql`
  query CHECKOUT($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const GET_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

