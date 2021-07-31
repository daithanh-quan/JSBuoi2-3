/**
 * Khối 1: inputs
 * Số ngày làm, lương của 1 ngày
 * Khối 2:
 * B1: tạo biến và lấy giá trị người dùng nhập vào số ngày, lương của 1 ngày
 * numberDate
 * salaryDate
 * B2: Tính tiền lương
 * NumberDate * SalaryDate
 *
 * Khối 3: Output
 * Tính lương nhân viên
 */

function salaryMoney() {
  // tạo biến và gán giá trị
  var numberDate = document.getElementById('numberDate').value
  var salaryDate = 100000
  document.getElementById('printMoney').innerHTML =
    'Tổng tiền tháng này là: ' +
    Math.floor(numberDate * salaryDate).toLocaleString() +
    'đ'
}

document.getElementById('btnPrintMoney').onclick = salaryMoney
