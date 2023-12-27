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
        className="bg-[var(--header-color)] w-screen z-10 fixed top-0 left-0 menu"
      >
        <div className="h-[5.694vw] flex justify-center items-center mx-[23.194vw]">
          <ul className="font-fam w-full flex flex-row justify-between text-[var(--text)] text-[1.111vw] font-[700] tracking-[1.6px]">
            <li className="cursor-pointer" onClick={() => handleScroll("Home")}>
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleScroll("Tools")}
            >
              Tools
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleScroll("EduExp")}
            >
              Edu. & Exp.
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleScroll("Skills")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleScroll("Projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer"
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
