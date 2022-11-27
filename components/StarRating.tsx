import { AiOutlineStar } from "react-icons/ai";

interface StarRatingProps {
  starNum: number;
}

const StarRating = ({ starNum }: StarRatingProps) => {
  let stars = [];

  for (let i = 0; i < starNum; i++) {
    stars.push(<AiOutlineStar key={i} className="text-yellow-400" size={25} />);
  }

  return <>{stars}</>;
};

export default StarRating;
