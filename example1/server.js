const express = require('express');
const app= express();
const PORT = 1000;
const path = require('path') ;
const logger = require('./middleware/logger.js');


//const members = require("./member");

app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`))

//app.get
//Get html1
// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, '/public/hello.html'));
// })

//get html2
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members', require('./api/members'))

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//get all members
///init middleware
