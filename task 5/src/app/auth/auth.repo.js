const prisma = require('../../common/db/prisma.js')

const findUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({where:{email:email}})
    return user;
}

const createUser = async (name,email,hashedPassword) => {
    const user = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:hashedPassword
        },
        omit:{password:true}
    })
    return user;
}

module.exports = {findUserByEmail,createUser}