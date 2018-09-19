const axios = require('axios');

// Promise approach
function getJSON() {
  return new Promise(function(resolve) {
    
    axios.get('https://tutorialzine.com/misc/files/example.json')
      .then(function(response) {
      // The data from the request is available in a .then block
      // We return the result using resolve.
      resolve(response.data);
    });
    
  });
}

let promisex = getJSON();
promisex.then((data) => {
  console.log(data[0]);
});

// 프라미스 문법을 보다 직관적으로 작성하기 위해서 도입된 
// 기술입니다. 요청 응답을 받아서 처리하는 로직을 성공 콜백함수에 
// 작성하던 것을 하나의 async 함수에 모두 모아서 작성하면
// 비동기 처리가 마치 동기 처리로직처럼 보이므로 보다
// 가독성이 높아집니다.

// Async/Await approach
// The async keyword will automatically create a new Promise and return it.
async function getJSONAsync(){
    // The await keyword saves us from having to write a .then() block.
    let response = await axios.get('https://tutorialzine.com/misc/files/example.json');

    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return response.data;
}

let promise = getJSONAsync();

promise.then((data) => {
  console.log(data[0]);
});
