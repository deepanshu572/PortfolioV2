import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";



const Home = () => {
  return (
    <>
      <div className="home_wrap pt-[9rem] flex items-center justify-center flex-col">
        <div className="home_profile bg-white rounded-full w-[7rem] h-[7rem]  relative">
          <img
            className="w-full h-full p-1 object-cover rounded-full"
            src="../public/Assets/img/People.png"
          />
          <p className="absolute bottom-0 right-0 text-[20px] ">👋</p>
        </div>
        <div className="home_text">
          <h3 className="text-center text-[1.3rem] p-[10px] lg:p-0 lg:text-[2.1rem] lg:w-[60%] lg:m-auto">
            <b className="font-[700]">Hello, I'm Deepanshu Kumar.</b> I'm a
            <b className="font-[700]"> Fronted-React-developer</b> with
            <b className="font-[700]"> 1 years</b> of experience. I enjoy
            building <p className=" italic inline-block "> sites & apps.</p> My
            focus is <p className="underline inline-block"> React (Next.js)</p>.
          </h3>
        </div>
        <div className="home_button flex flex-col lg:flex-row items-center gap-4 lg:gap-1 mt-6 lg:flex-wrap">
          <div className="flex gap-3">
          <div className="group btns cursor-pointer font-[500] text-[1rem] hover:scale-110 hover:bg-gray-950 bg-gray-900  text-[#fff] transition-all flex items-center rounded-3xl p-3 px-4 borderBlack gap-2">
            Contact Me here
            <FaArrowRightLong className="opacity-70 group-hover:translate-x-1 transition" />
          </div>
          <div className="group btns cursor-pointer font-[500] text-[1rem] hover:scale-110 transition-all  flex items-center rounded-3xl p-3 px-4 borderBlack bg-white gap-2">
           Download CV
           <GoDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </div>
          </div>
          <div className="flex gap-4">
          <div className="btns cursor-pointer hover:scale-110 transition-all  w-11 h-11 bg-white flex items-center borderBlack justify-center rounded-full">
          <FaLinkedin />
          </div>
          <div className="btns cursor-pointer hover:scale-110 transition-all  w-11 h-11 bg-white flex items-center borderBlack justify-center rounded-full">
          <FaGithub />
          </div>
          </div>
        </div>
        <div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></div>

      </div>
    </>
  );
};

export default Home;
