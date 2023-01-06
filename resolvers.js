import pc from '@prisma/client'
import { AuthenticationError, ForbiddenError } from 'apollo-server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const salt_i = 10;
const prisma = new pc.PrismaClient()

const resolvers = {
    Query:{
        users:async (_,args,{userId})=>{
           if(!userId) throw new ForbiddenError("You must be logged in")
            const users = await prisma.user.findMany({
                orderBy: {
                    createdAt:"desc"
                },
                where:{id:{
                not:userId
            }}})
            return users
        }
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
        },
        signinUser: async (parent,{userCred})=>{
            const user = await prisma.user.findUnique({where:{email:userCred.email}}) 
            if(!user) throw new AuthenticationError("No account found") 
            
            const isAuth = await bcrypt.compare(userCred.password,user.password)
            if(!isAuth) throw new AuthenticationError("Email or password is invalid")
            const token = jwt.sign({userId:user.id},process.env.JWT_SECRET)
            return {token}

        }
    }
}


export default resolvers