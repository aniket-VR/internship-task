import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeLayout />,

//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
