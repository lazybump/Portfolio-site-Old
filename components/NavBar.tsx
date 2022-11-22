import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };
    addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  const tabs = [
    { name: "home", route: "/" },
    { name: "About", route: "/#about" },
    { name: "Skills", route: "/#skills" },
    { name: "Projects", route: "/#projects" },
    { name: "Contact", route: "/#contact" },
  ];

  const socials = [
    <FaLinkedinIn />,
    <FaGithub />,
    <AiOutlineMail />,
    <BsFillPersonLinesFill />,
  ];

  return (
    <div className={`fixed w-full h-20 z-[100] ${shadow ? "shadow-xl" : ""}`}>
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/navLogo.png"
            alt="/"
            width="40"
            height="50"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            {tabs.map((tab) => (
              <Link href={tab.route}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  {tab.name}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md: [45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/navLogo.png"
                  width="35"
                  height="5"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              {tabs.map((tab) => (
                <Link href={tab.route}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    {tab.name}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {socials.map((icon) => (
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
