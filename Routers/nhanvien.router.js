const express = require('express')
const router = express();
const executeSQL = require('../db')


router.get('/',async (req,res)=>{
    const nhanvien = await executeSQL('select * from nhanvien');
    res.json(nhanvien);
})
router.post('/login',async(req,res)=>{
    console.log(req.body)
    const {username,password} = req.body;
    console.log(req.body)
    const nhanvien = await executeSQL('select * from nhanvien');
    nhanvien.forEach(nv => {
        if(nv.username === username && nv.password === password)
         res.status(200).json(nv)
    });
    res.status(404).json('login failed !!! ');
})

module.exports = router