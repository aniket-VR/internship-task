import React from "react";
import { Employee } from "../constant/Employee";

export default function EmployeeCard({ item }: { item: Employee }) {
  return (
    <div>
      <div
        className={`bg-[#5E5E5E82] py-3 px-2 my-2 relative rounded-2xl ${
          (item.emp_id as number) % 2 == 0 ? "ml-6" : "mr-6"
        }`}
      >
        <span className="bg-transparent h-[40px] w-[40px] flex items-center justify-center rounded-full text-center m-4 border-black absolute top-0 right-0 border-[1px]">
          {`${item.emp_id}`}
        </span>
        <thead className="opacity-80 my-6 border-spacing-6">
          <tr>
            <td>EMP ID</td>
            <td>:</td>
            <td className="font-bold text-white">{`${item.emp_id}`}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td className="font-bold text-white">{item.name}</td>
          </tr>
          <tr>
            <td>DOB</td>
            <td>:</td>
            <td className="font-bold text-orange-500">{item.date_of_birth}</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>:</td>
            <td className="font-bold text-greenHeader">{item.role}</td>
          </tr>
        </thead>
      </div>
    </div>
  );
}
