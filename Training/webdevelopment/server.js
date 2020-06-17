/*
    Proejct Setup - Nodes.js/Express/MongoDB/Course#1
    https://www.youtube.com/watch?v=qj2oDkvc4dQ
*/

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').load
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRounter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRounter)

app.listen(process.env.PORT || 3000)