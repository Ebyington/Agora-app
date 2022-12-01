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
            stock
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
    stock
    image
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
export const GET_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
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

