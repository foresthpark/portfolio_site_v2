import React from "react";
import Head from "next/head";
import MainHeader from "../components/MainHeader";
const pxSquare = {
  width: "6px",
  height: "6px",
  backgroundColor: "#000000",
};

const about = () => {
  return (
    <>
      <div className="w-full sm:h-full h-full bg-yellow-300 flex flex-col justify-content items-stretch">
        <Head>
          <title>林 :: About</title>
        </Head>
        <div className="flex flex-row justify-between">
          <MainHeader currentMenu="about" />
        </div>
        <div className="font-sans font-black text-6xl tracking-wide sm:text-20xl text-center">
          ABOUT
        </div>
        <div className="font-sans font-bold sm:text-4xl text-2xl mx-2 tracking-wide text-center">
          A little bit about Forest
        </div>
        <div className="sm:my-5 sm:text-base text-sm mt-3 mx-2 text-center">
          I believe working is all about building great products with amazing
          people. Building a great product is cool, but I also love helping
          other people build incredible stuff.
        </div>
        {/* Skills Section */}
        <div className="w-full my-8 flex sm:flex-row flex-col sm:justify-around justify-center sm:items-start items-center">
          <div className="sm:w-1/5 w-4/5 py-4 flex-col sm:justify-start justify-center items-center">
            <div className="font-medium sm:text-base text-sm font-sans my-2">
              Hobbies
            </div>
            <div className="w-full flex justify-center items-center my-1">
              <div style={pxSquare}></div>
              <hr className="w-full border-1 border-black" />
            </div>
            <div className="font-light text-sm font-sans my-2">
              <ul>
                <li>Bouldering</li>
                <li>Baking</li>
                <li>Cooking</li>
                <li>Videography</li>
              </ul>
            </div>
          </div>
          <div className="sm:w-1/5 w-4/5 py-4 flex-col sm:justify-start justify-center items-center">
            <div className="font-medium sm:text-base text-sm font-sans my-2">
              Tech Skills
            </div>
            <div className="w-full flex justify-center items-center my-1">
              <div style={pxSquare}></div>
              <hr className="w-full border-1 border-black" />
            </div>
            <div className="font-light text-sm font-sans my-2">
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Apollo Graphql</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Prisma ORM</li>
                <li>AWS</li>
                <li>Flutter</li>
                <li>Dart</li>
              </ul>
            </div>
          </div>
          <div className="sm:w-1/5 w-4/5 py-4 flex-col sm:justify-start justify-center items-center">
            <div className="font-medium sm:text-base text-sm font-sans my-2">
              Non-Tech Skills
            </div>
            <div className="w-full flex justify-center items-center my-1">
              <div style={pxSquare}></div>
              <hr className="w-full border-1 border-black" />
            </div>
            <div className="font-light text-sm font-sans my-2">
              <ul>
                <li>Leadership</li>
                <li>Management</li>
                <li>Mentoring</li>
                <li>Presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
