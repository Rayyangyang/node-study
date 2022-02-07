const cheerio = require('cheerio')
const request = require('request')

request('https://thenewstep.cn/', (err, response, html) =>{
  if(!err && response.statusCode == 200){
    console.log(html);
  }

})