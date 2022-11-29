import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $fName: String!, $lName: String!, $email: String!, $password: String!) {
        addUser(username: $username, fName: $fName, lName: $lName, email: $email, password: $password) {
        token
        user {
            _id
        }
        }
    }
`;