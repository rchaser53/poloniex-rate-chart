import * as path from 'path'
import * as open from 'open'

import * as express from 'express'
const app = express()

const server = require('http').createServer(app)

import { subHours } from 'date-fns'

import { getJpyToBtcRateInAmericaHistory } from './poloniex'

app.use('/public', express.static(path.join(__dirname, 'dist')));

app.get('/btc-jpy', async (req, res) => {
  const americanTime = subHours(Date.now(), 12).getTime() / 1000
  const rateHistoryInAmerica = await getJpyToBtcRateInAmericaHistory(americanTime)

  res.json(rateHistoryInAmerica)
})

app.get('/rategraph', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

server.listen(3100, () => {
  open('http://localhost:3100/rategraph')
  console.log('run server')
})