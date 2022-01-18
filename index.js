let express = require('express')

let app = express()



app.listen(5000, () => console.log('service running...'))



app.use(express.static('public'))