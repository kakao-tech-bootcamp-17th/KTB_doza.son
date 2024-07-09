const axios = require('axios');

const query = 'test';
const url = 'https://dapi.kakao.com/v2/search/web';
const apiKey = 'bb038e957fe3c5f6cbf87ae0fcaab680';

axios.get(url, {
    params: { query: query },
    headers: {
      'Authorization': `KakaoAK ${apiKey}`
    }
  })
  .then(response => {
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch(error => console.error('Error:', error));