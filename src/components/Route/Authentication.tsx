import { Outlet, useNavigate } from "react-router-dom";
import Login from "../../pages/Login";

export default function Authentication() {
  if (window.localStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Login />;
  }
}
