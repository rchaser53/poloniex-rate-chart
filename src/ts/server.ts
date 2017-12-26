import * as path from 'path'
import * as open from 'open'

import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import mount from 'koa-mount'
import { subHours } from 'date-fns'

import { getJpyToBtcRateInAmericaHistory } from './poloniex'

const app = new Koa();
const router = new Router();

app
  .use(router.routes())
  .use(router.allowedMethods())

app.use(mount('/public', serve('./dist')))

router.get('/btc-jpy', async (req, res) => {
  const americanTime = subHours(Date.now(), 12).getTime() / 1000
  const rateHistoryInAmerica = await getJpyToBtcRateInAmericaHistory(americanTime)

  res.json(rateHistoryInAmerica)
})

router.get('/rategraph', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(3100, () => {
  open('http://localhost:3100/rategraph')
  console.log('run server')
})