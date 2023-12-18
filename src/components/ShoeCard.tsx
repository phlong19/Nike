interface Props {
  img: {
    thumbnail: string;
    bigShoe: string;
  };
  active: boolean;
  onClick: () => void;
}

function ShoeCard({ img, onClick, active }: Props) {
  return (
    <div
      className={`cursor-pointer rounded-xl border-2 max-sm:flex-1 ${
        active ? "border-coral-red" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <div className="bg-card flex items-center justify-center rounded-xl bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={img.thumbnail}
          alt="thumbnail"
          className="object-contain"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
}

export default ShoeCard;
