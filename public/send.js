

$('.sub-btn').on('click', () => {

  let iphoneNum = $('.iphone-num').val()
  let contentInfo = $('.content-info').val()

  fetch('/', {
    method: 'post',
    headers: {
      "Content-type": 'application/json'
    },
    body: JSON.stringify({
      iphoneNum,
      contentInfo
    })
  }).then(res => {
    console.log('client', res);

  })
})

