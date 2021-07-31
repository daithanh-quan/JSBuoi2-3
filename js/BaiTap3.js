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

var numberMoney = document.getElementById('numberDollar')
var VNMoney = 23500

document.getElementById('btnChangeMoney').onclick = function () {
  document.getElementById('printVNĐ').innerHTML =
    'Số Tiền Đã Được Quy Đổi là : ' +
    (VNMoney * numberMoney.value).toLocaleString() +
    'VNĐ'
}
