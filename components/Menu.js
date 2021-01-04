import React, { useState } from "react";
import Link from "next/link";

const Menu = ({ currentMenu }) => {
  const [tabState, setTabState] = useState(false);

  const menuItems = [
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "PORTFOLIO",
      link: "/portfolio",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-stretch">
      {menuItems.map((item, index) => {
        const whiteMenuTab =
          item.link === `/${currentMenu}`
            ? "rounded-l-full rounded-r-full bg-white"
            : "";

        return (
          <div
            key={item.link}
            className={`font-semibold text-sm sm:text-base sm:mx-3 sm:py-1 sm:px-4 mx-2 px-3 tracking-widest text-black hover:text-gray-700 ${whiteMenuTab}`}
          >
            <Link className="" href={item.link}>
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
