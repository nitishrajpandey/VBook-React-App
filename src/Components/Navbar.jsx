import { useState } from "react";
import { socialMedia } from "../Assets";
import { navLinks } from "../ConstantData";

function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <div className=" w-full bg-[#343947]  py-3 ss:p-3 sm:px-5">
      <nav className="  flex justify-center xs:justify-between items-center">
        <div className=" flex gap-2 items-center ">
          <img src={socialMedia} alt="social media icon" className="w-[40px]" />
          <h1 className="font-semibold text-[#00BD98] text-3xl">VBook</h1>
        </div>

        <div className="hidden  xs:block max-w-[500px]">
          <ul className="w-full flex justify-between gap-5 sm:gap-10 md:gap-14 items-center text-white">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`  font-semibold cursor-pointer ${
                  index === navLinks.length - 1 ? "mr-2" : null
                } ${active === nav.id && "font-bold text-green-600"} `}
                onClick={() => setActive(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex gap-3 items-center">
          <button className="navBar-Button">Sign Up</button>
          <button className="navBar-Button">Login In</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
