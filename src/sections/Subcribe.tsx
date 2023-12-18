import Button from "../components/Button";

function Subcribe() {
  return (
    <section
      id="contact-us"
      className="max-container flex items-center justify-between gap-10 max-lg:flex-col"
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="sm:border-slate-gray flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border lg:max-w-[40%]">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="text-slate-gray max-sm:border-slate-gray border pl-5 text-base leading-normal outline-none max-sm:w-full max-sm:rounded-full max-sm:p-5 sm:flex-1 sm:border-none"
        />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
}

export default Subcribe;
