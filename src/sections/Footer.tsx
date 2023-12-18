import { FaRegCopyright } from "react-icons/fa6";
import { footerLogo } from "../assets";
import DynamicFaIcon from "../components/DynamicFaIcon";
import { footerLinks, socialMedia } from "../data";

function Footer() {
  return (
    <footer className="max-container">
      {/* content */}
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        {/* upper */}
        <div className="flex flex-col items-start">
          {/* logo */}
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="font-montserrat text-white-80 mt-6 text-base leading-7 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfects Size in Store. Get Rewards
          </p>
          {/* social medias */}
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((social) => (
              <a
                title={social.src}
                href={"https://" + social.link}
                key={social.alt}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black bg-white transition-colors duration-200 hover:border-white hover:bg-black hover:text-white"
              >
                <span className="ml-[1.5px] text-2xl">
                  <DynamicFaIcon name={social.src} />
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* lists */}
        <div className="font-montserrat flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((part) => (
            <div key={part.title}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-white">
                {part.title}
              </h4>
              <ul>
                {part.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-80 hover:text-slate-gray mt-3 text-base leading-normal transition-colors duration-200"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* copyright */}
      <div className="text-white-80 mt-24 flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="font-montserrat flex flex-1 cursor-pointer items-center justify-start gap-2">
          <span className="m-0 text-xl">
            <FaRegCopyright />
          </span>
          <p>Copyright {new Date().getFullYear()} - All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
