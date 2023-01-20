import React, { FC, PropsWithChildren } from "react";
import NavBar from "../components/NavBar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <NavBar></NavBar>
    </>
  );
};

export default MainLayout;
