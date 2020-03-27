window.onload = function () {
  console.log('hello')
}

$(function () {
    $('#app').html('hello')
    // 下面是其他人修改的内容
    $('#app').on('click',function() {
      console.log($(this).html())
    })
})
// 最新版的代码
console.log('best new')
console.log('two')
