// assignment 2
// 1.
// const path = require('node:path')
// function fileName(filePath) {
//     console.log(path.resolve(filePath),'=====',path.dirname(filePath))
// }
// fileName("/home/user/project/index.js")

//=================================

// 2.
// const path = require('node:path')
// function getFileName(filePath){
//     console.log(path.basename(filePath))
// }
// getFileName('/user/files/report.pdf')

//=================================

// 3.
// const path = require('node:path')
// function fromatFilePath() {
//     let formattedPath = path.format({
//         root:'',
//         dir:'/folder',
//         name:'app',
//         ext:'.js',
//         base:'app.js'
//     })
//     formattedPath = path.join(formattedPath)
//     console.log(formattedPath)
// }
// fromatFilePath()

//=================================
// 4.
// const path = require('node:path')
// function getFileExt(filePath){
//     console.log(path.extname(filePath))
// }
// getFileExt("/docs/readme.md")
//=================================
// 5.
// const path = require('node:path')
// function parsePath(filePath){
//     console.log(path.parse(filePath))
// }
// parsePath('/home/app/main.js')
//=================================
// 6.
// const path = require('node:path')
// function isAbsolutePath(filePath){
//     console.log(path.isAbsolute(filePath))
// }
// isAbsolutePath('/home/user/file.txt')
//===============================
// 7.
// const path = require('node:path')
// function joinPath(...filePath){
//     let joinedPath = path.join(...filePath)
//     console.log(joinedPath)
// }
// joinPath('src','components','app.js')
//=================================
// 8.
// const path = require('node:path')
// function absolutePath(filePath){
//     let absPath = path.resolve(filePath)
//     console.log(absPath)
// }
// absolutePath('./index.js')
//=================================
// 9.
// const path = require('node:path')
// function joinPath(...filePath){
//     let joinedPath = path.join(...filePath)
//     console.log(joinedPath)
// }
// joinPath('/folder1','folder2/file.txt')
//=================================
// 10.
// const fs = require('node:fs/promises')
// async function deleteFile(filePath){
//     try{
//         await fs.unlink(filePath)
//         console.log('file deleted successfully');

//     } catch (error) {
//         console.error('Error deleting file:', error)
//     }
// }
// deleteFile('test.txt')
//=================================
// 11.
// const fs = require('node:fs')
// fs.mkdirSync('myMkDir')
//=================================
// 12.
// const {EventEmitter} = require('node:events')
// const emitter = new EventEmitter()
// emitter.on('start',() => {
//     console.log('Welcome event triggered!')
// })
// emitter.emit('start')
//=================================
// 13.
// const {EventEmitter} = require('node:events')
// const emitter = new EventEmitter()
// emitter.on('login',(user) => {
//     console.log(`user login in ${user}`)
// })
// emitter.emit('login', 'ahmed')
//=================================
// 14.
// const fs = require('node:fs')
// let data = fs.readFileSync('test.txt','utf-8')
// console.log(data)
//=================================
// 15.
// const fs = require("node:fs");
// let data = fs.readFileSync("test.txt", "utf-8");
// fs.writeFile("test2.txt", data, (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   }
// });
//=================================
// 16.
// const fs = require("node:fs");
// fs.existsSync("test.txt") ? console.log("file exists") : console.log("file not exists");
//=================================
// 17.
// const os = require("node:os");
// console.log(`platForm is ${os.platform()} and architecture is ${os.arch()}`);
//=================================
// 18.
// const fs = require("node:fs");
// const readStream = fs.createReadStream("big.txt", "utf-8");
// readStream.on("data", (chunk) => {
//   console.log("chunk received:", chunk);
// });
// readStream.on("end", () => {
//   console.log("file reading completed");
// });
//=================================
// 19.
// const fs = require("node:fs");
// const readStream = fs.createReadStream("big.txt", "utf-8");
// const writeStream = fs.createWriteStream("copy.txt");
// readStream.pipe(writeStream);
// readStream.on("end", () => {
//   console.log("File copied using streams");
//   writeStream.end();
// });
//=================================
// 20.
// const fs = require("node:fs");
// const { pipeline } = require("node:stream");
// const zlib = require("node:zlib");


