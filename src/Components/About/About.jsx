import React from "react";

const About = () => {
  return (
    <>
      <div className="about_wrapper text-center w-full">
        <h1 className="font-[600] pt-6 text-3xl  lg:pt-0 lg:pb-6 ">About me</h1>
        <p className=" w-full p-[10px] lg:p-0 lg:w-[55%] text-sm lg:m-auto leading-7 ">
        <b className=" font-[600]">I am a passionate and dedicated frontend developer based in Ranchi,
          Jharkhand, </b>  with expertise in <b className=" italic "> building modern </b>, responsive, and
          user-friendly web applications. I hold a degree from Ranchi University
          and have honed my skills in HTML, CSS, JavaScript, Bootstrap, Tailwind
          CSS, React.js, and Next.js. Currently, I am contributing my expertise
          as a frontend developer at Sysroot Solutions Pvt. Ltd., an IT-based
          company in Ranchi. My work revolves around crafting seamless user
          experiences, optimizing web performance, and staying updated with the
          latest industry trends.
        </p>
        <p className=" w-full p-[10px] hidden lg:block lg:p-0 lg:w-[55%] lg:m-auto leading-7 ">
          What excites me most about web development is the challenge of
          problem-solving and bringing creative designs to life through clean,
          efficient code. I am always eager to expand my knowledge and embrace
          new technologies to enhance my capabilities as a developer. When I’m
          not coding, I enjoy exploring new technologies, watching movies, and
          engaging in activities that spark creativity and curiosity.
        </p>
      </div>
    </>
  );
};

export default About;
