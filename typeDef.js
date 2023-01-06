import {gql} from 'apollo-server'

const typeDefs = gql`
type Query{
   users:[User]
}

input UserInput{
   firstName:String!
   lastName:String!
   email:String!
   password:String!
}

input UserSignInInput{
   email:String!
   password:String!
}

type Token{
   token:String!
}

scalar Date

type Message{
   id:ID!
   text:String!
   recieverId:Int!
   senderId:Int!
   createdAt:Date!
}

type Mutation{
   signupUser(userNew: UserInput!):User
   signinUser(userCred:UserSignInInput!):Token
   createMessage(recieverId: Int!,text: String!):Message
}

type User{
   id:ID!
   firstName:String!
   lastName:String!
   email:String!
}
`

export default typeDefs