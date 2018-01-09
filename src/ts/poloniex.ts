import axios from 'axios'
import {
  subHours
} from 'date-fns'

import { convertUsdToJpyRate } from './jpyToUsd'
import { addQuery } from 'dumb-url-handler'

const americanTime = subHours(Date.now(), 10).getTime() / 1000

const host = 'https://poloniex.com/public'
const queriesObj = {
  command: 'returnTradeHistory',
  currencyPair: 'USDT_BTC',
  start: americanTime
}
const url = addQuery(host, queriesObj)

export const getJpyToBtcRateInAmerica = async (): Promise<number> => {
  try {
    const usdHistory = await axios.get(url)
    const usdRate = usdHistory.data.shift().rate
  
    return await convertUsdToJpyRate(usdRate)
  } catch (error) {
    throw new Error(error)
  }
}

export const getJpyToBtcRateInAmericaHistory = async (start: number, end?: number): Promise<any> => {
  try {
    const host = 'https://poloniex.com/public'
    const url = addQuery(host, {
      currencyPair: 'BTC_XRP',
      command: 'returnTradeHistory',
      start, end
    })

    console.log(url, 28)
    return (await axios.get(url)).data
  } catch (error) {
    throw new Error(error)
  }
}