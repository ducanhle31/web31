/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {
    for (let i=1; i <= 100; i += 2){
        console.log(i);
    }
}
printOddNumbers();
/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {
    for( let i= 1; i<=100; i++) {
        if( i % 2 == 0){console.log(i)}
    }
}
printEvenNumbers();
/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
    let total= 0;
    for ( let i =1 ; i<=n ; i ++){
        total+=i;
    }
    console.log( total);
}
sumOfNumbers( 6);
/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) { 
   

  
}

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {}

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
    thickness*=1000;
    let count=0;
    let currentthickness =0.1;
    while( currentthickness<thickness){
        currentthickness*=2;
        count++;
    } return count;
}
console.log( countFolding(1));
/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
    let count=0;
    while (dad/ son !==2) {count++;
        dad++;
        son++;
        
    }return count;
}
console.log( countYears(30,2));

//tính số chân gà và chó 
//vừa gà vừa chó bó lại cho tròn 36 con 100 chân chẵn 
function countlegs(){
const chicklegs=2;
const doglegs=4;
const total=36;
const totallegs=100;
let dog=1;
let chicken = total- dog;
while( dog * doglegs + chicken* chicklegs !=totallegs){
    dog++;
    chicken--;

} console.log( 'số chó là ${dog} và só gà là ${chicken}');
}
countlegs();
