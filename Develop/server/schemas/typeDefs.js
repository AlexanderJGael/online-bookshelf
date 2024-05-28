const typeDefs = `
type Query {
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, savedBooks: BookInput!): User
    removeBook(userId: ID!, bookId: String!): User
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

input BookInput {
    authors: [String]
    description: String
    bookId: String
    title: String
    image: String
    link: String
}

`

module.exports = typeDefs;