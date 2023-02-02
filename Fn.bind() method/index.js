/* this.firstName = "Minh";
this.lastName = " Thu";

const teacher = {
  firstName: "Minh",
  lastName: " Thảo",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(teacher.getFullName());

const getTeacherName = teacher.getFullName;
console.log(getTeacherName()); */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = (() => {
  const cars = ["BMW"];
 
   const input = $("#input");
    const submit = $("#submit");
  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    reder() {
      const html = cars.map((car, index) => `<li>${car}
      <span class="delete" data-index="${index}">&times</span>
      </li>`).join("");
      root.innerHTML= html
    },
    init(){
       
       // handle dom events
       submit.onclick = ()=>{
        const car = input.value 
        this.add(car)
        this.render()
        input.value= null
        input.focus()
       }
        this.render()
    }
  }
})();
app.init()