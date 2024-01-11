import React from "react";
const Sills = () => {
  const data = [
    {
      skills: [
        "communicate",
        "Time management",
        "self learning",
        "problem-solving",
        "adaptability",
        "Collaborative mindset",
      ],
    },
    {
      technologies: [
        "HTML",
        "CSS",
        "Java script",
        "React JS",
        "tailwind cSS",
        "libraries and framework",
      ],
    },
  ];
  const render = (className, category) => {
    const rectangle = [];

    for (let i = 0; i < data.length; i++) {
      const currentData = data[i][category];
      if (currentData) {
        for (let j = 0; j < currentData.length; j++) {
          rectangle.push(
            <div key={`${className}-${i}-${j}`} className={className}>
              {currentData[j]}
            </div>
          );
        }
      }
    }

    return rectangle;
  };
  return (
    <div
      id="Skills"
      className="w-full h-container flex items-center justify-center max-md:py-[60px] max-md:px-[24px]"
    >
      <div className="flex flex-col items-center justify-center gap-[64px] max-md:w-full">
        <div className="w-full text-center flex flex-col gap-[32px] max-md:w-full">
          <div>
            <h1 className="text-[#D9D9D9] text-[2.222vw] font-[Montserrat] font-[700] tracking-[3.84px] max-md:text-[28px] max-md:tracking-[2.88px] max-sm:text-[24px] ">
              Skills
            </h1>
          </div>
          <div className="w-[760px] max-md:w-full">
            <p className="text-[#E8FFF7] text-[18px] font-[300] font-[Montserrat] tracking-[0.36px] max-md:text-[16px] max-md:tracking-[0.32px]">
              Passionate about creating user-friendly and visually appealing
              websites, I'm on the exciting journey of turning my coding skills
              into impactful web experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[40px] justify-center gap-skill">
          <div className="w-[768px] flex flex-col items-center gap-[23px] max-md:w-full">
            <div className="flex flex-row justify-center gap-[40px] w-full max-md:flex-wrap max-md:flex-col max-md:w-[73vw]">
              <div className="font-[Orbitron] text-[12px] font-[700] flex flex-col items-center gap-[2.2vh] max-md:w-[73vw]">
                <h2 className="text-[#FFF] text-[22px] font-[700] font-[Montserrat] max-md:text-[16px]">
                  Soft Skills
                </h2>
                {render("rectangle-w", "skills")}
              </div>
              <div className="font-[Orbitron] text-[12px] font-[700] flex flex-col items-center gap-[2.2vh] max-md:w-[73vw]">
                <h2 className="text-[#FFF] text-[22px] font-[700] font-[Montserrat] max-md:text-[16px]">
                  Hard Skills
                </h2>
                {render("rectangle-g", "technologies")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sills;
