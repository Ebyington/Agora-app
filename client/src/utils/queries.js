import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query getUsers {
        user {
        _id
        username
        fName
        lName
        email
        history {
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
            }
            purchaseDate
        }
        }
    }
`;

export const GET_PRODUCTS = gql`
query getProducts($category: ID) {
  products(category: $category) {
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

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
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

