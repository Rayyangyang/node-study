const express = require('express')
const ejs = require('ejs')
const multer = require('multer')
const path = require('path')

// 实例化 express
const app = express()

// 定义port
const PORT = 4000

// 使用ejs
app.set('view engine', 'ejs')
app.use(express.static('./public'))


// 设置磁盘存储引擎
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// 初始化 upload
const upload = multer({ storage: storage }).single('myImage')


app.get('/', (req, res) => {

  res.render('index')

})

app.post('/upload', (req, res) => {

  upload(req, res, function (err) {
    if(err){
      console.log('err', err);
    }else{
      console.log(req.file);

      let path = `/uploads/${req.file.filename}`;

      console.log(path);
      res.render('index', {
        fileUrl : path
      })
    }
  })

})

app.listen(PORT, () => console.log('service running ...'))


