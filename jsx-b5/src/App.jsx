import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  /* const[ count, setCount] = useState(0);
  const [ramdom,setRamdom]= useState(Math.floor(Math.random( )*1000))
useEffect(
  //HÀm chứa side Efect
  // chạy lần đầu tiên sau khi render
  // và lần liên tiếp phụ thuộc vào dependencies


  () => {
    console.log(count);
  },
  

  //Mảng dependencies

  [count]
); */
// đòng bộ với localStogate
// không cần clean efect
/* useEffect(() =>{localStorage.setItem("count", count)}) */
const [users, setUsers] = useState([]);
useEffect(() =>{
  const getUsers = async ()=>{
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsers(data.users);
  };
  getUsers();
})
  return (
    <div className="App">
    
      <div>
        {users.map((users) => (
          <h3>{users.firstName}</h3>,
          <h3>{users.lastName}</h3>,
          <img url= {users.image} />
        ))}
      </div>
      
    </div>
  );
}

export default App
 
// thực thi tác vụ chứa side effect
// side Effect là các hành đông tác động đến hệ thống bên ngoài không phải là react
// sử dụng đồng bộ trạng thái ứng dụng trong React với hệ thống khác.
// sử dụng gọi Api
// mỗi useEffect có 1 mảng dependencies ( các phụ thuộc )
// tùy chỉnh hành vi chạy của useEffect
//Nếu không có dependencies thì chạy với mỗi lần render
// nếu dependencies là một mảng rỗng => thì chỉ chạy lần đâu tiên
// nếu dependencies chứa 1 hoặc nhiều ggiá trị => thì chỉ chạy khi giá trị thay đổi 

//UseEffect chia thành 2 dạng
//1  không cần phải clean
//2  cần phải clean => Hàm chứa side Efect cần phải return về 1 hàm để clean efect

// nó có chứa side EFfect hay không 
// nó chạy khi nào , phụ thộc vào giá trị nào 
// nó có cần clean up hay k ?

// các lỗi thường gặp khi sử dụng useEffect
//1 không xác định đúng dêpndencies
/// 2 sử dụng setState mà không có dependencies
// 3 Quên hàm clean up


// tìm nạp dữ liệu với useEffect
// 1 Fetch by render => Bên trong useEfect gọi hàm fetch data, nên dùng khi fetch data có tham số 
// 2 fetch then render => gọi hàm fetch data bên ngoài component, sử dụng useEfeet để cập nhật.