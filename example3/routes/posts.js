const express = require('express');
const router= express.Router();


router.get('/', (req,res)=>{
    res.send('we are on posts')
    
})

router.get('/spe', (req,res)=>{
    res.send('second')
})
router.use('/', ()=>{console.log('This is a middleware running')});
module.exports = router;