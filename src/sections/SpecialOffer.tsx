import { FaAnglesRight } from "react-icons/fa6";
import { offer } from "../assets";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <section className="max-container flex items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="special offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to increadible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" icon={<FaAnglesRight />} />
          <Button label="Learn more" type="secondary" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
