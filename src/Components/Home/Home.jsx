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
            src="public\Assets\img\People.png"
          />
          <p className="absolute bottom-0 right-0 text-[20px] ">👋</p>
        </div>
        <div className="home_text">
          <h3 className="text-center text-[2.1rem] w-[60%] m-auto">
            <b className="font-[700]">Hello, I'm Deepanshu Kumar.</b> I'm a
            <b className="font-[700]"> Fronted-React-developer</b> with
            <b className="font-[700]"> 1 years</b> of experience. I enjoy
            building <p className=" italic inline-block "> sites & apps.</p> My
            focus is <p className="underline inline-block"> React (Next.js)</p>.
          </h3>
        </div>
        <div className="home_button">
          <div className="btns">
            Contact Me here
            <FaArrowRightLong />

          </div>
          <div className="btns">
           Download CV
           <GoDownload />

          </div>
          <div className="btns">
          <FaLinkedin />
          </div>
          <div className="btns">
          <FaGithub />

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
