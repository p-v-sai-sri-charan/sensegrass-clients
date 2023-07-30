import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { login } from '../features/user/userSlice';


function TopBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!user.name) {
    axiosInstance.get("/api/v1/user/me").then((res) => {
      dispatch(login(res.data.data));
    });
  }
  return (
    <div className="w-full relative bg-white dark:bg-gray-800 shadow fixed top-0 left-0">
      <nav className="bg-white dark:bg-gray-800  shadow py-4 w-full">
        <div className="px-8 mx-auto w-full">
          <div className="flex items-center justify-between h-8">
            <div className=" flex items-center">
              <h1 className="text-secondary dark:text-white ml-4 text-xl font-bold">
                Welcome, {user.name ? user.name : "User"}
                </h1>
            </div>
            <div className="block">
              <div className="flex -mr-2 md:block">
                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                  <div className=" relative ">
                    <input
                      type="text"
                      id='"form-subscribe-Search'
                      className=" rounded-full border-gray-800 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                <i className="pi pi-bell text-gray-400 hover:text-gray-600 cursor-pointer" style={{marginRight: "20px" , fontSize: "1.5rem"}}></i>
                    <Link to="/" className="relative block">
                        <img alt="profil" src="https://media.licdn.com/dms/image/C5603AQHmcEIIoz9y9A/profile-displayphoto-shrink_100_100/0/1630379252414?e=1695859200&v=beta&t=9RvwgRu1mXycPWuusH-m3djEWPr4yAEvcqs1QOIIvGY" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </Link>
                </div>
          </div>
          
        </div>
      </nav>
      
    </div>
  );
}

export default TopBar;
