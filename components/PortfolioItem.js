import React from "react";
import PortfolioVisitButton from "../components/PortfolioVisitButton";

const pxSquare = {
  width: "6px",
  height: "6px",
  backgroundColor: "#000000",
};

const PortfolioItem = ({ title, website, github, tech, description }) => {
  return (
    <div className="w-full my-4 flex flex-col justify-around items-center">
      <div className="w-4/5 flex-col justify-start items-center">
        <div className="flex flex-col justify-around items-center">
          <div className="font-medium w-full text-3xl font-sans my-2">
            {title}
          </div>
          <div className="font-light w-full text-base font-sans ml-8">
            {tech.map((tech, index) => {
              if (index === 0) {
                return `${tech}`;
              }

              return `, ${tech}`;
            })}
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-1">
          <div style={pxSquare}></div>
          <hr className="w-full border-1 border-black" />
        </div>
        <div className="w-full flex sm:flex-row flex-col justify-between items-start">
          <div className="font-light text-sm font-sans my-2 ml-5">
            <ul className="list-disc">
              {description.map((item, index) => {
                return <li key={item + index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            {website && <PortfolioVisitButton site="Website" url={website} />}
            {github && <PortfolioVisitButton site="Github" url={github} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
