import React from "react";
import MainLogo from "../components/MainLogo";
import Menu from "../components/Menu";

const MainHeader = ({ currentMenu }) => {
  return (
    <div className="w-full my-2">
      <div className="my-1 sm:my-5">
        <MainLogo />
      </div>
      <div className="mt-4 sm:my-5">
        <Menu currentMenu={currentMenu} />
      </div>
    </div>
  );
};

export default MainHeader;
