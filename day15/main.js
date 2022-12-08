/**
 * Tính số tiền điện theo công thức tính giá điện bậc thang như sau:
 * - Từ kWh thứ 0 đến 50: 1678đ/kWh
 * - Từ kWh thứ 51 - 100: 1734đ/kWh
 * - Từ kWh thứ 101 - 200: 2014đ/kWh
 * - Từ kWh thứ 201 - 300: 2536đ/kWh
 * - Từ kWh thứ 301 - 400: 2834đ/kWh
 * - Từ kWh thứ 401 trở đi: 2927đ/kWh
 *
 * @param {number} kwh - Số điện đã dùng trong tháng
 *
 * @return {number} Tiền điện phải trả
 *
 * @example
 * bill(100); // 170600
 */

/** cách làm
 * B1:nếu số điện Từ kWh thứ 0 đến 50 thì nhân với 1678đ/kWh
 * B2:Từ kWh thứ 51 - 100 thì số tiền là 50* 1678 cộng số kwh *1734
 *B3: Từ kWh thứ 101 - 200: thì số tiền là 50* 1678 + kwh *1734 +kwh * 2014
 * B4:Từ kWh thứ 201 - 300: thì số tiền là 50 * 1678 + 50 * 1734 + 100 * 2014 + kwh * 2536
 * B5: Từ kWh thứ 301 - 400:  thì số tiền là 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + kwh * 2834
 * B6 Từ kWh thứ 401 trở đi: thì số tiền là 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + kwh * 2927
 */

function bill(kwh) {
  if (kwh <= 50) {
    console.log(kwh * 1678);
  } else if (kwh <= 100) {
    console.log(50 * 1678 + kwh * 1734);
  } else if (kwh <= 200) {
    console.log(50 * 1678 + 50 * 1734 + kwh * 2014);
  } else if (kwh <= 300) {
    console.log(50 * 1678 + 50 * 1734 + 100 * 2014 + kwh * 2536);
  } else if (kwh <= 400) {
    console.log(50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + kwh * 2834);
  } else {
    console.log(
      50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + kwh * 2927
    );
  }
}
bill(20);
bill(55);
bill(150);
bill(220);
bill(320);
bill(410);

/**
 * Cho một chuỗi time biểu thị thời gian dạng giờ:phút:giây (VD:
'20:15:45'), và một số n bất kỳ, tính và trả về kết quả là một chuỗi
biểu thị thời gian tương ứng sau n giây

   *
 * @param {string} time - Chuỗi biểu thị thời gian
 * @param {number} n - Số giây cần thêm (bớt)
 *
 * @return {string} Kết quả
 *
 * @example
 * calcTime('20:15:45', 15); // '20:16:00'
 * calcTime('20:15:45', -46); // '20:14:59'
 */

function calcTime (time, n){
	let d = new Date(time);
	d.setTime(n);
  
}
console.log(calcTime("20:10:30", 10));


/**
 * Kiểm tra một chuỗi có phải đối xứng hay không (viết xuôi hay viết
ngược đều giống nhau, không phân biệt chữ hoa chữ thường và không tính
dấu cách)
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @return {boolean} Kết quả
 *
 * @example
 * isPalindrome('Race car'); // true, vì Race car = racecar = racecar
 */
/* cách làm
B1 khai báo biến arr status 
b2 dùng vòng lặp for để kiểm tra
 nếu chuỗi đối xứng trả về true
 nếu chỗi không đối xứng trả về false
 b3 in ra kết quả

 */
function isPalindrome(str)  {
    
    let arrStatus = [];
    for (let i = 0; i < str.length / 2; i++) {
      let statusEachCharacter;
      if (str[i] == str[str.length - 1 - i]) {
        statusEachCharacter = false;
      } else {
        statusEachCharacter = true;
      }
      arrStatus.push(statusEachCharacter);
    }
    if (arrStatus.indexOf(false) != -1) {
      return true;
    } else return false;
  }
 console.log(isPalindrome('Race car'));
 console.log(isPalindrome("le anh"));


 /**
 * Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo
được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì
ốc sên sẽ leo lên tới miệng giếng
 *
 * @param {number} h - Chiều cao của giếng (h > 0)
 * @param {number} x - Số mét leo được vào ban ngày (x > y)
 * @param {number} y - Số mét bị tụt xuống vào ban đêm (y > 0)
 *
 * @return {number} Số ngày cần để ốc sên leo lên được miệng giếng

   *
 * @example
 * snail(10, 3, 1); // 5
 */
/* Cách làm
 * Bước 1: Khai báo biến day để giữ giá trị
 * Bước 2: Sử dụng hàm if else để loại những giá trị nhập vào sai và nhận những giá trị đúng
 * Bước 3: Nhập công thức tính toán vào hàm else
 * Bước 4: Trả về biến day
 */
function snail(h, x, y) {
  let day;
  if (x < y && Y < 0 && h < 0) return "Invalid";
  else {
    day = h / (x - y);
  }
  return day;
}
console.log(snail(10,3,1));


