import pc from '@prisma/client'
import { ApolloError, AuthenticationError } from 'apollo-server'
import bcrypt from 'bcryptjs'
const salt_i = 10;
const prisma = new pc.PrismaClient()

const resolvers = {
    Query:{
        
    },
    Mutation:{
        signupUser:async (_,{userNew})=>{
            const user = await prisma.user.findUnique({where:{email:userNew.email}})
            if(user) throw new AuthenticationError("User already exist with that email")
            const hashedPassword = await bcrypt.hash(userNew.password,salt_i)
            const newUser = await prisma.user.create({
                data:{
                    ...userNew,
                    password:hashedPassword
                }
            })
            return newUser
        }
    }
}


export default resolvers