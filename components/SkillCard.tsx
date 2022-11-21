import Image from "next/image";
import React from "react";

interface SkillCardProps {
  name: string;
  imgUrl: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  imgUrl,
}: SkillCardProps) => {
  return (
    <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-110">
      <div className="grid items-center justify-center grid-cols-2 gap-4">
        <div className="m-auto">
          <Image src={imgUrl} alt="/" width="64" height="64" />
        </div>
        <div className="text-center">
          <h3 className="uppercase">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
