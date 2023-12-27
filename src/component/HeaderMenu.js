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
      className={`fixed top-0 z-40 ${
        isMenuOpen ? "w-[100vw] h-[100vh] bg-[#323232]" : ""
      }`}
    >
      <div>
        <div className="pl-[20px] pt-[20px] hidden menu-screen">
          <button
            onClick={handleToggleMenu}
            className="bg-[#222] border-[2px] border-[#4f4f4f] w-[35px] h-[35px] rounded-[50%] flex items-center justify-center"
          >
            {isMenuOpen ? (
              <TfiClose className="text-[#4f4f4f]" />
            ) : (
              <TfiMenu className="text-[#4f4f4f]" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col items-center justify-center">
            <ul className="w-[100%] h-[70vh] flex flex-col items-center justify-center gap-[40px] text-[#fff] font-[Orbitron] tracking-[5px] mt-[40px]">
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
