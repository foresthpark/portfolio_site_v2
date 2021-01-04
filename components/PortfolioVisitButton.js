import React from "react";

const PortfolioVisitButton = ({ site, url }) => {
  const imageSrc =
    site === "Github"
      ? "/static/icons/github.png"
      : "/static/icons/website.png";
  return (
    <div className="w-50 flex flex-row justify-center items-center border-2 border-black rounded-l-full rounded-r-full py-1 px-3 my-2">
      <img src={imageSrc} width={30} height={30} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="w-full font-medium text-lg text-center pl-3">
          Visit {site}
        </div>
      </a>
    </div>
  );
};

export default PortfolioVisitButton;
