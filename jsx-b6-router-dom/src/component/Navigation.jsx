import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/about">Aboutpage</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
}

// 1. Sử dụng component <Link> <NavLink>
// 2. Sử dụng hàm navigate() => trong các hàm xử lý sự kiện
