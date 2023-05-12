import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css"
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Top from "./Totop";

export default function Layout() {
  return (
    <div className="layout">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Footer />
      <Top />
    </div>
  );
}
