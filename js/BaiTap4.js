/**
 * Khối 1: inputs
 * Chiều Dài, Chiều Rộng
 * Khối 2:
 * B1: tạo và gán giá trị người dùng nhập vào chiều dài và chiều rộng
 * width, length
 * B2: tạo function(print,value): kiểm tra giá trị người dùng
 * print :  nơi để in ra giá trị
 * value: diện tích và chu vi
 * B3: tạo và gán giá trị cho diện tích, chu vi
 * area,perimeter
 * Khối 3:
 * diện tích, chu vi hình chữ nhật
 */

var width = document.getElementById('width')
var length = document.getElementById('length')
// tạo function kiểm tra giá trị
function checkValue(print, value) {
  if (width.value == '' && length.value == '') {
    print.style.color = 'yellow'
    print.innerHTML =
      'Vui lòng nhập giá trị chiều rộng và chiều cao hình chữ nhật'
  } else if (width.value == '') {
    print.style.color = 'yellow'
    print.innerHTML = 'Vui lòng nhập giá trị chiều rộng hình chữ nhật'
  } else if (length.value == '') {
    print.style.color = 'yellow'
    print.innerHTML = 'Vui lòng nhập giá trị chiều dài hình chữ nhật'
  } else if (width.value <= 0 || length.value <= 0) {
    print.style.color = 'yellow'
    print.innerHTML = 'Không tính được. Vui lòng nhập các giá trị lớn hơn 0!!'
  } else {
    print.style.color = 'blue'
    print.innerHTML = 'Diện tích hình chữ nhật bằng : ' + value
  }
}

// nút click diện tích
document.getElementById('btnArea').onclick = function () {
  // tính diện tích
  var area = width.value * length.value
  // xuất kết quả
  var printArea = document.getElementById('printArea')
  checkValue(printArea, area)
}
// nút click chu vi
document.getElementById('btnPerimeter').onclick = function () {
  // tính chu vi
  var perimeter = (parseInt(width.value) + parseInt(length.value)) * 2
  // xuất kết quả
  var printPerimeter = document.getElementById('printPerimeter')
  checkValue(printPerimeter, perimeter)
}
