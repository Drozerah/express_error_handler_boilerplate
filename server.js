require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')

// initialize server
const app = express()
app.use(morgan('dev'))

// settings
app.set('PORT', process.env.PORT || 3000)

// routes
app.get('/', async (req, res, next) => {
  res.send('Hello from Express')
})

// catch all routes 404
app.use(async (req, res, next) => {
  const message = 'Page Not Found'
  const err = createError.NotFound(message)
  next(err)
})

// send errors with default status 500
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})

// start server
app.listen(app.get('PORT'), () => {
  console.log(`[APP][${process.env.APP_NAME}]`)
  console.log(`[APP][Mode][${process.env.NODE_ENV}]`)
  console.log(`[APP][listen]PORT][${app.get('PORT')}]`)
})
