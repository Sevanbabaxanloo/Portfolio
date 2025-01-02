import React from "react";
import js from "../assets/icon/javascript.svg";
import html from "../assets/icon/html.svg";
import css from "../assets/icon/css.svg";
import react from "../assets/icon/reactjs.svg";
import tailwind from "../assets/icon/tailwind.svg";

const Tools = () => {
  const tools = [
    {
      src: js,
      alt: "JavaScript",
      text: "JavaScript",
      imgClass: "w-[42px] h-[42px] max-md:w-[35px]",
      textClass: "text-[18px] max-lg:text-[12px]",
      widthClass:
        "w-[116px] max-md:w-full max-lg:w-[97px] max-md:h-[63px] max-md:col-start-2 max-md:col-end-4",
      orderClass: "order-1 max-md:order-4",
    },
    {
      src: html,
      alt: "HTML",
      text: "HTML",
      imgClass: "w-[55px] h-[63px] max-md:w-[31px]",
      textClass: "text-[27px] max-lg:text-[2vw]",
      widthClass:
        "w-[174px] max-md:w-full max-lg:w-[97px] max-md:h-[63px] max-md:col-span-2 max-md:row-span-1",
      orderClass: "order-2 max-md:order-2",
    },
    {
      src: css,
      alt: "CSS",
      text: "CSS",
      imgClass: "w-[75px] h-[84px] max-md:w-[31px]",
      textClass: "text-[36px] max-lg:text-[30px]",
      widthClass:
        "w-[232px] max-md:w-full max-lg:w-[97px] max-md:h-[63px] max-md:col-span-2 max-md:row-span-1",
      orderClass: "order-3 max-md:order-1",
    },
    {
      src: tailwind,
      alt: "Tailwind CSS",
      text: "Tailwind CSS",
      imgClass: "w-[63px] h-[63px] max-md:w-[35px]",
      textClass: "text-[27px] max-lg:text-[2vw]",
      widthClass:
        "w-[176px] max-md:w-full max-md:h-[63px] max-md:col-span-2 max-md:row-span-1",
      orderClass: "order-4 max-md:order-3",
    },
    {
      src: react,
      alt: "React JS",
      text: "React JS",
      imgClass: "w-[47px] h-[42px] max-md:w-[39px]",
      textClass: "text-[18px] max-lg:text-[12px]",
      widthClass:
        "w-[116px] max-md:w-full max-lg:w-[97px] max-md:h-[63px] max-md:col-start-4 max-md:col-end-6",
      orderClass: "order-5 max-md:order-5",
    },
  ];
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
        <div className="w-[1023px] grid grid-cols-5 auto-rows-fr gap-[3.8vw] justify-items-center items-center max-lg:w-[90vw] max-md:grid-cols-6 max-md:grid-rows-2 max-md:w-[91vw]">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-[8px] max-md:gap-[6.67px] ${tool.widthClass} ${tool.orderClass}`}
            >
              <img src={tool.src} alt={tool.alt} className={tool.imgClass} />
              <p
                className={`text-[#C5C5C5] font-[300] font-[Montserrat] tracking-[0.36px] text-center img-flex-text-lg max-md:text-[12px] ${tool.textClass}`}
              >
                {tool.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
