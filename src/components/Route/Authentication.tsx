import { Outlet, useNavigate } from "react-router-dom";
import Login from "../../pages/Login";
import Redirect from "../Redirect";

export default function Authentication() {
  if (window.localStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Redirect />;
  }
}