// pipeline(
//   fs.createReadStream("test.txt"),
//   zlib.createGzip(),
//   fs.createWriteStream("test.txt.gz"),
//   (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log("done");
//     }
//   },
// );
//======================================
// part 2
// const http = require('node:http')
// const fs = require('node:fs/promises')
// const server = http.createServer(handleRequest)
//
// async function handleRequest(req,res){
//     const {url,method} = req
//     if(url === '/user' && method === 'GET'){
//         let data = await fs.readFile('user.json',{encoding:'utf-8'})
//         data = JSON.parse(data)
//
//         res.writeHead(200,{'content-type':'application/json'})
//         res.write(JSON.stringify({message:'done',success:true,data:data}))
//         res.end()
//     }
//     else if(url.startsWith('/user') && method === 'PUT'){
//         let body = ''
//         req.on('data' , (chunk) => body += chunk)
//         req.on('end',async () => {
//             body = JSON.parse(body)
//             delete body.id
//
//             let id = Number(url.split('/')[2])
//
//             let users = await fs.readFile('user.json',{encoding:'utf-8'})
//
//             users = JSON.parse(users)
//
//             const userExist = users.find((user) => user.id === id)
//
//             if(!userExist){
//                 res.writeHead(404,{'content-type':'application/json'})
//                 res.write(JSON.stringify({message:'user not found',success:false}))
//                 return res.end()
//             }
//             let emailExist = users.find((user) => user.email === body.email)
//
//             if(emailExist){
//                 res.writeHead(409,{'content-type':'application/json'})
//                 res.write(JSON.stringify({message:'email already exists',success:false}))
//                 return res.end()
//             }
//
//             Object.assign(userExist,body)
//
//             await fs.writeFile('user.json',JSON.stringify(users))
//
//             res.writeHead(200,{'content-type':'application/json'})
//             res.write(JSON.stringify({message:'user updated',success:true,data:userExist}))
//             return res.end()
//
//         })
//
//
//     }
//     else if(url.startsWith('/user') && method === 'DELETE'){
//         let id = Number(url.split('/')[2])
//         let users = await fs.readFile('user.json',{encoding:'utf-8'})
//         users = JSON.parse(users)
//         let userExist = users.find((user) => user.id === id)
//         if(!userExist){
//             res.writeHead(404,{'content-type':'application/json'})
//             res.write(JSON.stringify({message:'user not found',success:false}))
//             return res.end()
//         }
//         const updateArr = users.filter((user) => user.id !==id)
//         await fs.writeFile('user.json',JSON.stringify(updateArr))
//         res.writeHead(200,{'content-type':'application/json'})
//         res.write(JSON.stringify({message:'user deleted',success:true}))
//         return res.end()
//     }
//     else if(url === '/user' && method === 'POST'){
//         let body = ''
//         req.on('data',(chunk) => body += chunk)
//         req.on('end',async () => {
//             body = JSON.parse(body)
//
//             let users = await fs.readFile('user.json', {encoding: 'utf-8'})
//
//             users = JSON.parse(users)
//             let emailExist = users.find((user) => user.email === body.email)
//
//             if(emailExist){
//                 res.writeHead(409,{'content-type':'application/json'})
//                 res.write(JSON.stringify({message:'email already exists',success:false}))
//                 return res.end()
//             }
//             users.push(body)
//             await fs.writeFile('user.json',JSON.stringify(users))
//             res.writeHead(200,{'content-type':'application/json'})
//             res.write(JSON.stringify({message:'user added',success:true}))
//             return res.end()
//         })
//     }
//     else if(url.startsWith('/user') && method === 'GET'){
//         let id = Number(url.split('/')[2])
//         let users = await fs.readFile('user.json',{encoding:'utf-8'})
//         users = JSON.parse(users)
//
//         let userExist = users.find((user) => user.id === id)
//         if(!userExist){
//             res.writeHead(404,{'content-type':'application/json'})
//             res.write(JSON.stringify({message:'user not found',success:false}))
//             return res.end()
//         }
//         res.writeHead(200,{'content-type':'application/json'})
//         res.write(JSON.stringify(userExist))
//         return res.end()
//     }
//
// }
//
// server.listen(3000)