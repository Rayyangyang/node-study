let express = require('express')

// 引入 socket.io
let socket = require('socket.io')

let app = express()

let server = app.listen(5000, () => console.log('service running...'))

app.use(express.static('public'))

// socket 连接 服务器
let io = socket(server)

io.on('connection', (socket)=>{
  console.log('socket connect')

  socket.on('chat', (data)=>{
    io.sockets.emit('chat', data)
  })

  socket.on('typing', (data)=>{
    console.log(data)
    // 广播
    socket.broadcast.emit('typing', data)
  })
})

// 监听用户发送数据




