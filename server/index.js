const express = require('express')
require('dotenv').config()
const app = express()
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
   cookie: {
     maxAge: 1000 * 60 * 60 * 24
   }
}))

// Brian puts app listen in Massive to make sure BOTH DB and Server are working together never one without the other

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log('database set!');
  console.log(database.listTables())
  app.listen(SERVER_PORT, () => console.log(`It's over Anakin. I have the ${SERVER_PORT} port`))
})

app.get('/api/users', ctrl.getUsers)
app.post('/auth/register', ctrl.register)