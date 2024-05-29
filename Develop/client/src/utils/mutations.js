import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const CONTRUCT_BOOK = gql`
	mutation contructBook($bookData: BookInput!) {
		constructBook(bookData: $bookData) {
			_id
			username
			savedBooks {
				bookId
				authors
				description
				title
				image
				link
			}
		}
	}
`

export const SAVE_BOOK = gql`
	mutation saveBook($userId: ID!, $savedBooks: BookInput!) {
		saveBook(userId: $userId, savedBooks: $savedBooks) {
			_id
			username
			savedBooks {
				bookId
				authors
				description
				title
				image
				link
			}
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