/**
* Sắp xếp các chữ số trong một số nguyên dương bất kỳ để tạo ra số nhỏ
nhất (giữ nguyên số chữ số ban đầu, bao gồm cả số 0)
*
* @param {number} n - Số nguyên dương bất kỳ
*
* @return {number} Số nhất nhất sau khi sắp xếp các chữ số
*
* @example
* sortNumber(5307510); // 1003557
*/
/* Cách làm
 * Bước 1: Khai báo biến srt để giữ giá trị n sang chuỗi
 * Bước 2: Khai báo biến arr1 để giữ giá trị str chuyển sang mảng
 * Bước 3: Khai báo biến arr2 để giữa giá trị arr1 sau khi sắp xếp
 * Bước 4: Trong hàm để sắp xếp: nếu ký tự a < b thì trả về -1 , ngược lại thì trả về 1
 *         để sắp xếp từ nhỏ tới lớn
 * Bước 5: Sử dụng vòng lặp for và câu điều kiện if để đổi vị trí nếu số đầu tiên trong mảng là 0
 * Bước 6: Trả về kết quả chuyển mảng thành chuỗi sau đó chuyển chuỗi thành số
 */
function sortNumber(n) {
  if (n < 0 && n % 2 !== 0) return "Invalid number";
  else {
    let str = n.toString();
    let arr1 = str.split("");
    let arr2 = arr1.sort(function (a, b) {
      if (a < b) return -1;
      else return 1;
    });
    for (let i = 1; i < arr2.length; i++) {
      if (arr2[0] == 0 && arr2[i] != 0) {
        let temp = arr2[0];
        arr2[0] = arr2[i];
        arr2[i] = temp;
        break;
      }
    }
    return Number(arr2.join(""));
  }
}
console.log( sortNumber(1234560));
 /* Đếm số lần xuất hiện của mỗi phần tử trong mảng, nếu là chuỗi thì
không phân biệt chữ hoa chữ thường
*
* @param {any[]} arr - Mảng chứa giá trị bất kỳ
*
* @return {Record<string, number>} object chứa kết quả, với key là giá
trị trong mảng và value là số lần xuất hiện trong mảng
*
* @example
* let result = countElement([1, true, 1, 1, true]);
* console.log(result); // {1: 3, true: 2}
*
* @example
* let result = countElement(['Ba', 'Béo', 'Ba']);
* console.log(result); // {ba: 2, béo: 1} */
function countElement(arr) {

}



/**
 * Object chứa thông tin về sinh viên
 *
 * @typedef {Object} Student
 * @property {number} id - ID duy nhất của sinh viên
 * @property {string} name - Tên sinh viên
 * @property {string} dateOfBirth - Ngày sinh
 * @property {number} grade - Điểm tốt nghiệp
 */

/**
* Sắp xếp danh sách sinh viên dựa theo:
* - Điểm tốt nghiệp theo thứ tự giảm dần
* - Nếu sinh viên có điểm tốt nghiệp bằng nhau thì sắp xếp theo thứ tự
ngày sinh tăng dần
* - Nếu ngày sinh cũng giống nhau thì sắp xếp theo tên (bảng chữ cái)
*
* Kết quả trả về phải là một mảng mới, không thay đổi mảng cũ
*
* @param {Student[]} students - Mảng chứa thông tin sinh viên
*
* @return {Student[]} Danh sách sinh viên sau khi sắp xếp
*
* @example
* let students = [
* { id: 1, name: "Ba Nguyễn", dateOfBirth: '1992-05-24', point: 10.0
},
* { id: 2, name: "Tuấn Anh", dateOfBirth: '1993-10-29', point: 4.5 },
* { id: 3, name: "Tuấn Vũ", dateOfBirth: '1996-03-13', point: 8.2 },
* { id: 4, name: "Minh Vân", dateOfBirth: '1996-03-31', point: 7.0 },
* { id: 5, name: "Phương Thảo", dateOfBirth: '1999-05-15', point: 9.0
},
* { id: 6, name: "Mai Anh", dateOfBirth: '1994-08-22', point: 4.5 },
* { id: 7, name: "Thanh Hà", dateOfBirth: '1996-03-31', point: 7.0 },* { id: 8, name: "Hoàng Linh", dateOfBirth: '1991-07-01', point: 7.2
},
* { id: 9, name: "Lan Nhi", dateOfBirth: '1990-09-10', point: 5.5 },
* ]
*
* sortStudents(students);
*
* // Kết quả
* [
* // sắp xếp theo điểm
* { id: 1, name: "Ba Nguyễn", dateOfBirth: '1992-05-24', point: 10.0
},
* { id: 5, name: "Phương Thảo", dateOfBirth: '1999-05-15', point: 9.0
},
* { id: 3, name: "Tuấn Vũ", dateOfBirth: '1996-03-13', point: 8.2 },
* { id: 8, name: "Hoàng Linh", dateOfBirth: '1991-07-01', point: 7.2
},
* // điểm bằng nhau, sắp xếp theo ngày sinh
* { id: 7, name: "Thanh Hà", dateOfBirth: '1996-02-16', point: 7.0 },
* { id: 4, name: "Minh Vân", dateOfBirth: '1993-03-31', point: 7.0 },
* // sắp xếp theo điểm
* { id: 9, name: "Lan Nhi", dateOfBirth: '1990-09-10', point: 5.5 },
* // điểm bằng nhau, ngày sinh giống nhau, sắp xếp theo tên
* { id: 6, name: "Mai Anh", dateOfBirth: '1996-03-31', point: 4.5 },
* { id: 2, name: "Tuấn Anh", dateOfBirth: '1996-03-31', point: 4.5 },
* ]
*/
function sortStudents(students) {

}