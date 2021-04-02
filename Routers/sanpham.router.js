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
          VALUES  ( ${arg.maSP} , -- maSP - int
                    N'${arg.tenSP}' , -- tenSP - nvarchar(500)
                    ${arg.maDanhMuc} , -- maDanhMuc - int
                    N'${arg.model}' , -- model - nvarchar(50)
                    N'${arg.thuongHieu}' , -- thuongHieu - nvarchar(50)
                    N'${arg.xuatXu}' , -- xuatXu - nvarchar(50)
                    N'${arg.kichThuoc}' , -- kichThuoc - nvarchar(50)
                    N'${arg.mauSac}' , -- mauSac - nvarchar(50)
                    N'${arg.moTa}' , -- moTa - nvarchar(500)
                    ${arg.hinhAnh}  -- hinhAnh - image
                )`;
        const result = await executeSQL(sqlQuery);
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:maSP',async (req,res)=>{
    let maSP = req.params.maSP
    try {
        const result = await executeSQL('delete from sanpham where maSP = '+maSP);
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:maSP',async (req,res)=>{
    let maSP = req.params.maSP
    let arg = req.body
    let sqlQuery = `
        Update sanpham
        set
            maSP = ${arg.maSP},
            tenSP = '${arg.tenSP}',
            maDanhMuc = ${arg.maDanhMuc},
            model = '${arg.model}',
            thuongHieu = '${arg.thuongHieu}',
            xuatXu = '${arg.xuatXu}',
            kichThuoc = '${arg.kichThuoc}',
            mauSac = '${arg.mauSac}',
            moTa = '${arg.moTa}',
            hinhAnh = ${arg.hinhAnh}
        where masp = ${maSP}
    `
    try {
        const result = await executeSQL(sqlQuery);
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:maSP',async (req,res)=>{
    let maSP = req.params.maSP
    try {
        const result = await executeSQL(`select * from sanpham where maSP = ${maSP}`);
        res.status(200).json(result[0])
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router