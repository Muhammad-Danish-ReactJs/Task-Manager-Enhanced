import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./Dashboard";
import Checkbox from "./Checkbox";

const Sidebar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar Container */}
      <div
        className="bg-dark text-white p-3 d-flex flex-column justify-content-between"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <div>
          {/* Brand Logo */}
          <a
            href="#home"
            className="d-flex align-items-center text-white text-decoration-none mb-3"
          >
            <span className="fs-4 fw-bold">TASK MANAGER</span>
          </a>
          <hr />

          {/* Navigation Menu */}
          <ul className="nav nav-pills flex-column mb-auto">
            {/* Dashboard */}
            <li className="nav-item">
              <a href="#dashboard" className="nav-link text-white">
                <i className="fa-solid fa-gauge me-2"></i>
                <span>Dashboard</span>
              </a>
            </li>

            {/* Home */}
            <li className="nav-item">
              <a href="#home" className="nav-link text-white">
                <i class="fa-solid fa-list me-2"></i>
                <span>My Tasks</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link text-white">
                <i class="fa-solid fa-calendar-days me-2"></i>
                <span>Calender</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link text-white">
                <i class="fa-solid fa-gear me-2"></i>
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>

        {/* User Footer Section */}
        <div>
          <hr />
          <div className="dropdown">
            <a
              href="#user"
              className="d-flex align-items-center text-white text-decoration-none"
            >
              <i className="fa-solid fa-user me-2"></i>
              <strong>User</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 flex-grow-1">
        {/* <h2>Main Content</h2> */}
        <Dashboard />
        <Checkbox />
      </div>
    </div>
  );
};

export default Sidebar;
