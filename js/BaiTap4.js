/**
 * Khối 1: inputs
 * Chiều Dài, Chiều Rộng
 * Khối 2:
 * B1: tạo và gán giá trị người dùng nhập vào chiều dài và chiều rộng
 * width, length
 * B2: tạo và gán giá trị cho diện tích, chu vi
 * area,perimeter
 * Khối 3:
 * diện tích, chu vi hình chữ nhật
 */

var width = document.getElementById('width')
var length = document.getElementById('length')
// nút click diện tích
document.getElementById('btnArea').onclick = function () {
  // tính diện tích
  var area = width.value * length.value
  // xuất kết quả
  document.getElementById('printArea').innerHTML =
    'Diện Tích Hình Chữ Nhật Bằng: ' + area
}
// nút click chu vi
document.getElementById('btnPerimeter').onclick = function () {
  // tính chu vi
  var perimeter = (parseInt(width.value) + parseInt(length.value)) * 2
  // xuất kết quả
  document.getElementById('printPerimeter').innerHTML =
    'Chu Vi Hình Chữ Nhật Bằng: ' + perimeter
}
