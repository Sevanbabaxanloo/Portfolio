import React, { useLayoutEffect, useState } from "react";
import { TfiMenu, TfiClose } from "react-icons/tfi";

const HeaderMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useLayoutEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isMenuOpen) {
      body.style.overflowY = "hidden";
      html.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
      html.style.overflowY = "auto";
    }

    return () => {
      body.style.overflowY = "auto";
      html.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`sticky top-0 z-40 ${
        isMenuOpen ? "w-full h-[100vh] bg-[#323232]" : "hidden menu-screen"
      }`}
    >
      <div
        className={
          isMenuOpen
            ? ""
            : "w-screen h-[64px] max-md:bg-[#222] max-md:bg-opacity-70 flex justify-center items-center max-lg:w-full"
        }
      >
        <div className="w-full flex justify-center items-center max-md:px-[24px] bg-[#323232]">
          <div className="flex justify-center h-[64px] w-full max-md:justify-end bg-[#323232]">
            <button
              onClick={handleToggleMenu}
              className={isMenuOpen ? "flex items-center justify-center bg-[#323232] h-[64px] w-[64px] border-none outline-none" : "flex items-center justify-center bg-[#323232] h-[64px] w-[64px] border-none outline-none"}
            >
              {isMenuOpen ? (
                <TfiClose className="text-[#fff] w-[24px] h-[24px] " />
              ) : (
                <TfiMenu className="text-[#fff] w-[24px] h-[24px] " />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col items-center justify-center">
            <ul className="w-[100%] h-[70vh] flex flex-col items-center justify-center gap-[40px] text-[#fff] font-Orbitron tracking-[5px]">
              <li onClick={() => handleScroll("Home")} className="list-none">
                Home
              </li>
              <li onClick={() => handleScroll("Tools")} className="list-none">
                Tools
              </li>
              <li onClick={() => handleScroll("EduExp")} className="list-none">
                Edu. & Exp.
              </li>
              <li onClick={() => handleScroll("Skills")} className="list-none">
                Skills
              </li>
              <li onClick={() => handleScroll("Projects")} className="list-none">
                Projects
              </li>
              <li onClick={() => handleScroll("Contact")} className="list-none">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
