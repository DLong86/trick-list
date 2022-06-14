const express = require('express')
const PORT = 3000

const app = express()

app.use(express.static('public'))

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})