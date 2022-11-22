import Image from "next/image";
import pic from "../public/assets/projects/shoppingCartBanner.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export interface TechnologiesProps {
  id: number;
  name: string;
}

const shoppingCart: React.FC = () => {
  const technologies: TechnologiesProps[] = [
    { id: 1, name: "React" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Tailwind" },
    { id: 4, name: "JavaScript" },
    { id: 5, name: "Netlify" },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute object-cover z-1" fill src={pic} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
          <h2 className="py-2">Shopping Cart</h2>
          <h3>React JS | TypeScript | Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="mb-10">Overview</h2>
          <p>
            This app was built using React JS and is hosted on Netlify. Users
            are able to add and remove items to a shopping cart. They can also
            increase item quantity and see a running total.
          </p>
          <div className="mt-8">
            <a
              href="https://shoppingcart-ts-react.netlify.app/"
              className="px-8 py-2 mr-8 uppercase shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white"
            >
              Demo
            </a>
            <a
              href="https://github.com/lazybump/Shopping-Cart"
              className="px-8 py-2 uppercase shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white"
            >
              Code
            </a>
          </div>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {technologies.map((tech) => (
                <p
                  className="flex items-center py-2 text-gray-600"
                  key={tech.id}
                >
                  <RiRadioButtonFill className="pr-1" /> {tech.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects" className="text-lg underline">
          Back
        </Link>
      </div>
    </div>
  );
};

export default shoppingCart;
