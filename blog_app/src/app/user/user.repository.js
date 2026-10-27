const prisma = require('../../commn/db/prisma.js')

const findUserById = async (id) => {
    const user = await prisma.user.findUnique({where: {id: id}})
    return user;
}

const checkUserExistById = async (id) => {
    const user = await
        prisma.user.findUnique({where: {id: id}, select: {id: true}})
    return !!user;
}
module.exports = {findUserById, checkUserExistById}