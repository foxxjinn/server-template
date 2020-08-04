const express = require('express')
const app = express()

express.get('/', (req, res) => {
    res.send('hi')
})

express.listen('3000', ()=>{console.log('Running on port 3000')})