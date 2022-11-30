/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
function findPerimeterOfRectangle(length, breadth) {
  
     let chuvi = (length + breadth)*2;
     console.log("chu vi là :" + chuvi);
  

}
findPerimeterOfRectangle(length = 6,
breadth = 5)

/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
    let dientich=length*breadth;
    console.log( "diện tích là:" +dientich);
}
findAreaOfRectangle(length=9, breadth=6);
/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Đường kính hình tròn
 */
function findDiameterOfCircle(r) {
    return( r*2);
    
    
}
console.log(findDiameterOfCircle(4));
/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {
    let chuvi=2*3.14*r;
    console.log( "chu vi là:"+ chuvi);
}
findCircumferenceOfCircle(r=5);
/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
    let dientich=3.14*Math.pow( r, 2);
    console.log( "dien tích là:"+dientich);
}
findAreaOfCircle(r=3);
/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */
function findAreaOfTriangle(a, b, c) {
    let dientich= Math.sqrt( (a+b+c)*(a+b-c)*(b+c-a)*(c+a-b)) /4;
    console.log( "diện tích là:"+ dientich);
}
findAreaOfTriangle(a=3, b=4, c=5 );
/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {
    let dof= temp*9/5 +32;
    console.log(" độ f là:"+ dof);

}
celsiusToFahrenheit( temp=25);