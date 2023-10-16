import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Loyout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Loyout;
