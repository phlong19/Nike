import { SiEricsson } from "react-icons/si";

import { headerLogo } from "../assets/index.ts";
import { navLinks } from "../data.ts";

function Nav() {
  return (
    <header className="absolute z-10 w-full px-8 py-8 sm:px-16">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="nike-logo" className="h-7 w-32" />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="font-montserrat text-slate-gray text-lg leading-normal transition-colors duration-200 hover:text-orange-600"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          {/* because using max-lg so you can get this flexibility */}
          {/* <div className="block max-lg:hidden"> */}
          <span className="text-xl text-orange-600">
            <SiEricsson />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
