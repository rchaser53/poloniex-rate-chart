const { parse } = require('date-fns')
const { getJpyToBtcRateInAmericaHistory } = require('./js/poloniex')

getJpyToBtcRateInAmericaHistory().then((ret) => {
  console.log(parse(ret[0].date).getTime(), 23)
})
