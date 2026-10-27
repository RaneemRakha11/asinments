const prisma = require('../../commn/db/prisma.js')

const findUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({where: {email: email}});
    return user;
}
const createUser = async (email, name, hashedPassword) => {
    const user = await prisma.user.create({
        data: {
            email: email,
            name: name,
            password: hashedPassword,
        },
        omit: {password: true}
    });
    return user;
}

// prisma.blog.upsert({
//     where: {title: "blog 1", authorId: 1},
//     update: {content: "content2"},
//     create: {title: "blog 2", content: "content2", authorId: 1}
// });


module.exports = {findUserByEmail, createUser}