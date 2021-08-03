/**
 * Khối 1: inputs
 * Giá USD
 * Khối 2:
 * B1: tạo và lấy giá trị của người dùng nhập vào
 * numberMoney
 * B2: tạo và gán giá trị quy đổi
 * VNMoney = 23500
 * B3: Quy đổi từ usd sang vnđ
 * numberMoney * VNMoney
 * Khối 3: outputs
 * xuất ra tiền sau quy đổi
 */

document.getElementById('btnChangeMoney').onclick = function () {
  // tạo biến và lấy giá trị
  var numberMoney = document.getElementById('numberDollar').value
  var VNMoney = 23500
  // in giá trị quy đổi
  var print = document.getElementById('printVNĐ')
  if (numberMoney > 0) {
    print.style.color = 'white'
    print.innerHTML =
      'Số Tiền Đã Được Quy Đổi là : ' +
      (VNMoney * numberMoney).toLocaleString() +
      'VNĐ'
  } else {
    print.style.color = 'yellow'
    print.innerHTML = 'Vui lòng nhập vào số tiền $ bạn muốn quy đổi'
  }
}
