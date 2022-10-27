require('dotenv').config()

const express = require('express')
const methondOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3003
const db = require('./models/db')

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
  console.log('Connect to DB')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methondOverride('_method'))
app.use(express.static('public'))

app.use('/comments', require('./controllers/routeController'))

app.listen(PORT, () => {
  console.log(PORT + ' listening...')
})
