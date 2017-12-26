import * as Chart from 'chart.js'
import axios from 'axios'


const ctx = (document.getElementById("myChart") as HTMLCanvasElement).getContext('2d')

axios.get('http://localhost:3100/btc-jpy')
  .then(({data: rateHistoryInAmerica}) => {
    console.log(11, rateHistoryInAmerica, 11)
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'xrp_jpy',
          data: rateHistoryInAmerica.map(elem => elem.rate),
          fill: false,
          pointRadius: 0
        }]
      },
      options: {
        responsive: false
      }
    })
  })
  .catch((err) => {
    console.error(err)
  })
