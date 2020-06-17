const express = require('express')
const app = express()

const viewsRouter = require('./views/index')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.use('/', viewsRouter)
/* app.get('/', (req, res) => {
    res.send()
})
*/





app.listen(process.env.PORT || 3000)
