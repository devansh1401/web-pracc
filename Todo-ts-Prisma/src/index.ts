// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// async function insertUser(username: string, password: string, FirstName: string, LastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             email: username,
//             password: password,
//             firstName: FirstName,
//             lastName: LastName
//         },
//         select: {
//             id: true,
//             email: true
//         }
//     })
//     console.log(res)
// } 
// insertUser('devansh1@gmail.com', 'password', 'Devansh', 'Agarwal')

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await  prisma.user.update({
        where: {
            email: username
        },
        data: {
            firstName,
            lastName
        }
    }) 
    console.log(res)
}

updateUser('devansh1@gmail.com', {
    firstName: 'Devansh',
    lastName: ' kukreja'
})