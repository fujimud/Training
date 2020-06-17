const express = require('express')
const app = express()

app.set('engin view', 'ejs')
app.set('views', __dirname + 'views')

app.get('/', (req, res) => {
    res.send("hello World")
})

app.listen(process.env.PORT || 3000)