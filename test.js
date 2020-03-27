window.onload = function () {
  console.log('hello')
}

$(function () {
    $('#app').html('hello')
    // 下面是其他人修改的内容
    $('#app').on('click',function() {
      consolg.log($(this).html())
    })
})
