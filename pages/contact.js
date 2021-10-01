import React from "react";
import MainHeader from "../components/MainHeader";
import Head from "next/head";
const pxSquare = {
  width: "6px",
  height: "6px",
  backgroundColor: "#000000",
};

const contact = () => {
  return (
    <>
      <div className="w-full h- bg-red-300 flex flex-col justify-center items-center">
        <Head>
          <title>林 :: Contact</title>
        </Head>
        <div className="flex flex-row justify-between">
          <MainHeader currentMenu="contact" />
        </div>
        <div className="font-sans font-black text-6xl tracking-wide sm:text-12xl text-center">
          CONTACT
        </div>
        <div className="font-sans font-bold sm:text-4xl text-2xl mx-2 tracking-wide text-center">
          Are you ready to create something awesome together?
        </div>
        <div className="sm:my-5 sm:text-base text-sm my-3 mx-2 text-center">
          Whether it's a simple landing page or a full-on application, I'm there
          to help you realize your dream. Don't let your dream be dreams. Just
          contact me.
        </div>
        <div className="w-full h-full my-11 flex sm:flex-row flex-auto justify-around items-center flex-wrap">
          <div className="sm:w-1/5 w-4/5 mb-4 flex-col justify-start items-center">
            <a
              href="http://github.com/foresthpark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="my-2"
                src="/static/icons/mail.png"
                height={35}
                width={35}
              />
            </a>
            <div className="font-medium font-sans my-2">Email</div>
            <div className="w-full flex justify-center items-center my-1">
              <div style={pxSquare}></div>
              <hr className="w-full border-1 border-black" />
            </div>
            <div className="font-light text-sm font-sans my-2">
              forestpworking@gmail.com
            </div>
          </div>
          <div className="sm:w-1/5 w-4/5 mb-4 flex-col justify-start items-center">
            <a
              href="http://github.com/foresthpark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="my-2"
                src="/static/icons/linkedin.png"
                height={35}
                width={35}
              />
            </a>
            <div className="font-medium font-sans my-2">Linkedin</div>
            <div className="w-full flex justify-center items-center my-1">
              <div style={pxSquare}></div>
              <hr className="w-full border-1 border-black" />
            </div>
            <div className="font-light text-sm font-sans my-2">
              <a
                href="http://linkedin.com/in/forestpark"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/forestpark
              </a>
            </div>
          </div>
          <div className="sm:w-1/5 w-4/5 mb-4 flex-col justify-start items-center">
            <a
              href="http://github.com/foresthpark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="my-2"
                src="/static/icons/github.png"
                height={35}
                width={35}
              />
            </a>
            <div className="font-medium font-sans my-2">Github</div>
            <div className="w-full flex justify-center items-center my-1">
              <div style={pxSquare}></div>
              <hr className="w-full border-1 border-black" />
            </div>
            <div className="font-light text-sm font-sans my-2">
              <a
                href="http://github.com/foresthpark"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/foresthpark
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
