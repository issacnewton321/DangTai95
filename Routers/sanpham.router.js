const express = require('express')
const router = express();
const executeSQL = require('../db')

router.get('/',async (req,res)=>{
    try {
        const result = await executeSQL('select * from sanpham');
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/',async (req,res)=>{
    const arg = req.body;
    try {
        let sqlQuery =
         `INSERT INTO dbo.sanpham      
          VALUES  ( 
                    N'${arg.tensp}' ,    -- tenSP - nvarchar(500)
                    ${arg.madm} , -- maDanhMuc - int
                    N'${arg.model}' , -- model - nvarchar(50)
                    N'${arg.thuonghieu}' , -- thuongHieu - nvarchar(50)
                    N'${arg.xuatxu}' , -- xuatXu - nvarchar(50)
                    N'${arg.kichthuoc}' , -- kichThuoc - nvarchar(50)
                    N'${arg.mausac}' , -- mauSac - nvarchar(50)
                    N'${arg.mota}' , -- moTa - nvarchar(500)
                    '${arg.photo}'  ,-- hinhAnh - image,
                    ${arg.soluong},
                    ${arg.gia}
                )`;
        const result = await executeSQL(sqlQuery);
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:masp',async (req,res)=>{
    let masp = req.params.masp
    try {
        const result = await executeSQL(`delete from sanpham where masp = '${masp}'`);
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:masp',async (req,res)=>{
    let masp = req.params.masp
    let arg = req.body
    let sqlQuery = `
        Update sanpham
        set
            tensp = '${arg.tensp}',
            madm = ${arg.madm},
            model = '${arg.model}',
            thuonghieu = '${arg.thuonghieu}',
            xuatxu = '${arg.xuatxu}',
            kichthuoc = '${arg.kichthuoc}',
            mausac = '${arg.mausac}',
            mota = '${arg.mota}',
            photo = '${arg.photo}',
            soluong = ${arg.soluong},
            gia = ${arg.gia}
        where masp = ${masp}
    `
    try {
        const result = await executeSQL(sqlQuery);
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:masp',async (req,res)=>{
    let masp = req.params.masp
    try {
        const result = await executeSQL(`select * from sanpham where masp = '${masp}'`);
        res.status(200).json(result[0])
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router