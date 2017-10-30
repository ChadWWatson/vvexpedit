if (process.env.NODE_ENV === 'DEVELOPMENT') {
	require('dotenv').config({ path: 'variables.env' })
}

const _ = require('lodash')
const express = require('express')
const http = require('http')
const path = require('path')
const jade = require('jade')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
require('./models/User')
const expressValidator = require('express-validator')
const routes = require('./routes/index')
const statusRouter = require('./routes/status')
const discogRouter = require('./routes/discog')
const flash = require('connect-flash')
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 4444

mongoose.connect(process.env.DATABASE, { useMongoClient: true })
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
	console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
})

app = express()
app.use(express.static(path.join(__dirname, 'client/build')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())
app.use(flash())

app.use(
	session({
		secret: process.env.SECRET,
		key: process.env.KEY,
		resave: true,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
)

// pass variables to our templates + all requests
app.use(require('./middlewares/flash'))

app.use('/api/status', statusRouter)
app.use('/api/discog', discogRouter)

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
})
//app.use('/', routes)

app.listen(PORT, HOST, err => {
	console.log(`Application Started on http://${HOST}:${PORT}`)
})
