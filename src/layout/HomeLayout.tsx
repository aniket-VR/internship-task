import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { Link, Outlet, useRoutes } from "react-router-dom";
import logo from "../assets/moptro logo-1@2x.png";
import callLogo from "../assets/Group 46@2x.png";
import { useMenuRoute } from "../routes/useMenuRoute";
import { EmployeeInfo } from "../constant/Employee";
export default function HomeLayout() {
  const [menuStatus, setMenuStatus] = useState("home");
  return (
    <div className="text-white h-screen flex-col  flex ">
      <div className="flex-initial">
        <div className="flex justify-end">
          <img src={callLogo} alt="call-logo" height={40} width={40} />
        </div>
        <div className="flex  justify-center">
          <span className="relative">
            <span className="absolute top-0 text-center opacity-40 filter blur-[2px] h-[35px] w-[35px] bg-[#5E5E5EB5] flex items-center justify-center rounded-full right-0"></span>
            <span className="text-greenHeader absolute z-4 top-0 right-0  h-[35px] w-[35px] flex items-center justify-center">
              {EmployeeInfo.length}
            </span>
            <img
              height={70}
              width={70}
              className="m-5"
              src={logo}
              alt="logo "
            />
          </span>
        </div>
      </div>
      <div className="flex-auto overflow-y-scroll scroll-smooth no-scrollbar ">
        {<Outlet />}
      </div>
      <div className="flex flex-initial bg-gradient-to-r from-[#0F2323] from-0% to-[#0F2323] to-40% relative justify-evenly  bottom-0 rounded-full  bg-red-700">
        <Link
          to={"/"}
          onClick={() => {
            setMenuStatus("home");
          }}
          className={`"text-center flex-1 flex justify-center ${
            menuStatus === "home" ? "bg-[#38383880] bg-no-repeat" : ""
          } rounded-l-full py-4 "`}
        >
          <ImHome className="opacity-50 text-greenHeader" />
        </Link>
        <Link
          to={"/employee"}
          onClick={() => {
            setMenuStatus("employee");
          }}
          className={`"text-center flex-1 flex justify-center ${
            menuStatus === "employee" ? "bg-[#38383880] bg-no-repeat" : ""
          } rounded-r-full py-4 "`}
        >
          <FaUser className=" opacity-50 text-greenHeader" />
        </Link>
      </div>
    </div>
  );
}
