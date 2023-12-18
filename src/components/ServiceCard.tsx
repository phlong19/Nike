import DynamicFaIcon from "./DynamicFaIcon";

function ServiceCard({
  icon,
  label,
  subtext,
}: {
  icon: string;
  label: string;
  subtext: string;
}) {
  return (
    <div className="shadow-3xl w-full flex-1 rounded-[20px] px-10 py-16 sm:w-[350px] sm:min-w-[350px]">
      <div className="bg-coral-red flex h-11 w-11 items-center justify-center rounded-full">
        <span className="text-2xl text-white">
          <DynamicFaIcon name={icon} />
        </span>
      </div>
      <h3 className="font-palanquin mt-5 text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="text-slate-gray font-montserrat mt-3 break-words text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
}

export default ServiceCard;
