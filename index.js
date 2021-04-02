const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080
const bodyParser = require('body-parser')
const sanphamRouter = require('./Routers/sanpham.router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/sanpham',sanphamRouter)

app.listen(PORT,()=> console.log('server listen on port '+PORT))