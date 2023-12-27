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
      className="w-screen flex items-center justify-center pt-[200px] padding"
    >
      <div className="flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center gap-[32px]">
          <div>
            <h2 className="font-[Montserrat] font-[700] text-[#D9D9D9] text-[2.222vw] tracking-[3.84px] h1-tools">
              Tools
            </h2>
          </div>
          <div className="w-[55.556vw] text-center container-size width">
            <p className="text-[1.25vw] text-[#E8FFF7] font-[300] font-[Montserrat] text-tools">
              Passionate about creating user-friendly and visually appealing
              websites, I'm on the exciting journey of turning my coding skills
              into impactful web experiences. Proficient in
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[3.889vw] container-size img-flex">
          <div className="flex flex-col items-center gap-[8px] w-[8.056vw]">
            <img src={js} className="w-[42px]" />
            <p className="text-[#C5C5C5] text-[1.25vw] font-[300] font-[Montserrat] tracking-[0.36px] img-flex-text-lg">
              JavaScript
            </p>
          </div>
          <div className="flex flex-col items-center gap-[12px] w-[10vw]">
            <img src={html} className="w-[56px]" />
            <p className="text-[#C5C5C5] text-[1.5vw] font-[300] font-[Montserrat] tracking-[0.56px] img-flex-text-lg">
              HTML
            </p>
          </div>
          <div className="flex flex-col items-center gap-[16px] w-[16.111vw]">
            <img src={css} className="w-[75px]" />
            <p className="text-[#C5C5C5] text-[2.5vw] font-[300] font-[Montserrat] tracking-[0.72px] img-flex-text-lg">
              CSS
            </p>
          </div>
          <div className="flex flex-col items-center gap-[12px] w-[12.083vw] max-md:h-[17vw] ">
            <div className="h-[55px]">
              <img src={tailwind} className="w-[56px]" />
            </div>
            <p className="text-[#C5C5C5] text-[1.5vw] font-[300] font-[Montserrat] tracking-[0.56px] img-flex-text-lg">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col items-center gap-[8px] w-[8.056vw]">
            <img src={react} className="w-[42px]" />
            <p className="text-[#C5C5C5] text-[1.25vw] font-[300] font-[Montserrat] tracking-[0.36px] img-flex-text-lg">
              React JS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
