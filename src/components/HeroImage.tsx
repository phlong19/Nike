import { useEffect, useState } from "react";
import { shoes } from "../data";
import ShoeCard from "./ShoeCard";

function HeroImage() {
  const [index, setIndex] = useState(0);
  const currentImage = shoes[index].bigShoe;

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        return setIndex(0);
      }
      setIndex((index) => index + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="bg-primary bg-hero relative flex flex-1 items-center justify-center bg-cover bg-center max-xl:py-40 xl:min-h-screen">
      <img
        src={currentImage}
        alt="shoe"
        width={610}
        height={500}
        className="relative z-10 object-contain"
      />
      <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
        {shoes.map((shoe, i) => (
          <div key={i}>
            <ShoeCard
              img={shoe}
              active={currentImage === shoe.bigShoe}
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroImage;
