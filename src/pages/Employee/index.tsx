import React from "react";
import { IoSearch } from "react-icons/io5";
import EmployeeCard from "../../components/EmployeeCard";
import HomeLayout from "../../layout/HomeLayout";
import { EmployeeInfo } from "../../constant/Employee";

export default function Employee() {
  return (
    <div className="mt-10 mx-2 ">
      <div className="flex mx-10   gap-4 bg-[#5E5E5E82] p-3 rounded-full items-center bg-no-repeat justify-between">
        <input
          type="text"
          className="flex-1 focus:outline-none bg-transparent ml-4 text-center bg-no-repeat text-[#FFFFFFB3]"
          placeholder="Search with name"
        />
        <IoSearch height={25} width={25} className="text-[#FFFFFFB3] mr-4" />
      </div>
      <div className="mt-[27px] mx-2 ">
        {EmployeeInfo.map((item, key) => {
          return <EmployeeCard key={key} item={item}></EmployeeCard>;
        })}
      </div>
    </div>
  );
}
