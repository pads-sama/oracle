import { NavLink } from "react-router-dom";
import { linkData } from "../../lib/data";
import { Img } from "../Img";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("");

  return (
    <header className="h-auto md:h-[6.25rem] w-full  z-[999] | md:p-0 | xl:max-w-[1181px] xl:mx-auto">
      <nav className="h-[inherit] w-[inherit] flex justify-center flex-col pl-5 | md:flex-row md:justify-between md:items-center | xl:pl-0 ">
        <Img
          className="h-10 | sm:h-12 | md:h-12"
          src="images/img_group_642.svg"
          alt="website logo"
          onClick={() => navigate("/")}
        />
        <div className=" flex flex-wrap justify-center gap-5 mt-5 | md:w-[40rem] md:mt-0">
          {linkData.map((link) => (
            <NavLink
              key={link.id}
              to={link.url}
              className="grow min-w-20 h-10 relative flex justify-center tracking-wide font-sourcesanspro font-bold text-sm | md:text-lg | xl:justify-end"
              onClick={() => setIsActive(link.label)}
            >
              {link.label}
              {link.label === isActive && (
                <span className="w-[6px] h-[6px] text-red-400_01 rounded-full absolute bottom-0  | xl:left-28"></span>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
