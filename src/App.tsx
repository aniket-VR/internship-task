import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import HomeLayout from "./layout/HomeLayout";
import Authentication from "./components/Route/Authentication";
function App() {
  return (
    <>
      <div className="bg-no-repeat bg-transparent bg-gradient-to-r from-[#000000] to-[#000E09]">
        <Routes>
          <Route element={<Authentication />}>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/employee" element={<Employee />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
