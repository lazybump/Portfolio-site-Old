import Image from "next/image";
import StarRating from "./StarRating";

interface TestimonialItemProps {
  name: string;
  company: string;
  imgUrl: string;
  message: string;
  stars: number;
}

const TestimonialItem = ({
  name,
  company,
  imgUrl,
  message,
  stars,
}: TestimonialItemProps) => {
  return (
    <div className="flex flex-col items-center p-6 h-[450px] shadow-xl w-96 shadow-gray-400 rounded-xl">
      <Image
        className="rounded-full"
        src={imgUrl}
        alt="/"
        width="150"
        height="400"
      />
      <h3 className="my-4">
        {name} - {company}
      </h3>
      <div className="flex justify-between mb-10">
        <StarRating starNum={stars} />
      </div>
      <p>"{message}"</p>
    </div>
  );
};

export default TestimonialItem;
