import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectItemProps {
  title: string;
  imgUrl: string;
  projectUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  imgUrl,
  projectUrl,
}: ProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto p-4 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gradient-before to-gradient-after">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={imgUrl}
        alt="/"
        width="3000"
        height="20"
      />
      <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 group-hover:block top-1/2 left-1/2">
        <h3 className="text-2xl tracking-wider text-center text-white">
          {title}
        </h3>
        <p className="pt-2 pb-4 text-center text-white">React JS</p>
        <Link href={projectUrl}>
          <p className="p-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
            Project info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
