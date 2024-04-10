const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
const mongoose = require('mongoose');
const motorbikeRouter = require('./router/motorbike');

mongoose.connect('mongodb://127.0.0.1:27017/DevOnThi1')
    .then(() => console.log('Connected!'));

app.use(morgan('combined'))

app.use("/uploads", express.static("uploads"));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/motorbike', motorbikeRouter)

app.listen(port, () => {
    console.log(`Example app listening on port port`)
})