import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-primary-color">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have long had a desire to create, and used to make videos on
            YouTube that would get circa 100k+ views each, as a hobby. I would
            spend countless hours on programs like Sony Vegas and Adobe After
            Effects to put together AMVs (Anime Music Videos). The constant
            editing, re-editing, running into bugs, etc was admittedly tough but
            the final result as well as the feedback made it all worthwhile in
            the end. Eventually, I had to end it due to a lack of time but
            it&apos;s that same drive and commitment that has helped me learn to
            build websites and hopefully can be translated into my next role as
            a developer.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image
            src="/assets/videoEditing.jpg"
            alt="/"
            width="800"
            height="10"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
