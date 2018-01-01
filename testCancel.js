const axios = require('axios')

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('https://www.typescriptlang.org/docs/handbook/compiler-options.html', {
  cancelToken: source.token
}).then((ret) => {
  console.log(ret)
})
.catch((thrown) => {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
  }
});

setTimeout(() => {
  source.cancel('Operation canceled by the user.');
}, 500)
// }, 3500)