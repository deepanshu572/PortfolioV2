import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact mt-16">
        <div className="contact_head text-center">
          <h2 className="font-[600] text-3xl pb-8 ">Contact me</h2>
          <p className="text-gray-700 px-6 lg:px-0 -mt-6 dark:text-white/80">
            Please contact me directly at{" "}
            <a class="underline" href="mailto:krdeepanshu572@gmail.com">
              krdeepanshu572@gmail.com
            </a>{" "}
            or through this form.
          </p>
        </div>
        <form className=" w-[90%] lg:w-[70%] m-auto justify-center items-center mt-10 mb-10 flex flex-col dark:text-black gap-2 ">
          <input
            className=" w-full border border-black/5 h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 outline-none transition-all dark:outline-none"
            type="text"
            placeholder="Your Email"
          />
          <textarea
            class=" w-full border border-black/5 h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 outline-none transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required=""
            maxlength="5000"
            style={{ height: "258px" }}
          ></textarea>
          <div className="w-full flex justify-start ">
            <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
              Submit
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
