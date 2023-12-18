import { FaStar } from "react-icons/fa6";
import { generateGoodRating } from "../utils/helper";

function ProductCard({
  name,
  imgURL,
  price,
}: {
  imgURL: string;
  name: string;
  price: string;
}) {
  return (
    <div className="flex w-full flex-1 flex-col max-sm:w-full">
      <img src={imgURL} alt="hot product" className="h-[280px] w-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <span className="text-coral-red text-2xl">
          <FaStar />
        </span>
        <p className="font-montserrat text-slate-gray text-xl leading-normal">
          {generateGoodRating(7, 9)}
        </p>
      </div>
      <h3 className="font-palanquin mt-2 text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="font-montserrat text-coral-red mt-2 text-2xl font-semibold leading-normal">
        {price}
      </p>
    </div>
  );
}

export default ProductCard;
