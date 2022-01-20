const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const Vonage = require('@vonage/server-sdk')
const vonage = new Vonage({
  apiKey: '30383d02',
  apiSecret: 'XUF8Pt4wNRQr3bmD'
})




let app = express();

app.set('view engine', 'html')
app.engine('html', ejs.renderFile)

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

let PORT = 4000;

app.get('/', (req, res) => {

  res.render('index')

})

app.post('/', (req, res) =>{

  const from = "Vonage APIs"
  const to = req.body.iphoneNum
  const text = req.body.contentInfo

  vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
          console.log(err);
      } else {
          if(responseData.messages[0]['status'] === "0") {

            console.log(responseData);
              console.log("Message sent successfully.");
              res.send('Message sent successfully.')
          } else {
              console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);

              res.send(`Message failed with error: ${responseData.messages[0]['error-text']}`)
          }
      }
  })



})

app.listen(PORT, () => { console.log('service running...'); })

