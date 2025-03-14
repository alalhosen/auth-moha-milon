import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <p>Root Component</p>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
