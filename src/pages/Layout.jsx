import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <div className="w-full bg-dash h-screen overflow-y-auto">
          <TopBar />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
