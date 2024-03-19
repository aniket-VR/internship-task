import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const navigator = useNavigate();

  const [count, setCount] = useState(2);
  useEffect(() => {
    const temp = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    if (count === 0) {
      navigator("/login");
      return () => clearInterval(temp);
    }
  }, [count]);
  return (
    <div className="text-white flex items-center justify-center h-screen w-screen  ">
      <span>
        <div className="flex justify-center items-center h-full  loading"></div>
        <p className="text-lg font-bold  flex justify-center">
          Redirecting in {count} seconds
        </p>
      </span>
    </div>
  );
}
