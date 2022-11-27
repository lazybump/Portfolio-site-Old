import Image from "next/image";

interface TestimonialItemProps {
  name: string;
  company: string;
  imgUrl: string;
  message: string;
}

const TestimonialItem = ({
  name,
  company,
  imgUrl,
  message,
}: TestimonialItemProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-red-600">
      <Image
        className="rounded-full"
        src={imgUrl}
        alt="/"
        width="150"
        height="400"
      />
      <h3 className="mt-4 mb-12">
        {name} - {company}
      </h3>
      <p>{message}</p>
    </div>
  );
};

export default TestimonialItem;
