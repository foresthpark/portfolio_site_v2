import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const pxSquare = {
  width: "6px",
  height: "6px",
  // "max-height": "5px",
  // "max-width": "5px",
  // "min-height": "5px",
  // "min-width": "5px",
  "background-color": "#000",
};

const MainIndexCard = ({ title, bgcolor }) => {
  return (
    <>
      <div
        className={`w-full h-full flex flex-col bg-primary justify-center items-center hover:${bgcolor}`}
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.99 }}
          className="text-8xl font-sans cursor-pointer"
        >
          <Link href={`/${title.toLowerCase()}`}>{title}</Link>
        </motion.div>
        <div className="w-full flex justify-center items-center">
          <div style={pxSquare}></div>
          <hr className="w-1/3 color-black border-1" />
        </div>
      </div>
    </>
  );
};

export default MainIndexCard;
