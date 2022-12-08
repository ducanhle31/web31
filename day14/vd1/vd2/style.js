//Viết hàm sumAvg(arr) tính trung bình cộng một mảng số

const sumAvg = [10, 30, 20, 40, 50];

var total = sumAvg.reduce(function(total, currentValue) {   
    return (total + currentValue);
})/2;

console.log(total);

//Viết hàm findMax(arr) tìm giá trị lớn nhất trong một mảng
