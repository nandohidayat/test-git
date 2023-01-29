const express = require('express')
const path = require('path');
const app = express()
const port = 8080

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/iframe01', (req, res) => {
    res.sendFile(path.join(__dirname + '/iframe01.html'));
})

app.get('/iframe02', (req, res) => {
    res.sendFile(path.join(__dirname + '/iframe02.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})