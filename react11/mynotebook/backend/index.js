const connetToMongo=require("./ba")
const express = require('express')

var cors = require('cors')
connetToMongo();



const model=require('./Login.js');
const app = express()
app.use(cors())
const port = 80;
const {body,validationResult}=require('express-validator')
app.use(express.json())
app.use('/api/auth',require('../route/show'))
app.use('/api/auth',require('../route/notes'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

