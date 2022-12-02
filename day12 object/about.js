let coordinates = {
  a: {
    x: 1,
    y: 2,
  },
  b: {
    x: 5,
    y: 8,
  },
};

// Tính khoảng cách giữa 2 điểm A, B
// căn bậc 2 của ( xb-xa)^ 2 + ( yb-ya)^2
function calcDistance(coordinates) {
  const a = coordinates.a;
  const b = coordinates.b;
  let distance = Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
  return distance;
}

console.log(calcDistance(coordinates));


function Cat(name, color, age, weight) {
  this.name = name;
  this.color = color;
  this.age = age;
  this.weight = weight;
}
const cat1 = new Cat("lisa", "while", 3, 5);
const cat2 = new Cat("lisaaaaaa", "while", 5, 5);
const cat3 = new Cat("lisaaa", "while", 34, 5);



