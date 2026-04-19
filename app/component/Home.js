import React from "react";
import { Typewriter } from "react-simple-typewriter";

const emoji = "/image.svg";
const btn = "/btn.svg";
const btn1 = "/btn1.svg";
const cv = "/sevan_babakhanloo_cv.pdf";

const Home = () => {
  const contact = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="Home"  
      className="global-margin w-full h-[850px] flex items-center justify-center max-md:py-[60px] max-md:px-[24px] max-md:min-h-screen"
    >
      <div className=" w-full flex flex-col items-center max-md:w-full max-md:gap-[32px] max-md:py-[35px]">
        <div className="bg-gradient-circle flex flex-col items-center justify-center gap-[64px] rounded-full img-size max-sm:w-[62vw] max-sm:h-auto">
          <div className="flex justify-center items-center w-[213px] h-[213px] rounded-full bg-gradient max-md:w-[180px] max-md:h-[180px]">
            <div
              className="min-w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${emoji})`, height: "100%" }}
            ></div>
          </div>
        </div>

        <div className="w-full relative max-md:w-full">
          <div className="flex flex-col items-center max-md:w-full">
            <div className="global-padding w-full flex flex-col items-center justify-center gap-[32px] gap max-md:w-full">
              <div className="w-full h-content container-size max-sm:w-auto max-md:text-center moving-text">
                <h1 className="text-[var(--text)] text-[55px] font-[800] font-montserrat text-center max-md:text-[24px] max-md:h-[100px]">
                  Turning designs into clean <br/>
                  interactive UIs
                  <br />
                  <span className="ml-[10px] text-gradient font-montserrat">
                    <Typewriter
                      words={["JavaScript", "React", "Web Development"]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </h1>
              </div>

              <div className="w-[760px] container-size text-center max-md:w-[650px] max-sm:w-full">
                <p className=" font-montserrat font-[300] text-[var(--p-text)] text-[18px] tracking-[0.36px] max-md:text-[19px] max-md:tracking-[0.32px] max-sm:text-[16px]">
                  Hello, I'm Sevan Babakhanloo , Junior front-end developer with experience in React, Tailwind CSS and real client projects. Based in Yerevan, open to remote roles.
                </p>
              </div>

              <div className="flex flex-row items-flex-start max-md:w-[400px] max-lg:w-[400px] max-lg:justify-center">
                <div className="flex gap-[2.37vw] max-sm:flex-col max-lg:w-full max-lg:justify-center max-md:gap-[24px] max-sm:items-center">
                  <button
                    onClick={() => contact("Contact")}
                    className="w-[162px] bg-transparent border-none outline-none relative button-size max-lg:w-[170px] max-sm:w-[162px] max-md:h-[40px]"
                  >
                    <img src={btn1} alt="Contact Button" />
                    <p className="absolute text-[#000] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] w-full text-[12px] font-[700] font-[orbitron] tracking-[1.2px] max-md:text-[14px]">
                      Get In Touch
                    </p>
                  </button>

                  <button className="w-[162px] bg-transparent border-none outline-none relative button-size max-lg:w-[170px] max-sm:w-[162px] max-md:h-[40px]">
                    <a href={cv} download="cv.pdf">
                      <img src={btn} alt="Download Button" />
                      <p className="absolute text-[#fff] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] w-full text-[12px] font-[700] font-[orbitron] tracking-[1.2px] max-md:text-[14px]">
                        Download CV
                      </p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;