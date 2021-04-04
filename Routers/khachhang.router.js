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
    const khachhang = await executeSQL('select * from khachhang');
    khachhang.forEach(kh => {
        if(kh.username === username && kh.password === password)
         res.status(200).json(kh)
    });
    res.status(404).json('login failed !!! ');
})

module.exports = router