import { Dispatch, SetStateAction, useEffect } from "react";
import { bigShoe1 } from "../assets";

interface Props {
  children: React.ReactNode;
  currentImage: string;
  setCurrentImage: Dispatch<SetStateAction<string>>;
}

function HeroImage({ currentImage, setCurrentImage, children }: Props) {
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentImage.endsWith("3.png")) {
        return setCurrentImage(bigShoe1);
      }

      const nextShoe = Number(currentImage.slice(-5, -4)) + 1;
      setCurrentImage(currentImage.slice(0, -5) + nextShoe + ".png");
    }, 2000);
    return () => clearInterval(timer);
  }, [currentImage, setCurrentImage]);

  return (
    <div className="bg-primary bg-hero relative flex flex-1 items-center justify-center bg-cover bg-center max-xl:py-40 xl:min-h-screen">
      <img
        src={currentImage}
        alt="shoe"
        width={610}
        height={500}
        className="relative z-10 object-contain"
      />
      {children}
    </div>
  );
}

export default HeroImage;
