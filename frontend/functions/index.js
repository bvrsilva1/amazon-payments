const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51HRK05DAXZFfmWTGv4uu7UqlFGTUtCMuqj0G8nHx4XW1oGler9DBTlk1zOSL2qIUOJEAmes2gvqkiTvwuIK1Xbe100AEAVEBiW'
)

//App config
const app = express()

//Middleware
app.use(cors({ origin: true }))
app.use(express.json())

//API routes
app.get('/', (request, response) => response.status(200).send('hello hello'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total
  console.log('payment request received for the ammount of ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

//Listen commands
exports.api = functions.https.onRequest(app)
