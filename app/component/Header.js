import React from "react";
import Menu from "./HeaderMenu";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="Header"
        className="bg-[var(--header-color)] w-full z-10 sticky top-0 menu"
      >
        <div className="h-[82px] flex justify-center items-center ">
          <ul className="font-Orbitron w-full flex flex-row gap-[10px] justify-center text-[var(--text)] text-[16px] font-[700] tracking-[1.6px]">
            <li className="cursor-pointer w-[116px] h-[16px] list-none text-[16px] flex justify-center" onClick={() => handleScroll("Home")}>
              Home
            </li>
            <li
              className="cursor-pointer w-[116px] h-[16px] list-none text-[16px] flex justify-center"
              onClick={() => handleScroll("Tools")}
            >
              Tools
            </li>
            <li
              className="cursor-pointer w-[120px] h-[16px] list-none text-[16px] flex justify-center"
              onClick={() => handleScroll("EduExp")}
            >
              Edu. & Exp.
            </li>
            <li
              className="cursor-pointer w-[116px] h-[16px] list-none text-[16px] flex justify-center"
              onClick={() => handleScroll("Skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer w-[116px] h-[16px] list-none text-[16px] flex justify-center"
              onClick={() => handleScroll("Projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer w-[116px] h-[16px] list-none text-[16px] flex justify-center"
              onClick={() => handleScroll("Contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </>
  );
};
export default Header;
