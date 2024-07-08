const url = 'https://dapi.kakao.com/v2/search/web';
const queryParams = '?query=테스트';
const apiKey = 'bb038e957fe3c5f6cbf87ae0fcaab680';

fetch(url + queryParams, {
  method: 'GET',
  headers: {
    'Authorization': `KakaoAK ${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


