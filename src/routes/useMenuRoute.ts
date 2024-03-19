import { useState } from "react";

export const useMenuRoute = () => {
  const [menuStatus, setMenuStatus] = useState("home");
  return { menuStatus, setMenuStatus };
};
