/**
 * Khối 1: inputs
 * 5 số
 * Khối 2:
 * B1:tạo và gán các giá trị của biến bằng giá trị người dùng nhập vào
 * num1,num2,num3,num4,num5
 * B3: tạo biến tính giá trị của 5 số : sum
 * B2: Gọi đến thuộc tính onclick của nút button và in giá trị
 * Khối 3:
 * Tính số trung bình
 * (num1+num2+num3+num4+num5) / 5
 */
// tạo và gán giá trị
var num1 = document.getElementById('number1')
var num2 = document.getElementById('number2')
var num3 = document.getElementById('number3')
var num4 = document.getElementById('number4')
var num5 = document.getElementById('number5')
// convert dữ liệu string sang number

// in giá trị
document.getElementById('btnPrintNumber').onclick = function () {
  // giá trị trung bình của 5 số
  var sum =
    (Number(num1.value) +
      Number(num2.value) +
      Number(num3.value) +
      Number(num4.value) +
      Number(num5.value)) /
    5

  // nơi để in kết quả
  document.getElementById('printNumber').innerHTML =
    'Giá Trị Trung Bình Của 5 số là: ' + sum
}
