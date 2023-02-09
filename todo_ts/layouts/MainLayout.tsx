import React, { FC, PropsWithChildren } from "react";
import NavBar from "@/components/Navigation/Navigation";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
};

export default MainLayout;
