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

// linguocheng分支修改的东西
beforeRouterEnter() {
	console.log('进来了')
}
