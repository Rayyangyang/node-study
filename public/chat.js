// socket 连接 服务器
let socket = io.connect('http://localhost:5000/')

$('.btn').on('click', () => {

  let userName = $('.userName').val()
  let sendInfo = $('.sendInfo').val()

  socket.emit('chat', {
    userName,
    sendInfo
  })

})

socket.on('chat', (data) => {
  console.log(111, data)
  let newHtml = $(`<p>
    <span class='name'>
    ${data.userName}:
    </span>
    <span class='send-message'>
    ${data.sendInfo}
    </span>

  </p>`)
  console.log(newHtml)
  $('.chat-content').append(newHtml)

})

// 监听用户输入
$('.sendInfo').on('input', (e) => {
  socket.emit('typing', $('.userName').val())
})

// 监听从服务器返回的数据
socket.on('typing', (data)=>{
  console.log(data)
    //谁正在输入。。。 
})