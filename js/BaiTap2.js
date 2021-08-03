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

// convert dữ liệu string sang number

// in giá trị
document.getElementById('btnPrintNumber').onclick = function () {
  // tạo và gán giá trị
  var num1 = document.getElementById('number1').value
  var num2 = document.getElementById('number2').value
  var num3 = document.getElementById('number3').value
  var num4 = document.getElementById('number4').value
  var num5 = document.getElementById('number5').value
  // giá trị trung bình của 5 số
  var sum =
    (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) /
    5

  // nơi để in kết quả
  var Print = document.getElementById('printNumber')
  if (num1 == '' || num2 == '' || num3 == '' || num4 == '' || num5 == '') {
    Print.style.color = 'yellow'
    Print.innerHTML = 'Vui lòng nhập giá trị vào ô input'
  } else {
    Print.style.color = 'green'
    Print.innerHTML = 'Giá Trị Trung Bình Của 5 số là: ' + sum
  }
}
