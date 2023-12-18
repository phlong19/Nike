import { FaCartPlus } from "react-icons/fa6";

import Button from "../components/Button";
import { shoes, statistics } from "../data";
import { bigShoe1 } from "../assets";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import HeroImage from "../components/HeroImage";

function Hero() {
  const [currentImage, setCurrentImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="relative flex w-full flex-col items-start justify-center pt-28 max-xl:px-8 xl:w-2/5">
        <p className="font-montserrat text-coral-red text-xl">
          Our Summer collections
        </p>

        <h1 className="font-palanquin mt-10 text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mb-14 mt-6 text-lg leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" icon={<FaCartPlus />} />

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat, i) => (
            <div key={i}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* imgs */}
      <HeroImage currentImage={currentImage} setCurrentImage={setCurrentImage}>
        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe, i) => (
            <div key={i}>
              <ShoeCard
                img={shoe}
                active={currentImage === shoe.bigShoe}
                onClick={() => setCurrentImage(shoe.bigShoe)}
              />
            </div>
          ))}
        </div>
      </HeroImage>
    </section>
  );
}

export default Hero;
