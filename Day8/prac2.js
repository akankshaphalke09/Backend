const express = require('express')
const app = express()
const port = 3000
const fs=require('fs')
const userRepo = require('./routes/userRoutes');
app.use('/user', userRepo);
app.use(express.static('public'))

app.use((req, res, next) => {
    fs.writeFileSync('log.txt',`${Date.now()} is a ${req.method} request for ${req.url}\n`,{flag:'a'})
  console.log(`${Date.now()} is a ${req.method} request for ${req.url}`)
  next()
})

app.use((req, res, next) => {
  console.log('logged 2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello World! about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})