import Head from "next/head";
import MainIndexCard from "../components/MainIndexCard";
import Link from "next/link";

export default function Home() {
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
    <>
      <Head>
        <title>林 :: Forest Park</title>
      </Head>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className=" flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center border-r-2 border-black border-solid px-5">
            <img src="/static/icons/mori.png" height={50} width={50} />
          </div>
          <div className="flex flex-col justify-center items-center font-sans mx-5  ">
            <div className="font-medium tracking-wider text-xl">
              FOREST PARK
            </div>
            <div className="text-xs">Software Developer</div>
          </div>
        </div>
        <div className="flex flex-row justify-end m-4">
          <Link className="" href="/about">
            <div className="font-semibold mx-3 py-1 px-4 tracking-widest text-black hover:text-gray-700 hover:bg-yellow-300 rounded-l-full rounded-r-full cursor-pointer">
              About
            </div>
          </Link>
          <Link className="" href="/portfolio">
            <div className="font-semibold mx-3 py-1 px-4 tracking-widest text-black hover:text-gray-700 hover:bg-blue-300 rounded-l-full rounded-r-full cursor-pointer">
              Portfolio
            </div>
          </Link>
          <Link className="" href="/contact">
            <div className="font-semibold mx-3 py-1 px-4 tracking-widest text-black hover:text-gray-700 hover:bg-red-300 rounded-l-full rounded-r-full cursor-pointer">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
