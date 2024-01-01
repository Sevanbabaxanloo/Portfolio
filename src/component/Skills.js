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
      className="w-screen flex items-center justify-center pt-[200px] padding"
    >
      <div className="flex flex-col items-center justify-center gap-[64px]">
        <div className="text-center flex flex-col gap-[32px]">
          <div>
            <h1 className="text-[#D9D9D9] text-[2.222vw] font-[Montserrat] font-[700] tracking-[3.84px] text-skills">
              Skills
            </h1>
          </div>
          <div className="w-[40.972vw] width">
            <p className="text-[#E8FFF7] text-[1.25vw] font-[300] font-[Montserrat] h1-skills">
              Passionate about creating user-friendly and visually appealing
              websites, I'm on the exciting journey of turning my coding skills
              into impactful web experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[40px] justify-center gap-skill">
          <div className="flex flex-col items-center gap-[23px]">
            <div className="w-full text-center flex justify-around">
              <h2 className="text-[#FFF] text-[1.528vw] font-[700] font-[Montserrat] h1-skills">
                Soft Skills
              </h2>
              <h2 className="text-[#FFF] text-[1.528vw] font-[700] font-[Montserrat] h1-skills">
                Hard Skills
              </h2>
            </div>
            <div className="flex flex-row gap-[23px] w-full">
              <div className="uppercase font-[Orbitron] text-[0.833vw] flex flex-col items-center gap-[2.2vh] items-font-size">
                {render("rectangle-w", "skills")}
              </div>
              <div className="uppercase font-[Orbitron] text-[0.833vw] flex flex-col items-center gap-[2.2vh] items-font-size">
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
