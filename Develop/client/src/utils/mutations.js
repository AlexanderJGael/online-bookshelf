import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $Email, password: $Password) {
            token
            user {
                _id
                username
            }
        }
    }    
`;

export const ADD_USER = gql`
    mutation addUser($username: Sring!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            tokenuser {
                _id
                username
            }
        }
    } )
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookData: BookInput!) {
        saveBook(bookData: $bookData) {
            bookId
            authors
            description
            title
            image
            link
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: bookId!) {
        removeBook(bookId: $bookId) {
            bookId
            authors
            description
            title
            image
            link
        }
    }
`;