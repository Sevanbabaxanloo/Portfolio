import React from "react";
import futurest from "../assets/icon-exp/futurest.svg";
import basic from "../assets/icon-exp/basic-logo.svg";
import emoji from "../assets/icon-exp/me-emoji.svg";
import certificate from "../assets/basic.pdf";

const EduExp = () => {
  const obj = [
    {
      img: futurest,
      name: "Futurest (Czech Republic)",
      date: "Oct 2023 - Nov 2023",
      text: "I contributed to the development of my initial website, engaging in a challenging yet rewarding experience. Collaborating closely with both back-end developers and UI/UX designers, I gained valuable insights and skills. The project was successfully completed within the specified deadline, showcasing my commitment to delivering high-quality work in a timely manner.",
    },
    {
      img: basic,
      name: "Front-End Developer courses at Basic IT",
      date: "Feb 2023 - Aug 2023",
      text: "As a recent graduate at Basic IT Center , I bring fresh perspectives and a hunger for knowledge. I stay updated with the latest industry trends, attend webinars, and participate in online communities to stay connected with the ever-evolving world of frontend development.",
    },
    {
      img: emoji,
      name: "Self learning and growing",
      date: "Jan 2023 - Present",
      text: "Outside the digital realm, you'll find me reading and researching , where I find inspiration and fuel my creativity. I believe in the power of curiosity and continuous learning to propel my career forward.",
    },
  ];
  return (
    <div
      id="EduExp"
      className="w-full h-screen flex items-center justify-center max-md:py-[60px] max-md:px-[24px] max-md:h-content max-md:h-full"
    >
      <div className="flex flex-col items-center gap-[64px] max-md:w-full max-md:pt-0 max-md:gap-[32px]">
        <div className="max-md:w-full">
          <div className="text-center flex flex-col items-center gap-[32px]">
            <div className="container-EduExp flex flex-col items-center">
              <h2 className="text-[#D9D9D9] text-[32px] font-[700] font-[Montserrat] tracking-[3.84px] uppercase max-md:text-[28px] max-md:tracking-[2.88px] max-sm:text-[24px]">
                Education & Experience
              </h2>
            </div>
            <div className="w-[760px] max-md:w-full">
              <p className="text-[#E8FFF7] text-[18px] font-[300] font-[Montserrat] tracking-[0.36px] max-md:text-[20px] max-md:tracking-[0.32px] max-sm:text-[16px]">
                Though my professional journey is just beginning, I've already
                dipped my toes into various projects, gaining hands-on
                experience in crafting responsive and intuitive user interfaces.
                I'm driven by the belief that every line of code is an
                opportunity to make a positive impact. Proficient in:
              </p>
            </div>
          </div>
        </div>
        <div className="w-[760px] flex flex-col gap-[50px] max-md:w-full">
          {obj.map((item, index) => (
            <div key={index} className="flex flex-col gap-[23px]">
              <div className="flex flex-row justify-between gap-[2.222vw] flex-direction felx-position max-md:items-start">
                <div className="flex flex-row items-center gap-[0.764vw] max-md:flex-col max-md:gap-[11px] max-md:items-start">
                  <div>
                    <img
                      src={item.img}
                      alt={`Logo for ${item.name}`}
                      className="w-[32px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#fff] text-[22px] font-[700] font-[Montserrat] max-md:text-[20px] max-sm:text-[16px] text-center">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#8491A0] text-[14px] font-[400] font-[Montserrat]  max-sm:text-[16px]">
                    {item.date}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[18px]">
                <p className="text-[#8491A0] text-[14px] font-[400] font-[Montserrat] text-center max-md:text-[18px] max-sm:text-[16px] max-md:text-left">
                  {item.text}
                </p>
                {index === 1 && (
                  <p>
                    <a
                      href={certificate}
                      download={"certificate.pdf"}
                      className="text-gradient tracking-[1.6px] text-[20px] font-[700] font-[orbitron] leading-4"
                    >
                      Certificate
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EduExp;
