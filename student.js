import http from 'http'
import express from 'express'

const app = express()

app.use(express.urlencoded());
app.use(express.json());

const students = []

app.post("/student", (req, res)=>{
    const student = req.body;
    console.log(req.body);
    
    students.push(student);
    res.status(201).json({
        message: "Successfully added students",
        student : student
    })
})

app.get("/student", (req, res)=>{
    res.json({
        totslStudent : students.length,
        students : students
    })
})

app.listen(4000, ()=> {
    console.log(`Server is running on port: ${4000}`);
    
})