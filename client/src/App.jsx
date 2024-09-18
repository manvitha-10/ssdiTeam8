import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from 'react';
import FileUpload from './FileUpload';

const App = () => {
  return (
    <div className="w-full p-6">
      <Navbar />
      <Outlet />
      <FileUpload />
    </div>
  );
};
export default App;
