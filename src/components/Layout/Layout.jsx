import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
  <Navbar />
  <div className="body-content">
  <Outlet />
  </div>
  <Footer />
  
</>
  );
}

export default Layout;