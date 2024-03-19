import ProgressBar from "../../components/ProgressBar";
import { EmployeeInfo } from "../../constant/Employee";
export default function Home() {
  return (
    <div className="">
      <div className="bg-[#5E5E5E82]    bg-opacity-40 backdrop-blur-sm	 mx-5 rounded-[20px]   mt-10">
        <div className="text-center bg-[#1A2C2C99] opacity-100 rounded-full">
          <div className="py-2 text-[#FFFFFFB3]  ">
            Employee Productivity Dashboard
          </div>
        </div>
        <div className="m-4 opacity-100 pb-6 ">
          {EmployeeInfo.map((item, key) => {
            if (key === 0) {
              return item.productivity.map((subitem) => {
                return (
                  <div className="mt-4 ">
                    <div className="flex justify-between">
                      <span className="text-[#FFFFFF] opacity-100">
                        Productivity on {subitem.day}
                      </span>
                      <span className="text-[#36A546] opacity-100">
                        {subitem.percentage}
                      </span>
                    </div>
                    <div>
                      <ProgressBar progress={subitem.percentage.toString()} />
                    </div>
                  </div>
                );
              });
            } else {
              return;
            }
          })}
        </div>
      </div>
    </div>
  );
}
