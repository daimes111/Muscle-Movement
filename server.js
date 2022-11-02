require('dotenv').config()

const express = require('express')
const methondOverride = require('method-override')
const app = express()
const session = require('express-session')
const MongoStore = require('connect-mongo')
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

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
    saveUninitialized: true,
    resave: false
  })
)

app.use('/comments', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))

app.get('/', (req,res) => {
  res.send("Why wont you work :(")
})

app.listen(PORT, () => {
  console.log(PORT + ' listening...')
})
