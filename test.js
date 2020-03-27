window.onload = function () {
  console.log('hello')
}

$(function () {
    $('#app').html('hello')
    // 这是master修改的内容
    $('#app').click(function() {
    	console.log($(this).html()
    })
})
