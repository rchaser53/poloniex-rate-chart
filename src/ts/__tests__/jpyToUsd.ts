import {
  createConvertUsdToJpyRate,
  Connect
} from '../jpyToUsd'

const returnRate = 12
const normalConnectMock: Connect = {
  get: (url: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          quotes: {
            USDJPY: returnRate
          }
        }
      })
    })
  }
}

const ErrorMessage = 'test error'
const errorConnectMock: Connect = {
  get: (url: string) => {
    return new Promise((resolve, reject) => {
      reject(ErrorMessage)
    })
  }
}

describe('createConvertUsdToJpyRate creates function', () => {
  test('return rate', async() => {
    const convertUsdToJpyRate = createConvertUsdToJpyRate(normalConnectMock)
    const rate = await convertUsdToJpyRate(1)
    expect(rate).toBe(returnRate)
  });

  test('throw error message', async() => {
    const convertUsdToJpyRate = createConvertUsdToJpyRate(errorConnectMock)
    return convertUsdToJpyRate(1).catch((err) => {
      expect(err).toBe(ErrorMessage)
    })
  });
});