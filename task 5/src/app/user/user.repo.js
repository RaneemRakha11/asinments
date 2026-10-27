const prisma = require('../../common/db/prisma.js')

const findUserById = async (id) => {
    const user = await prisma.user.findUnique(

        {where:
                {
                    id: +id
                },
            omit:{role:true}
        })
    return user;
}

const checkUserExsit = async (id) => {
    const user = await prisma.user.findUnique({where: {id: id}})
    return !!user;
}

const updateUserOrInsert = async (id, newData) => {
    const createdUser = await prisma.user.upsert({
        where: {id: +id},
        update: {
            email: newData.email,
            name: newData.name
        },
        create: {
            id: +id,
            name: newData.name,
            email: newData.email,
            password: newData.password
        }, omit: {password: true}
    })
    return createdUser;
}

const findUserByEmail = async (email) => {
    const user = await prisma.user.findUnique(
        {
            where: {
                email: email
            },
            omit: {password: true}
        })
    return user;
}

module.exports = {findUserById, checkUserExsit, updateUserOrInsert, findUserByEmail}