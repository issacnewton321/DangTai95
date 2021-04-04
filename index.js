const express = require('express')
var cors = require('cors')
const app = express();
app.use(cors())
const PORT = process.env.PORT || 8080


const bodyParser = require('body-parser')
const sanphamRouter = require('./Routers/sanpham.router')
const nhanvienRouter = require('./Routers/nhanvien.router')
const khachhangRouter = require('./Routers/khachhang.router')




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/sanpham',sanphamRouter)
app.use('/nhanvien',nhanvienRouter)
app.use('/khachhang',khachhangRouter)

app.listen(PORT,()=> console.log('server listen on port '+PORT))