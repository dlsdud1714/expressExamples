const express = require('express');
const router = express.Router();
//const members = require('../../Member');
const members = [
    {
        id:1,
        name: 'John',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id:2,
        name: 'Tom',
        email: 'tom@gmail.com',
        status: 'inactive'
    },
    {
        id:3,
        name: 'Hack',
        email: 'hack@gmail.com',
        status: 'active'
    }
    ]

//app.use(logger);
router.get('/', (req,res)=>
{
    res.json(members);
})

//get single member
router.get('/:id', (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found) {
        res.json(members.filter( member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
 
})

//get member
router.post("/", (req,res)=>{
    const newMember = {
        id: 5,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

if(!newMember.name || !newMember.emial){
    res.status(400).json({msg: 'incorrect'});

}
members.push(newMember);
res.json(members);
})

//update member
router.put("/:id", (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    
    if(found) {
        const upMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = upMember.name? upMember.name  : member.name;
                member.email = upMember.email? upMember.email  : member.email;
                res.json({msg: 'Member updated', member})
            }

        })
    }else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
 
})

//delete
router.delete('/:id', (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found) {
        res.json({
            msg: 'member deleted',
            members: members.filter( member => member.id !== parseInt(req.params.id))
    })
}else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
})
module.exports={router};