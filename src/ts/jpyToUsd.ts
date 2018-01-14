import {
  createUrl,
  addQuery
} from 'dumb-url-handler'
import axios from 'axios'
const apiKey = process.env.CL

const liveUsdToJpyRateUrl = createUrl('http://apilayer.net/api/', ['live'])

export const createConvertUsdToJpyRate = (connect) => {
  return (usdRate: number): Promise<number> => {
    return new Promise(async (resolve, reject) => {
      try {
        const ret = await connect.get(addQuery(liveUsdToJpyRateUrl, { access_key: apiKey }))
        resolve(ret.data.quotes.USDJPY * usdRate)
      } catch(err) {
        reject(err)
      }
    })
  }
}

export const convertUsdToJpyRate = createConvertUsdToJpyRate(axios)