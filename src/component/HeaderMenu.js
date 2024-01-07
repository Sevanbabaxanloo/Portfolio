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
        isMenuOpen ? "w-[100vw] h-[100vh] bg-[#323232]" : "hidden menu-screen"
      }`}
    >
      <div
        className={
          isMenuOpen
            ? ""
            : "w-screen h-[64px] max-md:bg-[#222] max-md:bg-opacity-70 flex justify-center items-center"
        }
      >
        <div className="">
          <div className="flex justify-center h-[64px]">
            <button
              onClick={handleToggleMenu}
              className={isMenuOpen ? "" : "flex items-center justify-center"}
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
            <ul className="w-[100%] h-[70vh] flex flex-col items-center justify-center gap-[40px] text-[#fff] font-[Orbitron] tracking-[5px]">
              <li onClick={() => handleScroll("Home")}>Home</li>
              <li onClick={() => handleScroll("Tools")}>Tools</li>
              <li onClick={() => handleScroll("EduExp")}>Edu. & Exp.</li>
              <li onClick={() => handleScroll("Skills")}>Skills</li>
              <li onClick={() => handleScroll("Projects")}>Projects</li>
              <li onClick={() => handleScroll("Contact")}>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
