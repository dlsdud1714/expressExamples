const express = require('express');
const app = express();

app.listen(5050,()=> console.log('Listening to port 5050'));

app.get('/country',(req,res)=>{
    res.send({
        flag: '🇰🇷',
        countryName: 'korea'
    });
})

app.use(express.json());
app.post('/country/:name',(req,res)=>
{
    const name = req.params.name;
    const {flagimage} = req.body;
    if(!flagimage){
        res.status(404).send({msg: "We need flagimage"}); 
    }
    res.json({flag: flagimage, countryName: name});
})