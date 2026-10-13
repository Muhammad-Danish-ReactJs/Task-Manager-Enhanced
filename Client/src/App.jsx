import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./components/Dashboard";
import Checkbox from "./components/Checkbox";
import Sidebar from "./components/Sidebar";
import AddTaskForm from "./components/AddTaskForm";

function App() {

  return (
    <div className="d-flex">
      <Sidebar />
      {/* Main Content Area */}
      <div className="p-4 flex-grow-1">
        {/* <h2>Main Content</h2> */}
        <Dashboard />
        <AddTaskForm />
        <Checkbox />
      </div>
    </div>
  );
}

export default App;
