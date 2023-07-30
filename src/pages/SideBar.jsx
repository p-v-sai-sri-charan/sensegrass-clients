import React from "react";
import SideBarOptions, { helpandsupport } from "../utils/SideBarOptions";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

function SideBar() {
  const location = useLocation();

  return (
    <div className="relative bg-primary dark:bg-gray-800 fixed top-0 bottom-0 md:w-72">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
          <div className="flex items-center justify-start mx-6 mt-4">
            <span className="text-secondary dark:text-gray-300 ml-4 text-2xl font-bold">
              Branding
            </span>
          </div>
          <nav className="mt-4 px-2">
          <h1 className="text-text dark:text-gray-300 ml-4 text-xl font-bold">
              MAIN MENU 
            </h1>
            {SideBarOptions.map((item, index) => {
              return (
                <Link
                  className={`hover:text-gray-400 hover:bg-secondary flex items-center p-1 my-1 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-200 dark:text-gray-100 rounded-lg ${
                    location.pathname === item.path
                      ? "bg-secondary"
                      : "bg-primary text-text"
                  } dark:bg-gray-600`}
                  to={item.path}
                  key={index}
                >
                  <i className={item.icon}></i>
                  <span className="mx-4 text-lg font-normal">{item.title}</span>
                  <span className="flex-grow text-right"></span>
                </Link>
              );
            })}
            <h1 className="text-text dark:text-gray-300 ml-4 text-xl font-bold">
              HELP & SUPPORT
            </h1>
            {helpandsupport.map((item, index) => {
              return (
                <Link
                  className={`hover:text-gray-400 hover:bg-secondary flex items-center p-1 my-1 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-200 dark:text-gray-100 rounded-lg ${
                    location.pathname === item.path
                      ? "bg-secondary"
                      : "bg-primary text-text"
                  } dark:bg-gray-600`}
                  to={item.path}
                  key={index}
                >
                  <i className={item.icon}></i>
                  <span className="mx-4 text-lg font-normal">{item.title}</span>
                  <span className="flex-grow text-right"></span>
                </Link>
              );
            })}
            <br />
            <br />
            <div className="bg-white h-16 w-full rounded-xl flex flex-row justify-center items-center">
              <div>
                <span className="px-3 py-2  rounded-xl bg-primary">
                  <i className={`pi pi-wallet text-secondary`}></i>
                </span>
              </div>
              <div className="flex items-center justify-start mx-6 mt-0 flex-col">
                <span className="text-secondary dark:text-gray-300 ml-4 text-xl font-bold">
                  Current Balance
                </span>
                <span className="text-secondary dark:text-gray-300 ml-4 text-xl">
                  $ 12,848
                </span>
              </div>
            </div>
            <br/>
            <div
              className={`hover:text-gray-400 hover:text-secondary flex justify-center items-center p-1 my-1 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-200 dark:text-gray-100 rounded-lg bg-primary text-text dark:bg-gray-600 cursor-pointer`}
              onClick={() => {
                Cookies.remove("token");
                window.location.href = "/login";
              }}
            >
              <div>
                <i className="pi pi-sign-out"></i>
                <span className="mx-4 text-lg font-normal">Log out</span>
                <span className="flex-grow text-right"></span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
