import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main: React.FC = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="tracking-widest text-gray-600 uppercase">
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-primary-color">Ahmed</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a front-end web developer specializing in building
            exceptional digital experiences. Currently, I&apos;m focused on
            building responsive and accessible front-end web applications
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <a href="https://github.com/lazybump">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
