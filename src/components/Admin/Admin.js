import AdSidebar from "./Sidebar";
import "../../assets/styles/Admin/Admin.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <AdSidebar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaBars onClick={() => setCollapsed(!collapsed)} />
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </div>
  );
};

export default Admin;
