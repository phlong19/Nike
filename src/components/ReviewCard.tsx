import { FaStar } from "react-icons/fa6";

interface Props {
  review: {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
  };
}

function ReviewCard({ review }: Props) {
  const { customerName, imgURL, rating, feedback } = review;
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt={customerName}
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5 ">
        <span className="text-coral-red text-2xl">
          <FaStar />
        </span>
        <p className="text-slate-gray font-montserrat text-xl">{rating}</p>
      </div>
      <h3 className="font-palanquin mt-1 text-center text-3xl font-bold">
        {customerName}
      </h3>
    </div>
  );
}

export default ReviewCard;
