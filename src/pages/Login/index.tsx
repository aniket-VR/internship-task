import React, { useState } from "react";
import logo from "../../assets/Group 3.png";
import { Outlet, useNavigate } from "react-router-dom";
interface ALERTSTATUS {
  email: Boolean;
  password: Boolean;
}
export default function Login() {
  const [email, setEmail] = useState("");
  const [passwrod, setPassword] = useState("");
  const [emailAlert, setEmailAltert] = useState(false);
  const [passwordAlert, setPasswordAltert] = useState(false);

  const navigator = useNavigate();
  function onSubmit(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmailAltert(false);
    setPasswordAltert(false);

    if (email != "aniket@gmail.com") {
      setEmailAltert(true);
      setEmail("");
      return;
    }

    if (passwrod != "aniket4567") {
      setPasswordAltert(true);
      setPassword("");
      return;
    }
    setEmailAltert(false);
    setPasswordAltert(false);
    window.localStorage.setItem("token", email);
    navigator("/");
  }
  return (
    <div className="text-black flex h-screen items-center justify-center ">
      <div id="container  " className="">
        <ul className="flex flex-col items-center justify-center gap-8">
          <li>
            <img
              src={logo}
              height={80}
              width={80}
              className="rounded-full bg-no-repeat"
              alt="logo symbol"
            />
          </li>
          <li>
            <span className=" text-greenHeader tracking-[0.02px] textStroke">
              We are Electric
            </span>
          </li>
          <li>
            <input
              className=" focus:outline-none text-white py-2 px-4 w-inputFieldWidth h-inputFiledHeight rounded-full box-decoration-slice shadow-inputFieldBoxShadow bg-inputFieldBackground  bg-origin-padding bg-no-repeat opacity-[1] "
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <span
              className={`text-red-600 ml-4 ${
                emailAlert ? "block" : "hidden"
              } `}
            >
              email not found
            </span>
          </li>
          <li>
            <input
              className=" focus:outline-none text-white py-2 px-4 w-inputFieldWidth h-inputFiledHeight rounded-full box-decoration-slice shadow-inputFieldBoxShadow bg-inputFieldBackground  bg-origin-padding bg-no-repeat opacity-[1] "
              type="password"
              value={passwrod}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwrod"
            />
            <span
              className={`text-red-600 ml-4 ${
                passwordAlert ? "block" : "hidden"
              } `}
            >
              password is wrong
            </span>
          </li>
          <li>
            <input
              type="submit"
              onClick={(e) => {
                onSubmit(e);
              }}
              className="border-[#8CFF0026] w-inputFieldWidth h-inputFiledHeight rounded-full  opacity-1 bg-gradient-to-b from-[#00FF2580] from-0%  mix-blend-normal text-gray-400	 via-[#000000] via-100%  to-[#36A54680] to-100% border-[2px] bg-transparent bg-origin-padding bg-no-repeat border-solid"
            />
          </li>
          <li>
            <span className="text-greenHeader tracking-[0.02px">
              Frogot password
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
