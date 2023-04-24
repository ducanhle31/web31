

import PostCard from "./Postcart";
import "./post.css";


export default function App() {
  const posts = [
    {
      id: 1,
      image:
        "https://img3.goodfon.com/wallpaper/nbig/6/de/sexy-blonde-blue-eyes-face.jpg",
      title: "Cùng giải LeetCode! Bài 129: Contains Duplicate",
      excerpt:
        "Bài 219. Contains Duplicate II trên LeetCode. Cách giải và tư duy để giải bài tập LeetCode",
      view: 27,
      publishedAt: "18-04-2023",
    },
    {
      id: 3,
      image:
        "https://img3.goodfon.com/wallpaper/nbig/6/de/sexy-blonde-blue-eyes-face.jpg",
      title: "Cùng giải LeetCode! Bài 129: Contains Duplicate",
      excerpt:
        "Bài 219. Contains Duplicate II trên LeetCode. Cách giải và tư duy để giải bài tập LeetCode",
      view: 27,
      publishedAt: "18-04-2023",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/R.135a92582913eeab3a5b5901e8315708?rik=H3mmoy3BHPIarQ&pid=ImgRaw&r=0",
      title: "Cùng giải LeetCode! Bài 127: Contains Duplicate",
      excerpt:
        "Bài 127. Contains Duplicate II trên LeetCode. Cách giải và tư duy để giải bài tập LeetCode",
      view: 41,
      publishedAt: "11-04-2023",
    },
  ];

  // Sử dụng map để biến đổi mảng object thành mảng JSX Element (Component)
const postCards = posts.map((post) => <PostCard key={post.id} post={post} />);

   return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
}


// Props
// Truyền dữ liệu từ component cha vào component con
// Dữ liệu truyền vào có thể là bất kỳ kiểu dữ liệu gì, chú ý sử dụng { }
// Tất cả dữ liệu truyền vào đều đặt trong 1 tham số duy nhất là props
// Props là chỉ đọc (read-only)

// Render list
