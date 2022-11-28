import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/shoppingCart" || router.asPath === "/symphony") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

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
    { id: 1, name: "home", route: "/" },
    { id: 2, name: "About", route: "/#about" },
    { id: 3, name: "Skills", route: "/#skills" },
    { id: 4, name: "Projects", route: "/#projects" },
    { id: 5, name: "Testimonials", route: "/#testimonials" },
    { id: 6, name: "Contact", route: "/#contact" },
  ];

  const socials = [
    { id: 1, icon: <FaLinkedinIn /> },
    { id: 2, icon: <FaGithub /> },
    { id: 3, icon: <AiOutlineMail /> },
    { id: 4, icon: <BsFillPersonLinesFill /> },
  ];

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={`fixed w-full h-20 z-[100] ${shadow ? "shadow-xl" : ""}`}
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/assets/navbarLogo.png" alt="/" width="120" height="50" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {tabs.map((tab) => (
              <Link href={tab.route} key={tab.id}>
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
                  src="/assets/navbarLogo.png"
                  width="120"
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
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              {tabs.map((tab) => (
                <Link href={tab.route} key={tab.id}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    {tab.name}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {socials.map((social) => (
                  <div
                    key={social.id}
                    className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
                  >
                    {social.icon}
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
