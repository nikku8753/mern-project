import http from 'http'
import express from 'express'
import userRoutes from './src/routes/user.routes.js';
import { addHome, submitHome } from './src/routes/host.routes.js';
// import bodyParser, { json, urlencoded } from 'body-parser'

const app = express()

// const server = http.createServer(app)

// app.use(express.urlencoded());
// app.use(express.json());

// app.use('/', (req, res, next)=>{
//     console.log(req.url, req.header, req.method);
//     // res.send("<h1>Hello, This is siddhi</h1>")
//     console.log('first execution');
//     next()
// })

// app.use('/profile', (req, res, next)=>{
//     console.log(req.url, req.header, req.method);
//     res.send("<h1>Second execution</h1>")
//     console.log('second execution');
// })

// app.use('/abc', (req, res, next)=>{
//     console.log(req.url, req.header, req.method);
//     // res.send("<h1>Hello, This is siddhi</h1>")
//     console.log('third execution');
    
// })

// const users = [
//     {id:1, name:"Siddhi"},
//     {id:2, name:"Archi"}
// ]

// // get method
// app.get('/user',(req, res)=>{
//     res.json(users);
// })

// post method
// app.use(express.json())  // to convert data in json
// const users = []

// app.post('/user',(req,res)=>{
//     const { id, name, email } = req.body  // if we want to store data according to variable then we have pass same name while passing data
//     const user=req.body;
//     console.log(req.body);
    
//     users.push(user)
//     res.json({
//         message:"user Add",
//         data:users
//     })
// })

// app.get("/", (req, res)=>{
//     res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <title>Registration Form</title>
//         </head>
//         <body>
//             <h2>Registration Form</h2>

//             <form action="/submit" method="POST">

//                 <label>Name:</label><br>
//                 <input type="text" name="name"><br><br>

//                 <label>Email:</label><br>
//                 <input type="email" name="email"><br><br>

//                 <label>Password:</label><br>
//                 <input type="password" name="password"><br><br>

//                 <label>Gender:</label><br>
//                 <input type="radio" name="gender" value="Male"> Male
//                 <input type="radio" name="gender" value="Female"> Female
//                 <br><br>

//                 <label>Country:</label><br>
//                 <select name="country">
//                     <option>India</option>
//                     <option>USA</option>
//                     <option>Canada</option>
//                 </select>
//                 <br><br>

//                 <button type="submit">Submit</button>

//             </form>
//         </body>
//         </html>
//     `);
// })

// app.post("/submit", (req, res)=>{
//     console.log(req.body);
//     res.send(`
//         Name: ${req.body.name}<br>
//         Email: ${req.body.email}<br>
//         Password: ${req.body.password}<br>
//         Gender: ${req.body.gender}<br>
//         Country: ${req.body.country}<br>
//         `)
// })

// app.get("/user/:id", (req, res)=>{
//     console.log(req.params.id);
//     res.send(`User ID: ${req.params.id}`)
// })

// to delete
// let users = [
//     {id:1, name:"Siddhi"},
//     {id:2, name:"Archi"}
// ]

// app.delete('/user/:id',(req, res)=>{
//     const id = Number(req.params.id);
//     users=users.filter(users=>users.id !== id)  // we filter out id which is not same as id
//     res.json({
//         message: "user deleted",
//         users : users
//     })
// })

app.use(express.json());
app.use(express.urlencoded());
app.use('/', (req, res, next)=>{
    console.log(req.url, req.method);
    next();
})
// app.get('/user',(req, res)=>{
//     res.send(`<h1>Seach your home</h1>
//     <a href="/host/addhome">Add your home</a>`)
// })

app.use('', userRoutes);

app.use('/host', addHome);
// app.get('/host/addhome',(req, res)=>{
//     res.send(`<form action="/host/submit" method="post">
//         <input type="text" name="houseName" id="houseName" placeholder="Add New House">
//         <input type="text" name="location" id="location" placeholder="Add New location">
//         <button type="submit">Submit</button>
//     </form>`)
// })

app.use('/host', submitHome);
// app.post("/host/submit",(req, res)=>{
//     res.send(`<h1>Your new house added successfully</h1>
//     <a href="/user">Go to home page</a>`)
//     console.log(req.body);
// })

app.listen(3000, ()=>{
    console.log(`Server is running on port ${3000}`);
})