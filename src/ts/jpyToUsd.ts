import axios from 'axios'
const apiKey = process.env.CL

export const convertUsdToJpyRate = (usdRate: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    axios.get(`http://apilayer.net/api/live?access_key=${apiKey}`)
          .then((ret) => {
            resolve(ret.data.quotes.USDJPY * usdRate)
          })
          .catch((err) => {
            reject(err)
          })
  })
}