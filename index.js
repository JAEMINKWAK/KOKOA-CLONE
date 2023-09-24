const express = require('express') // express 모드 가져오기
const app = express() 
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kwakjaemin123:cbnu6060@@cbnuchat.utapcrm.mongodb.net/?retryWrites=true&w=majority'
, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // error를 줄이기 위함.
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
