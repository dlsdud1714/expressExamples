const express = require('express');
const app= express();
//const mongoose = require('mongoose')
app.listen(5051);




//Import rounte
const postsRoute = require('./routes/posts.js')
app.use('/posts', postsRoute);
//Connet to DB
//mongoose.connect(`mongosh "mongodb+srv://cluster0.izqzy.mongodb.net/myFirstDatabase" --apiVersion 1 --username dlsdud1714`);