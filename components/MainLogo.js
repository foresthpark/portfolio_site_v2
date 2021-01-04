import React from "react";

const MainLogo = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center border-r-2 border-black border-solid px-5">
          <img src="/static/icons/mori.png" height={50} width={50} />
        </div>
        <div className="flex flex-col justify-center items-center font-sans mx-5  ">
          <div className="font-medium tracking-wider text-xl">FOREST PARK</div>
          <div className="text-xs">Software Developer</div>
        </div>
      </div>
    </>
  );
};

export default MainLogo;
