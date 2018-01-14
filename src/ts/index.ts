import { subMinutes } from 'date-fns'
import { getJpyToBtcRateInAmericaHistory } from './poloniex'

const americanTime = subMinutes(Date.now(), 1).getTime() / 1000

getJpyToBtcRateInAmericaHistory(americanTime).then((ret) => {
  // const data = ret.filter((elem) => {
  //   return elem.type === 'sell'
  // })
  console.log(ret)
  // console.log(data.pop())
})
