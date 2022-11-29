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