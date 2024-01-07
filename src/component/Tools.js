import React from "react";
import js from "../assets/icon/javascript.svg";
import html from "../assets/icon/html.svg";
import css from "../assets/icon/css.svg";
import react from "../assets/icon/reactjs.svg";
import tailwind from "../assets/icon/tailwind.svg";

const Tools = () => {
  return (
    <div
      id="Tools"
      className="w-full h-screen flex items-center justify-center max-md:py-[60px] max-md:px-[24px]"
    >
      <div className="flex flex-col items-center gap-[64px] max-md:w-full">
        <div className="w-full flex flex-col items-center gap-[32px] max-md:w-full">
          <div>
            <h2 className="font-[Montserrat] font-[700] text-[#D9D9D9] text-[32px] tracking-[3.84px] max-md:tracking-[2.88px] max-md:text-[28px] max-sm:text-[24px]">
              Tools
            </h2>
          </div>
          <div className="w-[760px] text-center max-md:w-full">
            <p className="text-[18px] text-[#E8FFF7] font-[300] tracking-[0.36px] font-[Montserrat]  max-md:tracking-[0.32px] max-sm:text-[16px]">
              Passionate about creating user-friendly and visually appealing
              websites, I'm on the exciting journey of turning my coding skills
              into impactful web experiences. Proficient in
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[3.889vw] img-flex max-md:grid max-md:grid-cols-3 ">
          <div className="flex flex-col items-center gap-[8px] w-[8.056vw] max-md:gap-[6.67px]">
            <img
              src={js}
              alt="JavaScript"
              className="w-[42px] h-[42px] max-md:w-[31px] "
            />
            <p className="text-[#C5C5C5] text-[1.25vw] font-[300] font-[Montserrat] tracking-[0.36px] img-flex-text-lg max-md:text-[14px] max-md:tracking-[0.28px]">
              JavaScript
            </p>
          </div>
          <div className="flex flex-col items-center gap-[12px] w-[10vw] max-md:gap-[6.67px]">
            <img
              src={html}
              alt="HTML"
              className="w-[55px] h-[63px] max-md:w-[31px]"
            />
            <p className="text-[#C5C5C5] text-[1.5vw] font-[300] font-[Montserrat] tracking-[0.56px] img-flex-text-lg max-md:text-[14px]">
              HTML
            </p>
          </div>
          <div className="flex flex-col items-center gap-[16px] w-[16.111vw] max-md:gap-[6.67px]">
            <img
              src={css}
              alt="CSS"
              className="w-[75px] h-[84px] max-md:w-[31px] "
            />
            <p className="text-[#C5C5C5] text-[2.5vw] font-[300] font-[Montserrat] tracking-[0.72px] img-flex-text-lg max-md:text-[14px]">
              CSS
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[12px] w-[12.083vw] max-md:h-[17vw] max-md:gap-[6.67px]">
            <div className="h-[55px] flex">
              <img
                src={tailwind}
                alt="Tailwind CSS"
                className="w-[63px] h-[63]"
              />
            </div>
            <p className="text-[#C5C5C5] text-[1.5vw] font-[300] font-[Montserrat] tracking-[0.56px] img-flex-text-lg max-md:text-[14px]">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col items-center gap-[8px] w-[8.056vw] max-md:gap-[6.67px]">
            <img
              src={react}
              alt="React JS"
              className="w-[47px] h-[42px] max-md:w-[31px]"
            />
            <p className="text-[#C5C5C5] text-[1.25vw] font-[300] font-[Montserrat] tracking-[0.36px] img-flex-text-lg max-md:text-[14px]">
              React JS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
