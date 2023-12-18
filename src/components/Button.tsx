import { ReactElement } from "react";

interface Props {
  label: string;
  icon?: ReactElement;
  type?: "primary" | "secondary";
  fullWidth?: boolean;
}

function Button({ label, icon, fullWidth, type = "primary" }: Props) {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-coral-red border-coral-red hover:text-coral-red text-white hover:bg-white"
          : "text-slate-gray border-slate-gray hover:text-black"
      } ${fullWidth && "w-full"}
      font-montserrat flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-lg leading-none transition-colors duration-300`}
    >
      {label}
      {icon && <span className="mt-[2px] h-5 w-5">{icon}</span>}
    </button>
  );
}

export default Button;
