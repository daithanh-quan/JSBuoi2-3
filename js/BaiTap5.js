/**
 * khối 1: inputs
 * số đầu vào có 2 chữ số
 * khối 2:
 * B1: tạo và gán giá trị mà người dùng nhập vào ô input
 * value
 * B2: Xử lý đầu vào có 2 chữ số
 * tạo biến và nhắc nhở người dùng phải nhập vào 2 chữ số
 * message
 * B3: Tính số hàng chục, tính số hàng đơn vị
 *numberTens,numberUnits
 * Khối 3:
 * Tổng số hàng chục và hàng đơn vị của 1 số
 *
 */

var valueNumber = document.getElementById('numberSum')

document.getElementById('btnSum').onclick = function (e) {
  // tính số hàng chục và hàng đơn vị
  var numberTens = valueNumber.value / 10
  var numberUnits = valueNumber.value % 10
  // tạo biến message
  var message = document.getElementById('message')
  // Điều kiện để tính tổng 2 ký số
  if (valueNumber.value < 10 || valueNumber.value > 99) {
    message.innerHTML = 'Vui Lòng Nhập Số Có 2 Chữ Số '
    document.getElementById('printSum').innerHTML = ''
  } else {
    message.innerHTML = ''
    document.getElementById('printSum').innerHTML =
      'Tổng 2 ký số bằng: ' + (parseInt(numberTens) + parseInt(numberUnits))
  }
}
